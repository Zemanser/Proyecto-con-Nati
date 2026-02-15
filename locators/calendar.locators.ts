// src/locators/calendar.locators.ts

// Aquí SOLO viven selectores.
// Si mañana cambia el DOM, solo tocamos este archivo.

export const calendarLocators = {

  calendarCell: '.calendar_default_cell',

  columnHeader: '.calendar_default_colheader_inner',

  rowHeader: '.calendar_default_rowheader_inner',

  modal: '.modal_default_main',

  modalInput: '.modal_default_main input',

  modalOkButton: '.modal_default_main button:has-text("OK")',

  event: '.calendar_default_event',

  eventMenuButton: '[title="Menu"]',

};
