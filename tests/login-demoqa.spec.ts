import { test, expect } from '@playwright/test';
// Usamos solo un "../" porque las carpetas están justo arriba de la carpeta tests (SRC)
import { LoginPage } from '../pages/login.page'; 
import { loginData } from '../data/userData'; 
import { loginLocators } from '../locators/loginLocators';

test('Login correcto en DemoQA con POM', async ({ page }) => {
  // Creamos la instancia de la página pasándole el navegador
  const loginPage = new LoginPage(page); 

  // Usamos los métodos para hacer el flujo completo de login
  await loginPage.navegar(); // Abre la URL
  await loginPage.irAlLogin(); // Click en el botón inicial
  await loginPage.realizarLogin(loginData.username, loginData.password); // Rellena y envía

  // Para la validación final, usamos el locator guardado en src/locators
  const botonLogout = page.locator(loginLocators.logoutBtn); 
  await expect(botonLogout).toBeVisible(); // Verifica que el login funcionó

  // Guardamos evidencia (la carpeta 'capturas' se creará en la raíz del proyecto)
  await page.screenshot({ path: 'capturas/login_pom_exitoso.png' }); 
});