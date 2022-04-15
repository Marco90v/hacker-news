# Reto - Reign, Junior Web Developer
![Captura de resultado](/src/assets/Screenshot_4.png "Captura de Implementación")

#### Solucion Desplegada: https://hacker-news-reign-marco.netlify.app/

### STACK
Debes utilizar las siguientes tecnologías para construir la app:
+ La última versión de los frameworks: React o Angular
+ HTML/CSS sólo para construir los componentes de la interfaz de usuario
+ Despliegue de la web app en Netlify desde su repositorio Git utilizando el Nuevo Sitio
desde el flujo de trabajo de Git

### API
La aplicación web debe solicitar datos a la API pública de Hackers News. El componente selector
debe utilizar el parámetro de la URL "query" de la API de "búsqueda por fecha".
API para poder filtrar los posts, por ejemplo:
+ Angular: https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0
+ React: https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0
+ Vuejs: https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0

La paginación debe implementarse utilizando el parámetro URL "page" de esta API.
Los atributos a utilizar para la UI del post son author, story_title, story_url, created_at.
Si alguno de estos atributos no está presente en la respuesta del objeto, el post debe ser
descartado de los datos.

### FUNCIONALIDAD
+ El filtro seleccionado debe persistir en el almacenamiento local
+ Las publicaciones favoritas deben persistir en el almacenamiento local
+ Se espera que la aplicación web funcione como una aplicación web responsiva
+ Al hacer clic en la fila, debe abrirse una nueva pestaña con el enlace del post
(story_url)
+ Al hacer clic en el "botón de me gusta" no debería abrirse el enlace de la URL del post
+ Al pasar el ratón por la fila, aplicar opacidad a toda la fila y a sus hijos (textos,
iconos, botón "me gusta", etc.)

### BONO
+ Implementar pruebas unitarias
+ Buen uso de Typescript
+ Paginación como scroll infinit


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
