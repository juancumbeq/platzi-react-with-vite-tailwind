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

## [SHOWING PRODUCTS IN PRODUCTDETAIL]()

Once the product detail component is rendered it is important to show the product information, in order to do that, inside the context file another global state is created and exported inside the value object.

Context:

```javascript
// Product Detail - Show Product
const [productToShow, setProductToShow] =
	useState({});
```

Inside the card component there are some changes, every time a card is clicked the product data related to that specific card must be sent to the product detail component to be rendered as well, this is why in the `onClick()` event there is another function.

Card:

```javascript
// FUNCTION TO SEND DATA TO THE MODAL AND OPEN
const showProduct = (productDetail) => {
	context.openProductDetail();
	context.setProductToShow(productDetail);
};
```

As the global state is updated with the produdct data using the card component function, now that data is available to be consumed by the product detail component.

Product Detail:

```javascript
<figure className='px-6'>
	<img
		className='w-full h-full rounded-lg'
		src={productToShow.image}
		alt={productToShow.image}
	/>
</figure>
<p className='flex flex-col p-6'>
	<span className='font-medium text-2xl mb-2'>
		${productToShow.price}
	</span>
	<span className='font-medium text-md mb-1'>
		{productToShow.title}
	</span>
	<span className='font-light text-sm'>
		{productToShow.description}
	</span>
</p>
```

<br>
<br>
<br>

# SHOPPING CART

## [ADDING PRODUCTS TO THE CART]()

Before showing the products added to the user it is necessary to create the global state to store them. Inside the context component we create a React state, initialized with an empty array.

Context:

```javascript
// Shopping Cart - Add products to cart
const [cartProducts, setCartProducts] = useState(
	[]
);
```

In the card component we consume the context to access the array and the modifier method. Also we create another function to be executen when the `onClick()` event occurs. As we can see the function modifies the counter and expands the `cartProducts` state array with the `productData`.

Card:

```javascript
const addProductsToCart = (productData) => {
	context.setCount(context.count + 1);
	// Expands the array created on the state, adding the productData object
	context.setCartProducts([
		...context.cartProducts,
		productData,
	]);
	console.log('CART: ', context.cartProducts);
};

<div
	className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
	onClick={() => addProductsToCart(data)}
>
	<PlusIcon className='size-6 text-black'></PlusIcon>
</div>;
```

<br>
<br>

## [CART SIDEMENU]()

This new component is going to wrap all of the selected items by clicking the `+` icon. Is similar to the product details component.

CheckoutSideMenu:

```javascript
// STYLES
import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/outline';

// CONTEXT
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function CheckoutSideMenu() {
	// CONTEXT STATES
	const {
		isCheckoutSideMenuOpen,
		closeCheckoutSideMenu,
		productToShow,
	} = useContext(ShoppingCartContext);

	return (
		<aside
			className={`${
				isCheckoutSideMenuOpen ? `flex` : `hidden`
			} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>
					My order
				</h2>
				<XCircleIcon
					className='size-6 text-black cursor-pointer'
					onClick={() => closeCheckoutSideMenu()}
				></XCircleIcon>
			</div>
		</aside>
	);
}

export { CheckoutSideMenu };
```

In the context component are defined all the methods to open and close the checkout side menu modal.

Context:

```javascript
// Checkout side menu - Open/Close
const [
	isCheckoutSideMenuOpen,
	setIsCheckoutSideMenuOpen,
] = useState(false);
const openCheckoutSideMenu = () =>
	setIsCheckoutSideMenuOpen(true);
const closeCheckoutSideMenu = () =>
	setIsCheckoutSideMenuOpen(false);
```

The card component is the more important one because is in charge to manage the events. The main div of the card component is handling the `onClick()` event by showing the product details modal, but the `+` icon is handling the checkout side menu modal. So, in order to separate the events we had to use the `stopPropagation()` method in the bubble phase. To know more check the info below.

Card:

```javascript
const addProductsToCart = (
	event,
	productData
) => {
	// Stopping the event handling by thw showProduct function
	event.stopPropagation();
	context.setCount(context.count + 1);
	// Expands the array created on the state, adding the productData object
	context.setCartProducts([
		...context.cartProducts,
		productData,
	]);
	// Checkout side menu
	context.openCheckoutSideMenu();
	context.closeProductDetail();
	console.log('CART: ', context.cartProducts);
};

<div
	className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
	onClick={(event) =>
		addProductsToCart(event, data)
	}
>
	<PlusIcon className='size-6 text-black'></PlusIcon>
</div>;
```

The checkout side menu component is inserted in the app component in order to be available in different pages, to know more about how the components are managed check the info below.

App:

```javascript
// MAIN APP COMPONENT
function App() {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<AppRoutes />
				<Navbar />
				<CheckoutSideMenu />
			</BrowserRouter>
		</ShoppingCartProvider>
	);
}
```

### `stopPropagation()`

The `stopPropagation()` method in JavaScript is used to control the flow of events in the **DOM event model**. Specifically, this method prevents an event from continuing to propagate through the DOM tree once it has been triggered.

To better understand how `stopPropagation()` works, it's important to know about the two phases of event propagation in the DOM event model:

1. **Capturing phase**: The event propagates from the outermost element (the root of the document) down to the target element where the event occurred.
2. **Bubbling phase**: After the event reaches the target element, it starts to propagate back up the DOM tree to the outermost element.

The `stopPropagation()` method is used to **stop the event from propagating** in either of these phases, preventing the event from being handled by any other elements. This ensures that only the current element processes the event, without affecting parent or child elements.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<title>stopPropagation Example</title>
		<style>
			.outer {
				background-color: lightblue;
				padding: 20px;
			}
			.inner {
				background-color: lightcoral;
				padding: 20px;
			}
		</style>
	</head>
	<body>
		<div class="outer">
			Outer Div
			<div class="inner">Inner Div</div>
		</div>

		<script>
			const outerDiv =
				document.querySelector('.outer');
			const innerDiv =
				document.querySelector('.inner');

			// Event on the outer container
			outerDiv.addEventListener(
				'click',
				function () {
					alert('Outer div clicked!');
				}
			);

			// Event on the inner container
			innerDiv.addEventListener(
				'click',
				function (event) {
					alert('Inner div clicked!');
					// Stop the event from propagating
					event.stopPropagation();
				}
			);
		</script>
	</body>
</html>
```

#### Explanation:

- When you click on the inner `div` (with the class `inner`), the alert "Inner div clicked!" appears, and `stopPropagation()` is called. This stops the event from propagating, so the event handler attached to the outer `div` does not execute.
- If you remove `event.stopPropagation()`, clicking on the inner `div` will also trigger the event on the outer `div` due to the bubbling phase.

#### When to use `stopPropagation()`?

- When you want an event to be handled by a specific element and don't want it to propagate to its parent elements.
- To prevent unintended behavior in other elements when an event is triggered on a child node.

It’s a useful tool to have fine control over how events are handled on a website.

<br>

### Components management in the App component

#### 1. **Routing Components (useRoutes and BrowserRouter)**

The `AppRoutes` component defines the application routes using `useRoutes()`. This hook from `react-router-dom` allows you to create an array of objects that map routes (with their respective `path`) to their corresponding components (`element`). The routes array in this case includes:

- `/` → `Home` component.
- `/my-account` → `MyAccount` component.
- `/my-order` → `MyOrder` component.
- `/my-orders` → `MyOrders` component.
- `/signin` → `SignIn` component.
- `/*` → `NotFound` component (a wildcard route to handle non-existent routes).

All of this is wrapped in the `BrowserRouter`, which manages the browser history and makes the routing functionality work properly.

#### 2. **The `Navbar` below `AppRoutes`**

You might wonder why the `Navbar` is placed below `AppRoutes` instead of inside each page or route. Here are several reasons for this decision:

- **Global Layout Strategy**: The `Navbar` is rendered **once** outside the routing system. This means that regardless of the current route (whether `/`, `/my-account`, etc.), the `Navbar` will always be visible. Placing it below `AppRoutes` ensures that the `Navbar` remains fixed on all pages.

  - If you placed the `Navbar` inside each individual component (like `Home`, `MyAccount`, etc.), the `Navbar` would **re-render** every time you navigate between pages, which is unnecessary and could affect performance.

- **Better Organization and Maintenance**: By placing the `Navbar` outside specific routes, you ensure it’s centralized and you don’t need to repeat the code in every page component. This simplifies the structure and makes maintenance easier.

#### 3. **The `CheckoutSideMenu`**

The `CheckoutSideMenu` is also outside `AppRoutes`, just like the `Navbar`. This likely has to do with how it functions within the application:

- **Global Accessibility**: Since the `CheckoutSideMenu` is part of the shopping experience (e.g., a menu that shows products added to the cart), it should be accessible from **any part of the app**, regardless of which route the user is on.

- **Global State**: By placing it outside the routing system, the `CheckoutSideMenu` can be controlled and displayed from any page without needing to be rendered directly in each one. The `ShoppingCartProvider` (which is the global context for the shopping cart) also wraps the entire app, meaning `CheckoutSideMenu` can easily consume the cart state from anywhere in the app.

##### Example of Behavior:

- Imagine the user is on the `/my-account` page but decides to open the cart via the `CheckoutSideMenu`. Placing this component outside the routing system ensures that it is available no matter what page you’re on, as it’s part of the global interface.

#### 4. **ShoppingCartProvider Context**

The `App` component is wrapped by the `ShoppingCartProvider`, which manages global state related to the shopping cart. All components within `ShoppingCartProvider` (including `AppRoutes`, `Navbar`, and `CheckoutSideMenu`) can access the global cart state. This allows any component to interact with the cart, which is especially important for both the `CheckoutSideMenu` and `Navbar`.

#### Summary

- **`Navbar`**: It’s outside the routes to avoid unnecessary re-renders and to ensure it stays fixed across the entire application.
- **`CheckoutSideMenu`**: It’s placed in the root so that it’s available and accessible from any part of the app, regardless of the current page.
- **`useRoutes()`**: Manages the main routes, but global components like `Navbar` and `CheckoutSideMenu` are independent of the routes, providing a better user experience by always being available.

This design follows a **global layout** pattern, where certain components (such as the navigation bar and important menus) are rendered only once and remain visible throughout the entire app.

Placing the `Navbar` **above** `AppRoutes` in the code order **would not affect the rendering** or functionality of the application in terms of routing or the visibility of the `Navbar`. In React, the order in which components appear in the code does not necessarily reflect the order in which they are rendered visually on the page.

#### If we change the order of the code:

Instead of this code:

```jsx
<BrowserRouter>
	<AppRoutes />
	<Navbar />
	<CheckoutSideMenu />
</BrowserRouter>
```

You could have it like this:

```jsx
<BrowserRouter>
	<Navbar />
	<AppRoutes />
	<CheckoutSideMenu />
</BrowserRouter>
```

#### Why it doesn't affect rendering:

1. **DOM Order**: Even if you change the order in which components are written, what really matters is the **DOM** and **CSS layout**. The `Navbar` will still be present on the page and will remain visible because it is outside of the specific routes and does not depend on them.

   - If you place the `Navbar` before `AppRoutes`, it will appear earlier in the component tree, but visually it will depend on the **CSS** or **styles** applied for positioning (e.g., if it's fixed at the top of the page, it will always stay in that position).

2. **React Rendering**: React renders components in the order they appear in the JSX tree, but there is no technical issue with placing the `Navbar` either before or after `AppRoutes`, as long as both are wrapped by `BrowserRouter`. React will continue updating `AppRoutes` when the route changes, and the `Navbar` will stay on the screen as it is not affected by route changes.

#### Example:

If you decide to change the order to:

```jsx
<BrowserRouter>
	<Navbar />
	<AppRoutes />
	<CheckoutSideMenu />
</BrowserRouter>
```

This new order will not change the expected visual behavior because the `Navbar` will still be present and accessible on all routes. The same applies to `CheckoutSideMenu`.

#### When might rendering be affected?

The only case where it might affect rendering is if there are specific behaviors or styles that depend on the rendering order in the DOM, such as:

- If the `Navbar` has CSS styles that depend on being before or after another component (like `position: relative`, `z-index`, etc.), there might be a visual impact.
- If `AppRoutes` or the routes contain components that depend on some state managed within the `Navbar`, you might need to manage the mounting order. However, for a navigation bar like the one described, this should not be an issue.

<br>
<br>

## [ORDERCARD COMPONENT]()

Once we click on the `+` icon the selected product must be added to my order view. The order card component represents each product.

OrderCard:

```javascript
import { XMarkIcon } from '@heroicons/react/24/outline';

const OrderCard = (props) => {
	const { id, title, imageURL, price } = props;

	return (
		<div className='flex justify-between items-center mb-3'>
			<div className='flex items-center gap-2'>
				<figure className='w-20 h-20'>
					<img
						className='w-full h-full rounded-lg object-cover'
						src={imageURL}
						alt={title}
					/>
				</figure>
				<p className='text-sm font-light'>
					{title}
				</p>
			</div>
			<div className='flex items-center gap-2'>
				<p className='text-lg font-medium'>
					{price}
				</p>
				<XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
			</div>
		</div>
	);
};

export { OrderCard };
```

The checkout side menu can access the `cartProducts` array and iterate it to render an order card component for every element.

CheckoutSideMenu:

```javascript
function CheckoutSideMenu() {
	// CONTEXT STATES
	const {
		isCheckoutSideMenuOpen,
		closeCheckoutSideMenu,
		cartProducts,
	} = useContext(ShoppingCartContext);

	console.log('CART: ', cartProducts);

	return (
		<aside
			className={`${
				isCheckoutSideMenuOpen ? `flex` : `hidden`
			} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>
					My order
				</h2>
				<XCircleIcon
					className='size-6 text-black cursor-pointer'
					onClick={() => closeCheckoutSideMenu()}
				></XCircleIcon>
			</div>

			<div className='px-6'>
				{cartProducts.map((product) => (
					<OrderCard
						key={product.id}
						title={product.title}
						imageURL={product.image}
						price={product.price}
					/>
				))}
			</div>
		</aside>
	);
}

export { CheckoutSideMenu };
```

<br>
<br>

## [AVOIDING DUPLICATE PRODUCTS IN THE CART]()

Until this point we can add products to the shopping cart without any limitation, but we have to set the application to avoid duplicate products in the cart.

Also after adding a product the `+` icon must change to a check icon, indicating the product is already added.

In the card component there is another function handling this situation, if the product is already at the `cartProducts` array the check icon is rendered, in the other hand, the plus icon is rendered.

The `filter()` method return a new array with the results encountered this is the reason we apply the `length` property, to know if there is any result.

Card:

```javascript
const renderIcon = (id) => {
	const isInCart =
		context.cartProducts.filter(
			(product) => product.id === id
		).length > 0;

	if (isInCart) {
		return (
			<div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
				<CheckIcon className='size-6 text-white'></CheckIcon>
			</div>
		);
	} else {
		return (
			<div
				className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
				onClick={(event) =>
					addProductsToCart(event, data)
				}
			>
				<PlusIcon className='size-6 text-black'></PlusIcon>
			</div>
		);
	}
};
```

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
