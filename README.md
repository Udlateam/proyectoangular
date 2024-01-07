# Frontend de la Aplicación

Este es el frontend de la aplicación desarrollada con Angular. A continuación, se presenta una descripción del sistema, seguido de un diseño de ingeniería que incluye un diagrama del framework Angular.

## Descripción del Sistema

Este proyecto fue generado con Angular CLI versión 16.2.4 y se enfoca en la gestión de clientes y productos a través de operaciones CRUD (Crear, Leer, Actualizar y Eliminar). El frontend proporciona una interfaz de usuario intuitiva para interactuar con el backend y administrar datos de manera eficiente.

## Diseño de Ingeniería

### Diagrama del Framework Angular

![Diagrama del Framework Angular](https://v2.angular.io/resources/images/devguide/architecture/overview2.png)

### Explicación del Diagrama

El diagrama representa la estructura de nuestro sistema frontend desarrollado en Angular, relacionando los componentes clave:

- **Componentes**: En Angular, los componentes son unidades fundamentales de la aplicación que gestionan partes específicas de la interfaz de usuario. En nuestro sistema, utilizamos componentes para la gestión de clientes y productos, incluyendo funciones de creación, edición y visualización.

- **Servicios**: Los servicios en Angular son clases que permiten compartir datos y funcionalidad entre componentes. En nuestra aplicación, los servicios se utilizan para realizar solicitudes HTTP al backend, facilitando así la comunicación con el servidor y el procesamiento de datos.

- **Módulos**: Los módulos son contenedores para componentes, servicios y otras partes de la aplicación. Organizamos nuestros componentes y servicios en módulos específicos, como el módulo de clientes y el módulo de productos, para una mejor organización y mantenimiento.

Este diseño de ingeniería garantiza una separación clara de responsabilidades y una arquitectura escalable para nuestra aplicación Angular.

## Uso del Sistema

Para poner en marcha el frontend de la aplicación, se deben seguir estos pasos:

1. Asegurarse de tener Node.js y npm instalados en el sistema.

2. Ejecutar `npm install` en la raíz del proyecto para instalar las dependencias necesarias.

3. Luego, ejecutar `ng serve` para iniciar un servidor de desarrollo. Navegar a `http://localhost:4200/` en el navegador permite acceder a la aplicación. La aplicación se recargará automáticamente si se realizan cambios en los archivos fuente.

## Pruebas

- Ejecutar `ng test` para realizar pruebas unitarias utilizando Karma.

- Ejecutar `ng e2e` para realizar pruebas end-to-end. Tener en cuenta que se debe agregar una herramienta específica para pruebas e2e antes de utilizar este comando.

## Obtener Más Ayuda

Si se necesita más ayuda o información sobre el uso de Angular CLI, ejecutar `ng help` en la consola o consultar la [Página de Visión General y Referencia de Comandos de Angular CLI](https://angular.io/cli).
