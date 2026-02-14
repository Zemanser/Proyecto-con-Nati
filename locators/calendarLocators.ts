export const calendarLocators = {
    // Apuntamos al número del día específicamente
    numeroDia: (dia: string) => `span.toastui-calendar-weekday-grid-date >> text="${dia}"`,
    
    // El formulario que aparece
    inputSubject: 'role=textbox[name="Subject"]',
    botonGuardar: 'role=button[name="Save"]',
    
    // Para borrar
    eventoTexto: (titulo: string) => `text="${titulo}"`,
    botonBorrar: 'role=button[name="Delete"]'
};