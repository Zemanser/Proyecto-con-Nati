import { test, expect } from '@playwright/test';
import { CalendarPage } from '../pages/calendar.page';
import { calendarData } from '../data/calendarData';

test('Test crear y borrar una cita con Javi', async ({ page }) => {
    const calendar = new CalendarPage(page);

    await calendar.abrir();
    
    // 1. Crear evento
    await calendar.crearEvento(calendarData.day, calendarData.eventTitle);
    
    // EVIDENCIA 1: Evento creado
    await expect(page.getByText(calendarData.eventTitle).first()).toBeVisible();
    await page.screenshot({ path: 'evidencias/evento-creado.png' });
    
    // 2. Borrar evento
    await calendar.borrarEvento(calendarData.eventTitle);
    
    // EVIDENCIA 2: Calendario limpio
    await expect(page.getByText(calendarData.eventTitle)).not.toBeVisible();
    await page.screenshot({ path: 'evidencias/evento-borrado.png' });
});