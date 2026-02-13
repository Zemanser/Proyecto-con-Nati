import { Page } from '@playwright/test'; // Importamos el tipo Page para tener autocompletado
import { loginLocators } from '../locators/loginLocators'; // Traemos los selectores difinidos aparte

export class LoginPage { // Definimos la clase que representará la página de login
  readonly page: Page; // Declaramos una propiedad privada para el navegador

  constructor(page: Page) { // El constructor recibe la página del test
    this.page = page; // Asignamos la página recibida a nuestra propiedad local
  }

  async navegar() { // Método para abrir la web
    await this.page.goto('https://demoqa.com/books'); // Ordenamos al navegador ir a la URL
  }

  async irAlLogin() { // Método para movernos a la pantalla de acceso
    await this.page.locator(loginLocators.loginBtnHeader).click(); // Busca el botón del header y hace clic
  }

  async realizarLogin(usuario: string, clave: string) { // Método principal de acción (recibe datos)
    await this.page.locator(loginLocators.userField).fill(usuario); // Busca el campo usuario y escribe el texto
    await this.page.locator(loginLocators.passField).fill(clave); // Busca el campo password y escribe la clave
    await this.page.locator(loginLocators.loginBtnForm).click(); // Busca el botón de entrar y lo presiona
  }
}