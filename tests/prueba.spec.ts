import { test, expect } from '@playwright/test';

test('Crear evento 19/02/2026 a las 10:00', async ({ page }) => {

  await page.goto('https://javascript.daypilot.org/demo/calendar/');
  await page.waitForLoadState('networkidle');

  await page.screenshot({ path: 'screenshots/01_inicial.png', fullPage: true });

  // 🗓 1️⃣ Encontrar índice de la columna del día 2/19/2026
  const headers = page.locator('.calendar_default_colheader_inner');

  const targetDate = '2/19/2026';
  const headerCount = await headers.count();

  let columnIndex = -1;

  for (let i = 0; i < headerCount; i++) {
    const text = await headers.nth(i).textContent();
    if (text?.includes(targetDate)) {
      columnIndex = i;
      break;
    }
  }

  if (columnIndex === -1) {
    throw new Error('No se encontró la columna de la fecha');
  }

  // 🕒 2️⃣ Encontrar índice de la fila hora 10
  const timeHeaders = page.locator('.calendar_default_rowheader_inner');
  const timeCount = await timeHeaders.count();

  let rowIndex = -1;

  for (let i = 0; i < timeCount; i++) {
    const text = await timeHeaders.nth(i).textContent();
    if (text?.trim() === '10AM') {
      rowIndex = i;
      break;
    }
  }

  if (rowIndex === -1) {
    throw new Error('No se encontró la fila de la hora 10');
  }

  // 🎯 3️⃣ Click en la intersección
  const cell = page
    .locator('.calendar_default_cell')
    .nth(rowIndex * headerCount + columnIndex);

  await cell.click();

    // ✍ 4️⃣ Crear evento
    const modal = page.locator('.modal_default_main').filter({
        has: page.locator('input')
    }).last();

    await expect(modal).toBeVisible();

    await modal.locator('input').fill('Quedar con Javi');

    await modal.locator('button:has-text("OK")').click();



  const event = page.locator('.calendar_default_event', { hasText: 'Quedar con Javi' });
  await expect(event).toBeVisible();

  await page.screenshot({ path: 'screenshots/02_evento_creado.png', fullPage: true });

    // 🗑 5️⃣ Borrar evento
    // Localizamos el evento por texto
const eventToDelete = page.locator('.calendar_default_event', {
  hasText: 'Quedar con Javi'
});

// Dentro del evento, buscamos el botón menú
const menuButton = eventToDelete.locator('[title="Menu"]');

await menuButton.click();
const deleteOption = page.locator('text=Delete').last();
await deleteOption.waitFor({ state: 'visible' });
await deleteOption.click();


  await expect(event).toHaveCount(0);

  await page.screenshot({ path: 'screenshots/03_evento_borrado.png', fullPage: true });

});
