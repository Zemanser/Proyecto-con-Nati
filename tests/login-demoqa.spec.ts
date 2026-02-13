import { test, expect } from '@playwright/test';

test('Login correcto en DemoQA Books', async ({ page }) => {
  // 1. Navegar a la página de libros
  await page.goto('https://demoqa.com/books');

  // 2. Hacer clic en el botón de Login (que está arriba a la derecha)
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Rellenar las credenciales correctas
  await page.getByPlaceholder('UserName').fill('FranciscoGonzalez');
  await page.getByPlaceholder('Password').fill('Francisco05$');

  // 4. Hacer clic en el botón de Login del formulario
  await page.locator('#login').click();

  // 5. Verificación de Login correcto.
  // Se comprueba que el botón de "Log out" sea visible.
  const botonLogout = page.getByRole('button', { name: 'Log out' });
  await expect(botonLogout).toBeVisible();

  // Se hace captura de pantalla después del login correcto.
  await page.screenshot({ path: 'capturas/login_exitoso.png' });
});