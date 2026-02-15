import { test } from '@playwright/test';
import { CalendarPage } from '../pages/calendar.page';
import { calendarTestData } from '../data/calendar.data';

test('Crear y borrar evento con POM', async ({ page }) => {

  const calendar = new CalendarPage(page);

  const { date, hour, title } = calendarTestData.event1;

  await calendar.navigate();

  await calendar.takeScreenshot('01_inicial');

  await calendar.createEvent(date, hour, title);

  await calendar.takeScreenshot('02_creado');

  await calendar.deleteEvent(title);

  await calendar.takeScreenshot('03_borrado');

});
