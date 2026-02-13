
Hola Nati! 
Este es mi proyecto de práctica con Playwright. He configurado un entorno de pruebas para automatizar el login en la web de DemoQA.

Entorno Local: He movido el proyecto a una carpeta fuera de la nube (iCloud/Drive) para evitar errores de sincronización y que los tests corran más rápido, (no se donde lo ví, pero no quiero problemas)..

Prueba de Login: He creado un script (tests/login-demoqa.spec.ts) que entra en la sección de libros, rellena el usuario y la contraseña, y verifica que el login fue exitoso confirmando que aparece el botón de "Log out".

- Me creado 1 variables para guardar la referencia al elemento, por si lo tengo que usar mas tarde
 (const botonLogout = page.getByRole('button', { name: 'Log out' });)

Buenas Prácticas: Estoy usando localizadores de Playwright como getByPlaceholder y getByRole para que el test sea más estable.


He puesto una captura de pantalla al final para la evidencia.

Aun no se ha usado POM.

Creamos una branch con git checkout -b funcionalidad/login-demoqa