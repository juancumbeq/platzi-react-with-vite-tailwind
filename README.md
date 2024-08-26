# React.js with Vite.js and TailwindCS

<p align="center">
  <img src="https://img.shields.io/badge/Finished%20-brightgreen"/>
</p>

<br>

# LEARNINGS

<br>

# WIREFRAMES

<br>

# PROTOTYPE

<br>

# INDEX

<br>
<br>
<br>

# ROUTING AND BASE STRUCTURE

## [REACT INSTALLATION WITH VITE AND TAILWINDCSS]()

The tailwind documentation is key to properly proceed with the installation: [https://tailwindcss.com/docs/guides/vite#react]().

### Vite installation

`npm create vite@latest my-project`

### TailwindCSS installation

`npm install -D tailwindcss postcss autoprefixer`

### TailwindCSS init
`npx tailwindcss init -p`

### Configure TailwindCSS paths

```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### TailwindCSS directives

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Run local server

```shell
npm run dev
```

<br>
<br>

## [ROUTES ANALYSIS AND COMPONENTS IN REACT]()

The ecommerce application has different pages, such as:

- Home
- My Account
- My Order
- My Orders
- Not Found
- Sign In

Each page has its own folder where the index.js and the css code is stored.

<br>
<br>

## [ROUTING WITH REACT ROUTER DOM]()

```javascript
import {
	useRoutes,
	BrowserRouter,
} from 'react-router-dom';

// APPLICATION PAGES
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

import './App.css';

// ROUTES COMPONENT
const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{
			path: '/my-account',
			element: <MyAccount />,
		},
		{ path: '/my-order', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/*', element: <NotFound /> },
		{ path: '/signin', element: <SignIn /> },
	]);

	return routes;
};

// MAIN APP COMPONENT
function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
```

As we can there are two components above, the first one define the routes, this means that based on the url path it is going to throw an element or another, if the url path is not defined the default element thrown is `<NotFound>`.

The second component is the App component, which is making use of the `<BrowserRouter>` . The BrowserRouter component is essential for enabling routing. It provides the context and history objects that the routing hooks (useRoutes, useNavigate, etc.) rely on to function correctly.

### Why BrowserRouter is Necessary

The BrowserRouter component is the backbone of React Router. It listens to changes in the URL and interprets them to match the appropriate route. Without wrapping your routes inside BrowserRouter, any routing logic won't work as expected, and you'll likely encounter errors.

### Can You Use AppRoutes Without BrowserRouter?

No, you cannot use AppRoutes alone without wrapping it in BrowserRouter. If you try to render AppRoutes without BrowserRouter, you'll encounter an error because useRoutes and other React Router hooks expect to be used within a Router component (like BrowserRouter, HashRouter, etc.).

<br>
<br>

## [NAVBAR COMPONENT]()

<br>
<br>

## [LAYOUT COMPONENT]()

<br>
<br>

## [CARD COMPONENT]()

<br>
<br>

## [CONSUMING THE FAKESTORE API TO COLOUR CARDS]()

<br>
<br>
<br>

# GLOBAL STATE HANDLING WITH CONTEXT

## [CONTEXTO GLOBAL DE LA APLICACIÓN]()

<br>
<br>

## [CONTADOR DE PRODUCTOS EN EL CARRITO]()

<br>
<br>

## [ABRIENDO EL DETALLE DE CADA PRODUCTO]()

<br>
<br>

## [RETO: HEROICONS WITH TAILWINDCSS]()

<br>
<br>

## [MAQUETANDO EN PRODUCTDETAIL]()

<br>
<br>

## [MOSTRANDO PRODUCTOS EN PRODUCTDETAIL]()

<br>
<br>
<br>

# SHOPPING CART

# [ADDING PRODUCTS TO THE CART]()

<br>
<br>

## [CART SIDEMENU]()

<br>
<br>

## [ORDERCARD COMPONENT]()

<br>
<br>

## [AVOIDING DUPLICATE PRODUCTS IN THE CART]()

<br>
<br>

## [REMOVE PRODUCTS FROM THE CART]()

<br>
<br>

## [TOTAL SUM OF PRODUCTS IN THE CART]()

<br>
<br>
<br>

# CHECKOUT AND PURCHASE ORDERS

# [FLOW FOR CREATING A NEW ORDER]()

<br>
<br>

## [CART PRODUCT CHECKOUT]()

<br>
<br>

## [MYORDERS PAGE: LIST OF ORDERS]()

<br>
<br>

## [MYORDER PAGE: INDIVIDUAL ORDER]()

<br>
<br>

## [CHALLENGE: PURCHASE ORDERS WITH TAILWINDCSS]()

<br>
<br>
<br>

# FILTERING PRODUCTS FROM FRONTEND

# [PRODUCT SEARCH]()

<br>
<br>

## [FILTERING TITLES WITH JAVASCRIPT]()

<br>
<br>

## [FILTERING CATEGORIES WITH JAVASCRIPT]()

<br>
<br>

## [FIXING APPLICATION BUGS]()

<br>
<br>
<br>

# NEXT STEPS

# [REACT DEPLOY ON NETLIFY]()

<br>
<br>
<br>

# AUTHOR

This project was developed by _Juan Cumbe_. If you have any questions or suggestions about the project, feel free to contact me via [e-mail](mailto:hello@juancumbe.com) or my [Linkedin](https://www.linkedin.com/in/juancumbeq/) profile.

```

```
