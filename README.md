# Integración backend y frontend
Este proyecto es un frontend en React para consumir los servicios web de noticias financieras usando las operaciones CRUD.
Permitiendo:
* Listar noticias
* Crear nuevas noticias
* Actualizar noticias existentes
* Eliminar noticias

El proyecto utiliza React Router para navegación y Context API junto con cookies para mantener la sesión del usuario.
Y una instancia de MySQL hosteada en un codespace para hacer la integracion de forma remota

# Pre-requisitos
- Se requiere el servicio web del repositorio: EjemploWebServicesAppCompleta
- Modifica el archivo .env.development para configurar la variable REACT_APP_API_BASE_URL a tus necesidades
- Backend del proyecto de noticias corriendo en http://127.0.0.1:8000 (o ajusta en .env.development)
- Node.js y npm instalados

# En esta versión se implementa manejo de sesión a través de cookies
Esta versión ya tiene persistencia de la sesión a través de la librería js-cookie (ver AuthContext.js)

# En este ejemplo ¿Cómo funciona la autenticación de Usuarios con React?

El objetivo principal es permitir a los usuarios iniciar sesión y, si la autenticación es exitosa, acceder a una sección de menú protegida.

## Estructura del Proyecto

Este ejemplo de proyecto de React sigue una estructura de componentes y utiliza el Context API para gestionar el estado de autenticación de manera global. A continuación, se describen los principales archivos y directorios:

```
demo_frontend/
├── public/
│   └── index.html           # HTML base
└── src/
    ├── api.js               # Funciones para consumir la API
    ├── App.js               # Componente raíz
    ├── index.js             # Punto de entrada
    ├── index.css            # Estilos globales
    ├── contexts/
    │   └── AuthContext.jsx  # Contexto para autenticación
    └── components/
        ├── LoginPage.jsx
        ├── MenuPage.jsx
        ├── PrivateRoute.jsx
        ├── ListaNoticias.jsx
        ├── CrearNoticia.jsx
        ├── ActualizarNoticia.jsx
        └── EliminarNoticia.jsx

demo_backend/
├── ejemplo.yaml
├── README.md
├── static/
│   └── index.html
└── web services/
    ├── app.py
    ├── noticias.yaml
    └── ws.py
```

## Componentes Principales

1.  **`App.js`:**
    * Es el componente raíz de la aplicación.
    * Utiliza `react-router-dom` para definir las rutas de la aplicación:
        * `/login`: Muestra el componente `LoginPage`.
        * `/menu`: Muestra el componente `PrivateRoute` que, a su vez, renderiza `MenuPage` SOLO si el usuario está autenticado.
        * `/`: Redirige al usuario a la página de `/login`.
        * /listanoticias: Lista todas las noticias (ListaNoticias.jsx).
        * /crearnoticia: Formulario para agregar una noticia (CrearNoticia.jsx).
        * /actualizarnoticia: Formulario para actualizar una noticia (ActualizarNoticia.jsx).
        * /eliminarnoticia: Formulario para eliminar una noticia (EliminarNoticia.jsx).
    * 'Envuelve' las rutas con el `AuthProvider` para que todos los componentes puedan acceder al estado de autenticación.
    * App.js

2.  **`components/LoginPage.js`:**
    * Presenta un formulario con campos para el `username` y el `password`.
    * Utiliza `useState` para mantener y 'supervisar' el estado de los campos del formulario y los mensajes de error.
    * Al enviar el formulario (`handleSubmit`), llama a la función `login` proporcionada por el `AuthContext`.
    * Si la autenticación es exitosa, utiliza `useNavigate` para redirigir al usuario a la página `/menu`.
    * Si la autenticación falla, muestra un mensaje de error al usuario.

3.  **`components/MenuPage.js`:**
    * Es una página protegida que muestra un menú con diferentes opciones.
    * Accede al estado del `user` desde el `AuthContext` para mostrar un mensaje de bienvenida al usuario autenticado.
    * Incluye un botón de "Logout" que llama a la función `logout` del `AuthContext` y redirige al usuario a la página de `/login`.
    * Contiene enlaces a las páginas de gestión de noticias:
      - Lista todas las noticias
      - Crear noticia
      - Actualizar noticia
      - Eliminar noticia

4.  **`components/PrivateRoute.js`:**
    * Es un componente que se utiliza para proteger rutas.
    * Recibe un `children` (el componente que se intenta renderizar).
    * Utiliza el `AuthContext` para verificar si hay un usuario autenticado (`user` en el contexto).
    * Si hay un usuario autenticado, renderiza el `children` (en este caso, `MenuPage`).
    * Si no hay un usuario autenticado, redirige al usuario a la página de `/login` utilizando el componente `Navigate` de `react-router-dom`.

## Gestión del Estado de Autenticación con `AuthContext`

El `AuthContext` es fundamental para manejar el estado de autenticación en toda la aplicación SIN necesidad de pasar props manualmente a través de múltiples niveles de componentes.

* **`contexts/AuthContext.js`:**
    * Crea un contexto (`AuthContext`) utilizando `createContext`.
    * Define un componente proveedor (`AuthProvider`) que 'envuelve' a los componentes que necesitan acceder al estado de autenticación.
    * Utiliza `useState` para mantener y supervisar el estado del usuario autenticado (`user`). Inicialmente, este estado es `null`.
    * Proporciona dos funciones principales:
        * **`login(username, password)`:**
            * Realiza una petición `POST` al servicio web de autenticación (en la dirección `http://127.0.0.1:5000/login`).
            * Envía las credenciales (`username` y `password`) en formato JSON en el cuerpo de la petición.
            * Si la respuesta del servidor es exitosa (código de estado 200), actualiza el estado `user` con el `username` y devuelve `true`.
            * Si la respuesta del servidor indica un error (código de estado 401), registra el error y devuelve `false`.
            * Maneja posibles errores de conexión con el servicio web.
        * **`logout()`:**
            * Simplemente establece el estado `user` a `null`, lo que indica que el usuario ha cerrado sesión.
    * El `AuthProvider` provee el valor del contexto, que incluye el estado `user` y las funciones `login` y `logout`, a todos sus componentes hijos.
    * Utiliza `useCallback` para memoizar las funciones `login` y `logout`, optimizando el rendimiento al evitar la creación innecesaria de nuevas funciones en cada renderizado.

## Flujo de Autenticación

1.  **Inicio de Sesión:**
    * El usuario introduce su `username` y `password` en el formulario de `LoginPage`.
    * Al enviar el formulario, se llama a la función `handleSubmit` en `LoginPage`.
    * `handleSubmit` llama a la función `login` del `AuthContext`.
    * La función `login` realiza una petición `POST` al servicio web con las credenciales.
    * El servicio web (implementado con Flask y `pymssql` en nuestro ejemplo) verifica las credenciales contra la base de datos de usuarios.
    * **Éxito:** El servicio web responde con un código de estado 200 y un mensaje de éxito. La función `login` en React actualiza el estado `user` en el `AuthContext` y devuelve `true`. El componente `LoginPage` utiliza `navigate` para redirigir al usuario a la ruta `/menu`.
    * **Fallo:** El servicio web responde con un código de estado 401 y un mensaje de error (por ejemplo, "Invalid username or password"). La función `login` en React registra el error y devuelve `false`. El componente `LoginPage` actualiza su estado local para mostrar el mensaje de error al usuario.

2.  **Acceso a Rutas Protegidas:**
    * El componente `PrivateRoute` envuelve la ruta `/menu`.
    * Antes de renderizar `MenuPage`, `PrivateRoute` verifica si el valor de `user` en el `AuthContext` es diferente de `null` (lo que indica que hay un usuario autenticado).
    * Si `user` no es `null`, se renderiza el componente `MenuPage`.
    * Si `user` es `null`, el usuario es redirigido a la página de `/login` utilizando `Navigate`.

3.  **Cierre de Sesión:**
    * En la `MenuPage`, al hacer clic en el botón "Logout", se llama a la función `logout` del `AuthContext`.
    * La función `logout` establece el estado `user` a `null`.
    * El componente `MenuPage` utiliza `navigate` para redirigir al usuario a la página de `/login`.
    * Al intentar acceder nuevamente a `/menu`, `PrivateRoute` detectará que `user` es `null` y volverá a redirigir al usuario a la página de inicio de sesión.

## Instalación y ejecución

1. Instala las dependencias:
   
   ```sh
   npm install
   ```

2. Inicia el servidor:
   
   ```sh
   npm start
   ```
3. Abre en tu navegador:
   
   ```sh
   http://localhost:3000
   ```

##  Tecnologías Utilizadas

* **React:** Librería de JavaScript para construir interfaces de usuario.
* **React Router DOM:** Librería para la navegación y el enrutamiento dentro de la aplicación React.
* **Context API:** Es una característica de React para gestionar el estado de manera global.
* **`fetch` API:** API nativa de JavaScript para realizar peticiones HTTP al servicio web.
* **JavaScript (ES6+):** El lenguaje de programación principal utilizado.
* **JSX:** Extensión de sintaxis de JavaScript utilizada para escribir componentes React.
* **js-cookie:** Para manejo de sesión.
* **CSS básico:**

## Consideraciones para el Desarrollo

* **Manejo de Errores:** Se implementa un manejo básico de errores al mostrar mensajes en la interfaz de usuario. En aplicaciones más complejas, se podría implementar un manejo de errores más sofisticado (por ejemplo, logging, retries, creación de usuarios, etc.).
* **Seguridad:** Este proyecto se centra en la lógica de autenticación MUY básica. En un entorno de producción, se deben considerar medidas de seguridad adicionales como el uso de HTTPS, protección contra ataques CSRF, almacenamiento seguro de tokens (si se implementara una autenticación basada en tokens), etc.
* **Interfaz de Usuario:** La interfaz de usuario es MUY básica y con fines demostrativos. Se podría mejorar significativamente con estilos CSS y una estructura visual más detallada.
* **Pruebas:** Para asegurar la calidad del código, habría que escribir pruebas unitarias e de integración para los componentes de React y para la lógica de autenticación en el `AuthContext`.
* **Estado Persistente:** El estado de autenticación actual se pierde al recargar la página. Para mantener la sesión del usuario, se podría utilizar mecanismos como `localStorage` o `sessionStorage` (con las consideraciones de seguridad adecuadas) o implementar una autenticación basada en tokens con almacenamiento en cookies o `localStorage`.

## Referencias:
https://react.dev/reference/react/createContext
https://github.com/bezkoder/react-js-login-registration-hooks
https://chatgpt.com

