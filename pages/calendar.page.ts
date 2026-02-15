// src/pages/calendar.page.ts

import { Page, expect } from '@playwright/test';
import { calendarLocators } from '../locators/calendar.locators';

export class CalendarPage {

  constructor(private page: Page) { }

  // Navegar
  async navigate() {
    await this.page.goto('https://javascript.daypilot.org/demo/calendar/');
  }

  async createEvent(date: string, hour: string, title: string) {

    // 1. Encontrar columna por fecha
    const headers = this.page.locator(calendarLocators.columnHeader);
    const count = await headers.count();

    let columnIndex = -1;

    for (let i = 0; i < count; i++) {
      const text = await headers.nth(i).textContent();
      if (text?.includes(date)) {
        columnIndex = i;
        break;
      }
    }

    if (columnIndex === -1) {
      throw new Error('Fecha no encontrada');
    }

    // 2. Encontrar fila por hora
    const rows = this.page.locator(calendarLocators.rowHeader);
    const rowCount = await rows.count();

    let rowIndex = -1;

    for (let i = 0; i < rowCount; i++) {
      const text = await rows.nth(i).textContent();
      if (text?.trim() === hour) {
        rowIndex = i;
        break;
      }
    }

    if (rowIndex === -1) {
      throw new Error('Hora no encontrada');
    }

    // 3. Click en intersección
    const cell = this.page
      .locator(calendarLocators.calendarCell)
      .nth(rowIndex * count + columnIndex);

    await cell.click();

    // 4. Rellenar modal
    const modal = this.page.locator(calendarLocators.modal).last();
    await modal.waitFor({ state: 'visible' });

    await this.page.locator(calendarLocators.modalInput).fill(title);
    await this.page.locator(calendarLocators.modalOkButton).click();

    // Validar que aparece el evento
    await expect(
      this.page.locator(calendarLocators.event, { hasText: title })
    ).toBeVisible();
  }

  async deleteEvent(title: string) {

    const event = this.page.locator(calendarLocators.event, {
      hasText: title
    });

    await expect(event).toBeVisible();

    // Abrir menú correcto
    const menuButton = event.locator(calendarLocators.eventMenuButton);
    await menuButton.click();

    // Click Delete
    await this.page.locator('text=Delete').last().click();

    // Validar borrado
    await expect(event).toHaveCount(0);
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true
    });
  }

}
