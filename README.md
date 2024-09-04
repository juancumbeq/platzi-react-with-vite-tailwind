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

```javascript
import { NavLink } from 'react-router-dom';

function Navbar() {
	const activeStyle =
		'underline underline-offset-4';

	return (
		<nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-ligth'>
			<ul className='flex items-center gap-3'>
				<li className='font-semibold text-lg'>
					<NavLink to='/'>Shopi</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						All
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/clothes'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/electronics'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/furnitures'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/toys'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/others'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Others
					</NavLink>
				</li>
			</ul>

			<ul className='flex items-center gap-3'>
				<li className='text-black/60'>
					test@platzi.com
				</li>
				<li>
					<NavLink
						to='/my-orders'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						My Orders
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/my-account'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/sign-in'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Sign In
					</NavLink>
				</li>
				<li>Cart 5</li>
			</ul>
		</nav>
	);
}

export { Navbar };
```

The navbar component is created using the Navling component.NavLink is a special type of link in react-router-dom that is used to create navigation links with special behavior when the link is active. It automatically applies an active class (or a custom class) when the link's target route matches the current URL.

The `className` function uses a conditional (ternary) operator to decide which class to apply based on the state `isActive`:

`isActive ? activeStyle : undefined`

If `isActive` is true, the string contained in `activeStyle` is returned. This applies the active CSS class, which is typically used to highlight the active link (e.g., bold or change the color).

More about Navlink: [https://reactrouter.com/en/main/components/nav-link](https://reactrouter.com/en/main/components/nav-link)
<br>
<br>

## [LAYOUT COMPONENT]()

```javascript
function Layout({ children }) {
	return (
		<div className='flex flex-col items-center mt-20'>
			{children}
		</div>
	);
}

export { Layout };
```

The Layout component is like a wrapper to every other page, by this way we can apply all the same styles to the whole web page.

<br>
<br>

## [CARD COMPONENT]()

```javascript
const Card = () => {
	return (
		<div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
			<figure className='relative mb-2 w-full h-4/5'>
				<span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 '>
					Electronics
				</span>
				<img
					className='w-full h-full object-cover rounded-lg'
					src='../../../images/pic01.jpg'
					alt='headphones'
				/>
				<div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
					+
				</div>
			</figure>
			<p className='flex justify-between'>
				<span className='text-sm font-light'>
					Headphones
				</span>
				<span className='text-lg font-medium'>
					$300
				</span>
			</p>
		</div>
	);
};

export { Card };
```

This component is going to be the window where the different products are shown.

<br>
<br>

## [CONSUMING THE FAKESTORE API TO COLOUR CARDS]()

This project is built using fake data as product information, however it is necessary to consume an api to get that information.

```javascript
function Home() {
	const [items, setItems] = useState(null);

	useEffect(() => {
		fetch(urlApi)
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);

	console.log(items);

	return (
		<Layout>
			Home
			<div className='grid grid-cols-2 gap-6 w-full max-w-lg'>
				{items?.map((item) => (
					<Card key={item.id} data={item} />
				))}
			</div>
		</Layout>
	);
}

export default Home;
```

The home component retrieves the data and set the local state with the objects array received. The return statement executes a `map()` method to iterate over the array rendering a card component on every object found in the array.

The card component receives the information as a prop object, having access to all the specific information.

<br>
<br>
<br>

# GLOBAL STATE HANDLING WITH CONTEXT

## [APPLICATION GLOBAL CONTEXT]()

Instead of using local states it is better to use global states, by this way there is no possibility of prop drilling, so any component can access the context without needing props.

Context:

```javascript
import { createContext } from 'react';

// CONTEXT CREATION
const ShoppingCartContext = createContext();

// COMPONENT PROVIDER
function ShoppingCartProvider({ children }) {
	// RETURN STATEMENT USING CONTEXT PROVIDER
	return (
		<ShoppingCartContext.Provider
		value={...}>
			{children}
		</ShoppingCartContext.Provider>
	);
}

export { ShoppingCartContext, ShoppingCartProvider };
```

As we can see it is necessary to create a context, after that and making use of another React component the children components passed as props are wrapped inside the context provider. In this way all of the children can access the value data.

App:

```javascript
// CONTEXT
import { ShoppingCartProvider } from '../../Context';

// MAIN APP COMPONENT
function App() {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<AppRoutes />
				<Navbar />
			</BrowserRouter>
		</ShoppingCartProvider>
	);
}
```

In the app component is necessary to wrap all of the other components to make them be able to consume the value data.

<br>
<br>

## [PRODUCT COUNTER IN THE SHOPPING CART]()

In every ecommerce there is a shopping cart counter that shows the amount of selected products. To create this feature is necessary to make use of the context in both component, the card and the navbar component.

Context

```javascript
import { createContext, useState } from 'react';

// CONTEXT CREATION
const ShoppingCartContext = createContext();

// COMPONENT PROVIDER
function ShoppingCartProvider({ children }) {
	// Global state cart counter
	const [count, setCount] = useState(0);
	// console.log('Count: ', count);

	// RETURN STATEMENT USING CONTEXT PROVIDER
	return (
		<ShoppingCartContext.Provider
			value={{ count, setCount }}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}

export {
	ShoppingCartContext,
	ShoppingCartProvider,
};
```

Card

```javascript
import { useContext } from 'react';

// GLOBAL CONTEXT
import { ShoppingCartContext } from '../../Context';

const Card = ({ data }) => {
	// LOCAL CONTEXT BASED ON GLOBAL CONTEXT
	const context = useContext(ShoppingCartContext);

	return (
		{...}
		<div
			className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
			onClick={() =>
				context.setCount(context.count + 1)
			}
		>
			+
		</div>
	);
};

export { Card };
```

Navbar

```javascript
<li>Cart {context.count}</li>
```

As we can see, we can access `count` and `setCount` as a property of the consumed context, there is an explanation for that:

`value={{ count, setCount }}` defines the value that will be available in the context for any components that consume it. In this case, both count (the current state of the counter) and setCount (the function to update that counter) are accessible from any component that uses this context.

In the Card component, you are using useContext to access the context that you created earlier.

- `useContext(ShoppingCartContext)` returns the current value of the `context`, which in this case is `{ count, setCount }`.

- `context.setCount(context.count + 1)` is using `setCount` to increment the value of `count` by 1.

You can access `setCount` as if it were a property of `context`, because this is how context works in React:

- The value that the context provider `(ShoppingCartProvider)` passes to its children (in `value={{ count, setCount }}`) is an object containing both `count` and `setCount`.

- When you use `useContext(ShoppingCartContext)`, you access this object.
  This allows you to use `context.count` to get the current value of the `counter` and `context.setCount` to update it.

<br>
<br>

## [PRODUCT DETAILS]()

The following component represents the modal which is opened everytime we click over a product to review their details.

Product Detail

```jsx
import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/outline';

function ProductDetail() {
	return (
		<aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>
					Detail
				</h2>
				<div>x</div>
				<XCircleIcon className='size-6'></XCircleIcon>
			</div>
		</aside>
	);
}

export { ProductDetail };
```

The product details component is inserted in the home page.

Home

```jsx
<Layout>
	Home
	<div className='grid grid-cols-2 gap-6 w-full max-w-lg'>
		{items?.map((item) => (
			<Card key={item.id} data={item} />
		))}
	</div>
	<ProductDetail />
</Layout>
```

<br>
<br>

## [CHALLENGE: HEROICONS WITH TAILWINDCSS]()

This is the icons library we are using in this project: [https://heroicons.com/outline]().

Following the documentation the command to install the module is:

```shell
npm install @heroicons/react
```

To add an icon inside a component, this is an example:

```javascript
import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/outline';

function ProductDetail() {
	return (
		<aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>
					Detail
				</h2>
				<XCircleIcon className='size-6 text-black'></XCircleIcon>
			</div>
		</aside>
	);
}

export { ProductDetail };
```

<br>
<br>

## [LAYING OUT PRODUCTDETAIL]()

Inside the context component there is another react state to control whether the modal is opened or not, also there are other two functions to set the modal status.

Context:

```javascript
import { createContext, useState } from 'react';

// CONTEXT CREATION
const ShoppingCartContext = createContext();

// COMPONENT PROVIDER
function ShoppingCartProvider({ children }) {
	// Global states
	const [count, setCount] = useState(0);
	const [
		isProductDetailOpen,
		setIsProductDetailOpen,
	] = useState(false);
	const openProductDetail = () =>
		setIsProductDetailOpen(true);
	const closeProductDetail = () =>
		setIsProductDetailOpen(false);

	// RETURN STATEMENT USING CONTEXT PROVIDER
	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}

export {
	ShoppingCartContext,
	ShoppingCartProvider,
};
```

On the card component the `onClick` event is set to every card rendered, setting the react state to `true`.

Card:

```javascript
<div
	className='bg-white cursor-pointer w-56 h-60 rounded-lg'
	onClick={() => context.openProductDetail()}
></div>
```

On the product details component we are using template literals lo set classes dinamicaly, so based on the `isProductDetailOpen` status we can set the component visible or hidden

Product details:

```javascript
<aside
	className={`${
		isProductDetailOpen ? `flex` : `hidden`
	} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
></aside>
```

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
