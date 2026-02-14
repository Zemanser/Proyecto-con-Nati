import { Page } from '@playwright/test';
import { calendarLocators } from '../locators/calendarLocators';

export class CalendarPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async abrir() {
        await this.page.goto('https://ui.toast.com/tui-calendar');
    }

    async crearEvento(dia: string, titulo: string) {
        // Hacemos clic directamente en el número del día
        await this.page.click(calendarLocators.numeroDia(dia));
        
        // Rellenamos el título y guardamos
        await this.page.fill(calendarLocators.inputSubject, titulo);
        await this.page.click(calendarLocators.botonGuardar);
    }

    async borrarEvento(titulo: string) {
        // Un solo clic para abrir el detalle y luego borrar
        await this.page.click(calendarLocators.eventoTexto(titulo));
        await this.page.click(calendarLocators.botonBorrar);
    }
}