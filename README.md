
Hola Nati! 
Este es mi proyecto de práctica con Playwright. He configurado un entorno de pruebas para automatizar el login en la web de DemoQA.


1. Sobre el Proyecto
Este proyecto tiene como objetivo comprobar la  autenticación. Se ha priorizado la creación de una base sólida y escalable para validar que el acceso de usuarios registrados funcione correctamente en diferentes entornos.

2. Web Automatizada
Se automatiza DemoQA.com, específicamente el módulo de Login. Esta plataforma es un estándar en la industria para practicar pruebas e2e debido a que simula comportamientos de aplicaciones reales con elementos dinámicos.

3. Arquitectura
Utilizamos Page Object Model (POM). Esta arquitectura nos permite separar la lógica de los tests de la estructura de la página, facilitando el mantenimiento y permitiendo que, si un elemento de la web cambia, solo tengamos que actualizarlo en un único lugar.

4. Instalación de Dependencias
-Tener Node.js instalado y se ejecuta:


npm install
npx playwright install


5. Cómo Correr los Tests
Para ejecutar todos los tests en modo silencioso (headless):


npx playwright test

Para ver la ejecución en tiempo real y depurar (UI Mode):


npx playwright test --ui

6. 📊 Reportes
Después de cada ejecución, Playwright genera automáticamente un reporte visual:


npx playwright show-report

7. Integración Continua (CI)
El proyecto está configurado para ejecutarse en GitHub Actions. Al subir código a una rama feature/ o abrir un Pull Request, el sistema ejecuta los tests automáticamente para garantizar que la nueva funcionalidad no rompe el flujo de Login existente.

8. Organización de la Estructura
Plaintext
/
├── src/
│   ├── data/      # Objetos con credenciales de prueba (usuarios/passwords).
│   ├── locators/  # IDs y selectores CSS aislados por componente.
│   ├── pages/     # Clases con los métodos de interacción (hacer clic, escribir).
├── tests/         # Scripts de prueba (.spec.ts) finales y aserciones.
├── playwright.config.ts # Configuración global del framework.
└── README.md

9.  Decisiones Técnicas y por qué
TypeScript: Actúa como un sistema de seguridad que detecta errores mientras escribimos, avisándonos si intentamos usar datos incorrectos antes de ejecutar el test. Esto garantiza que el código sea mucho más estable, ya que el editor nos guía para evitar fallos lógicos.

Separación de Locators: A diferencia del código generado automáticamente, extraemos los selectores a archivos independientes para que el código sea legible y "limpio".

Enfoque en Login: Se decidió perfeccionar el módulo de Login antes de avanzar a otros módulos para asentar la arquitectura POM de manera robusta.

10. Cómo escalar el Framework
Para añadir un nuevo módulo (ej. Book Store):

Crea el archivo de Locators con los selectores de la nueva sección.

Crea la Page con los métodos necesarios (ej. buscarLibro()).

Define los Data necesarios para la prueba.

Escribe el Test importando las piezas anteriores.