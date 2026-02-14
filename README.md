
1. Sobre el Proyecto
Este proyecto se genera con el objetivo de asegurar la calidad en los flujos críticos de interacción con el usuario, enfocándose inicialmente en componentes dinámicos y complejos.

2. Web Automatizada
Se automatizará ui.toast.com, específicamente la sección de Calendarios. Se eligió esta plataforma por su robustez para pruebas e2e frente a otras opciones con limitaciones de seguridad (captchas) que dificultaban la estabilidad de la integración continua.

3. Arquitectura
Utilizaré Page Object Model (POM). Para un mejor orden del código y su posterior mantenimiento

4. Instalación de Dependencias
-Tener Node.js instalado y se ejecuta:

npm install
npx playwright install

5. Cómo Correr los Tests
Para ejecutar todos los tests en modo headless:

npx playwright test


Para ver los tests en modo interactivo (UI Mode):

npx playwright test --ui

6. Reportes
Después de cada ejecución, generamos un reporte detallado en HTML:

npx playwright show-report

7. Integración Continua (CI)
El proyecto está preparado para correr en GitHub Actions. Cada vez que subas código a una rama feature/ o hagas un Pull Request a main, se disparará una ejecución automática para asegurar que no hemos roto nada.

8.  Organización de la Estructura

/
├── src/
│   ├── data/      # JSON/Objetos con credenciales y datos de prueba.
│   ├── locators/  # Selectores CSS/XPath aislados por componente.
│   ├── pages/     # Clases (Pages) con la lógica de interacción.
├── tests/         # Scripts de prueba (.spec.ts) limpios y legibles.
├── playwright.config.ts # Configuración global del motor.
└── README.md

9.  Decisiones Técnicas y por qué
. TypeScript: Actúa como un sistema de seguridad que detecta errores mientras escribimos, avisándonos si intentamos usar datos incorrectos antes de ejecutar el test. Esto garantiza que el código sea mucho más estable y fácil de mantener, ya que el propio editor nos guía para evitar fallos lógicos.

. Locators Dinámicos: En calendarios, usamos funciones en los locators para poder seleccionar cualquier fecha sin repetir código.

. Movimiento de DemoQA a LetCode: Se decidió cambiar de sitio de pruebas para garantizar que las pruebas sean estables y no se vean bloqueadas por Captchas.

10. Cómo escalar el Framework
Para añadir un nuevo módulo:

1. Crea el archivo de Locators con los IDs.

2. Crea la Page con los métodos necesarios.

3. Define los Data si el test requiere inputs variables.

4. Escribe el Test importando las piezas anteriores.