# React.js with Vite.js and TailwindCSS

<p align="center">
  <img src="https://img.shields.io/badge/Finished%20-brightgreen"/>
</p>

<br>

# COURSE PROJECT

Shopi is an e-commerce application developed with React.js, Vite.js, and TailwindCSS. It allows users to explore products, add them to a shopping cart, and place orders. Navigation between application pages, such as home, user account, and orders, is managed with React Router DOM, while the global cart is handled using Context API, allowing access to selected products from any component.

Users can search for products by title, filter by categories, and review their order history. The shopping cart enables adding, removing products, and viewing the total in real-time.

<br>

# LEARNINGS

-	Creating modals in React.
-	Managing routes with React Router DOM.
-	Handling global states using Context API.
-	Consuming APIs to display dynamic products.
-	Designing responsive interfaces with TailwindCSS.
-	Implementing logic to avoid duplicates in the shopping cart.
-	Applying best practices in frontend development.

<br>

# DEMO

[https://juancumbeq.github.io/platzi-react-with-vite-tailwind/](https://juancumbeq.github.io/platzi-react-with-vite-tailwind/)

<br>
<br>

# INDEX

- [ROUTING AND BASE STRUCTURE](#routing-and-base-structure)

  - [REACT INSTALLATION WITH VITE AND TAILWINDCSS](#react-installation-with-vite-and-tailwindcss)

    - [Vite installation](#vite-installation)
    - [TailwindCSS installation](#tailwindcss-installation)
    - [TailwindCSS init](#tailwindcss-init)
    - [Configure TailwindCSS paths](#configure-tailwindcss-paths)
    - [TailwindCSS directives](#tailwindcss-directives)
    - [Run local server](#run-local-server)

  - [ROUTES ANALYSIS AND COMPONENTS IN REACT](#routes-analysis-and-components-in-react)
  - [ROUTING WITH REACT ROUTER DOM](#routing-with-react-router-dom)

    - [Why BrowserRouter is Necessary](#why-browserrouter-is-necessary)
    - [Can You Use AppRoutes Without BrowserRouter?](#can-you-use-approutes-without-browserrouter)

  - [NAVBAR COMPONENT](#navbar-component)
  - [LAYOUT COMPONENT](#layout-component)
  - [CARD COMPONENT](#card-component)
  - [CONSUMING THE FAKESTORE API TO COLOUR CARDS](#consuming-the-fakestore-api-to-colour-cards)

- [GLOBAL STATE HANDLING WITH CONTEXT](#global-state-handling-with-context)

  - [APPLICATION GLOBAL CONTEXT](#application-global-context)
  - [PRODUCT COUNTER IN THE SHOPPING CART](#product-counter-in-the-shopping-cart)
  - [PRODUCT DETAILS](#product-details)
  - [CHALLENGE: HEROICONS WITH TAILWINDCSS](#challenge-heroicons-with-tailwindcss)
  - [LAYING OUT PRODUCTDETAIL](#laying-out-productdetail)
  - [SHOWING PRODUCTS IN PRODUCTDETAIL](#showing-products-in-productdetail)

- [SHOPPING CART](#shopping-cart)

  - [ADDING PRODUCTS TO THE CART](#adding-products-to-the-cart)
  - [CART SIDEMENU](#cart-sidemenu)
    - [`stopPropagation()`](#stoppropagation)
    - [Components management in the App component](#components-management-in-the-app-component)
  - [ORDERCARD COMPONENT](#ordercard-component)
  - [AVOIDING DUPLICATE PRODUCTS IN THE CART](#avoiding-duplicate-products-in-the-cart)
  - [REMOVE PRODUCTS FROM THE CART](#remove-products-from-the-cart)
  - [TOTAL SUM OF PRODUCTS IN THE CART](#total-sum-of-products-in-the-cart)

- [CHECKOUT AND PURCHASE ORDERS](#checkout-and-purchase-orders)
- [FLOW FOR CREATING A NEW ORDER](#flow-for-creating-a-new-order)

  - [CART PRODUCT CHECKOUT](#cart-product-checkout)
    - [`order?.slice(-1)[0].products.map()`](#orderslice-10productsmap)
  - [MYORDERS PAGE: LIST OF ORDERS](#myorders-page-list-of-orders)
  - [MYORDER PAGE: INDIVIDUAL ORDER](#myorder-page-individual-order)
  - [CHALLENGE: PURCHASE ORDERS WITH TAILWINDCSS](#challenge-purchase-orders-with-tailwindcss)

- [FILTERING PRODUCTS FROM FRONTEND](#filtering-products-from-frontend)
- [PRODUCT SEARCH](#product-search)

  - [FILTERING TITLES WITH JAVASCRIPT](#filtering-titles-with-javascript)
  - [FILTERING CATEGORIES WITH JAVASCRIPT](#filtering-categories-with-javascript)

- [AUTHOR](#author)

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

App:

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

As we can see, there are two components above. The first one defines the routes, meaning that based on the URL path, it will render one element or another. If the URL path is not defined, the default element rendered is `<NotFound>`.

The second component is the App component, which makes use of the `<BrowserRouter>`. The BrowserRouter component is essential for enabling routing. It provides the context and history objects that the routing hooks (useRoutes, useNavigate, etc.) rely on to function correctly.

### Why BrowserRouter is Necessary

The BrowserRouter component is the backbone of React Router. It listens to changes in the URL and interprets them to match the appropriate route. Without wrapping your routes inside BrowserRouter, any routing logic won't work as expected, and you'll likely encounter errors.

### Can You Use AppRoutes Without BrowserRouter?

No, you cannot use AppRoutes alone without wrapping it in BrowserRouter. If you try to render AppRoutes without BrowserRouter, you'll encounter an error because useRoutes and other React Router hooks expect to be used within a Router component (like BrowserRouter, HashRouter, etc.).

<br>
<br>

## [NAVBAR COMPONENT]()

Navbar:

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

The navbar component is created using the `Navlink` component `NavLink` is a special type of link in `react-router-dom` that is used to create navigation links with special behavior when the link is active. It automatically applies an active class (or a custom class) when the link's target route matches the current URL.

The `className` function uses a conditional (ternary) operator to decide which class to apply based on the state `isActive`:

`isActive ? activeStyle : undefined`

If `isActive` is true, the string contained in `activeStyle` is returned. This applies the active CSS class, which is typically used to highlight the active link (e.g., bold or change the color).

More about Navlink: [https://reactrouter.com/en/main/components/nav-link](https://reactrouter.com/en/main/components/nav-link)
<br>
<br>

## [LAYOUT COMPONENT]()

The Layout component acts as a wrapper for every other page. In this way, we can apply the same styles to the entire web page.

Layout:

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

<br>
<br>

## [CARD COMPONENT]()

This component is going to be the window where the different products are displayed.

Card:

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

<br>
<br>

## [CONSUMING THE FAKESTORE API TO COLOUR CARDS]()

This project is built using fake data for product information; however, it is necessary to consume an API to retrieve that information.

The Home component retrieves the data and sets the local state with the array of objects received. The return statement executes the `map()` method to iterate over the array, rendering a Card component for each object found in the array.

The Card component receives the information as a prop, allowing access to all the specific details.

Home:

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

<br>
<br>
<br>

# GLOBAL STATE HANDLING WITH CONTEXT

## [APPLICATION GLOBAL CONTEXT]()

Instead of using local state, it is better to use global state. This way, there is no possibility of prop drilling, and any component can access the context without needing props.

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

As we can see, it is necessary to create a context. After that, by using another React component, the child components passed as props are wrapped inside the context provider. In this way, all the children can access the value data.

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

In the App component, it is necessary to wrap all the other components to enable them to consume the value data.

<br>
<br>

## [PRODUCT COUNTER IN THE SHOPPING CART]()

In every e-commerce site, there is a shopping cart counter that shows the number of selected products. To create this feature, it is necessary to use the context in both the Card and Navbar components.

Context:

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

Card:

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

Navbar:

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

The following component represents the modal, which opens every time we click on a product to review its details.

Product Detail:

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

Home:

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

Product Detail:

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

Inside the context component, there is another React state to control whether the modal is open or not. Additionally, there are two other functions to set the modal status.

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

In the Card component, the `onClick` event is set for every rendered card, updating the React state to `true`.

Card:

```javascript
<div
	className='bg-white cursor-pointer w-56 h-60 rounded-lg'
	onClick={() => context.openProductDetail()}
></div>
```

In the Product Details component, we are using template literals to set classes dynamically. Based on the `isProductDetailOpen` status, we can determine whether the component is visible or hidden.

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

Once the Product Details component is rendered, it is important to show the product information. To achieve this, another global state is created inside the context file and exported within the value object.

Context:

```javascript
// Product Detail - Show Product
const [productToShow, setProductToShow] =
	useState({});
```

Inside the Card component, there are some changes. Every time a card is clicked, the product data related to that specific card must be sent to the Product Details component to be rendered as well. This is why there is another function in the `onClick()` event.

Card:

```javascript
// FUNCTION TO SEND DATA TO THE MODAL AND OPEN
const showProduct = (productDetail) => {
	context.openProductDetail();
	context.setProductToShow(productDetail);
};
```

As the global state is updated with the product data using the Card component function, that data is now available to be consumed by the Product Details component.

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

Before displaying the products added by the user, it is necessary to create a global state to store them. Inside the context component, we create a React state initialized with an empty array.

Context:

```javascript
// Shopping Cart - Add products to cart
const [cartProducts, setCartProducts] = useState(
	[]
);
```

In the Card component, we consume the context to access the array and the modifier method. We also create another function to be executed when the `onClick()` event occurs. This function modifies the counter and expands the `cartProducts` state array with the `productData`.

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

This new component is going to wrap all the selected items by clicking the `+` icon. It is similar to the Product Details component.

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

In the context component, all the methods to open and close the checkout side menu modal are defined.

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

The Card component is the most important one because it is responsible for managing the events. The main div of the Card component handles the `onClick()` event by showing the product details modal, while the `+` icon manages the checkout side menu modal. To separate the events, we used the `stopPropagation()` method during the bubble phase. To learn more, check the information below.

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

The Checkout Side Menu component is included in the App component to be available on different pages. To learn more about how the components are managed, check the information below.

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

At this point, we can add products to the shopping cart without any limitations, but we need to set the application to avoid duplicate products in the cart.

Additionally, after adding a product, the `+` icon must change to a check icon, indicating that the product has already been added.

In the Card component, there is another function handling this situation. If the product is already in the `cartProducts` array, the check icon is rendered; otherwise, the plus icon is displayed.

The `filter()` method returns a new array with the results found, which is why we apply the `length` property to determine if there are any results.

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

Now we can add products to our cart, but it is necessary to remove them at any time. To do that, we need to set the `onClick()` event to delete the selected product from the `cartProducts` array.

In the Checkout Side Menu, we handle this event by passing the `handleDelete` function as a prop to the Order Card component.

CheckoutSideMenu:

```javascript
import { OrderCard } from '../OrderCard';

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
		cartProducts,
		setCartProducts,
	} = useContext(ShoppingCartContext);

	// DELETE CART PRODUCTS
	const handleDelete = (id) => {
		const filteredProducts = cartProducts.filter(
			(product) => product.id != id
		);
		setCartProducts(filteredProducts);
	};

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

			<div className='px-6 overflow-y-scroll'>
				{cartProducts.map((product) => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageURL={product.image}
						price={product.price}
						handleDelete={handleDelete}
					/>
				))}
			</div>
		</aside>
	);
}

export { CheckoutSideMenu };
```

In the Order Card, we receive various props, one of which is the function `handleDelete`. The parameter is necessary to know which product needs to be deleted.

OrderCard:

```javascript
<XMarkIcon
	className='h-6 w-6 text-black cursor-pointer'
	onClick={() => handleDelete(id)}
></XMarkIcon>
```

<br>
<br>

## [TOTAL SUM OF PRODUCTS IN THE CART]()

In every checkout, there is a total sum of the selected products. To achieve this, we use another function called `totalPrice()`, which is built in a .js file.

Utils:

```javascript
/**
 * This function calculates total prices of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total price
 */

const totalPrice = (products) => {
	let sum = 0;
	products.forEach(
		(product) => (sum += product.price)
	);
	return sum;
};

export { totalPrice };
```

In the Checkout Side Menu component, the function `totalPrice()` is imported and then used below, with the `cartProducts` array as an argument.

CheckoutSideMenu:

```javascript
<div className='px-9 mt-6'>
	<p className='flex justify-between items-center'>
		<span className='font-light'>Total:</span>
		<span className='font-medium text-xl'>
			${totalPrice(cartProducts)}
		</span>
	</p>
</div>
```

<br>
<br>
<br>

# CHECKOUT AND PURCHASE ORDERS

# [FLOW FOR CREATING A NEW ORDER]()

Once we have all the selected products, we can proceed with the checkout. In our application, this means adding the entire cart to an orders list. To do this, there must be another React state in the context component so that we can manipulate that state from other parts of the application.

Context:

```javascript
// Shopping Cart - Orders
const [order, setOrder] = useState([]);
```

In the Checkout Side Menu component, there is a button that will execute a function to handle the order addition.

CheckoutSideMenu:

```javascript
<button
	className='bg-black py-3 text-white w-full rounded-lg'
	onClick={() => handleCheckout()}
>
	Checkout
</button>
```

The function creates an object based on the current cart details, adds the current order to an array, and clears the `cartProducts`, making it available to store another set of products.

```javascript
const handleCheckout = () => {
	// current order details
	const orderToAdd = {
		date: '01,02,23',
		products: cartProducts,
		totalProducts: cartProducts.length,
		totalPrice: totalPrice(cartProducts),
	};
	// adding the current order
	setOrder([...order, orderToAdd]);
	// cleaning the checkout cart
	setCartProducts([]);
};
```

<br>
<br>

## [CART PRODUCT CHECKOUT]()

Now we have the React state `order` available to store several shopping carts, but it is necessary to show the last order on another page to review the details. To do this, the `Checkout` button must direct the user to the URL: `/my-order/last`.

The Checkout Side Menu component uses the `Link` component to enable the redirection.

CheckoutSideMenu:

```javascript
<Link to='/my-orders/last'>
	<button
		className='bg-black py-3 text-white w-full rounded-lg'
		onClick={() => {
			handleCheckout();
			closeCheckoutSideMenu();
		}}
	>
		Checkout
	</button>
</Link>
```

The `MyOrder` component accesses the order array and extracts the last element, which is the last order. It then accesses the products property of that element, which is another array. This array contains the `cartProducts` information, allowing us to iterate over it and render the `OrderCard` component.

MyOrder:

```javascript
// COMPONENTS
import { Layout } from '../../Components/Layout';
import { OrderCard } from '../../Components/OrderCard';

// CONTEXT
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function MyOrder() {
	const { order } = useContext(
		ShoppingCartContext
	);

	return (
		<Layout>
			<div className=''>MyOrder</div>
			<div className='flex flex-col w-80'>
				{order
					?.slice(-1)[0]
					.products.map((product) => (
						<OrderCard
							key={product.id}
							id={product.id}
							title={product.title}
							imageURL={product.image}
							price={product.price}
						/>
					))}
			</div>
		</Layout>
	);
}

export default MyOrder;
```

### `order?.slice(-1)[0].products.map()`

In the following line of code:

```jsx
{
	order
		?.slice(-1)[0]
		.products.map((product) => (
			<OrderCard
				key={product.id}
				id={product.id}
				title={product.title}
				imageURL={product.image}
				price={product.price}
			/>
		));
}
```

You're chaining several operations to display the products from the latest order in the shopping cart. Below there is an explanation of the potential issues or pitfalls in this line:

#### 1. **Usage of the Optional Chaining Operator (`?.`)**

The optional chaining operator `?.` is used to prevent errors if `order` is `null` or `undefined`. If `order` is null, everything after the optional chaining stops executing and returns `undefined`, avoiding any crashes in the app when `order` is not defined.

**Potential issue**: If `order` is `null` or `undefined`, the block won't render anything since there is no array to process. This may lead to the component not displaying anything when there are no orders available.

#### 2. **`slice(-1)`**

The method `slice(-1)` returns a new array that contains only the last element of `order`. Since `slice` always returns an array, `[0]` is used after it to access the first (and only) element of that new array, which is the latest order.

**Potential issue**:

- If `order` is an empty array (`[]`), `slice(-1)` will return another empty array, and when you try to access `[0]`, you'll get `undefined`. This could lead to errors when trying to access `.products` on `undefined`.

#### 3. **Accessing `.products`**

In the next line, you assume that the value returned by `slice(-1)[0]` (the latest order) has a `products` property, which is an array of products.

**Potential issue**:

- If `order.slice(-1)[0]` ends up being `undefined` (for example, if `order` is an empty array), accessing `.products` will throw an error because you're trying to access a property on `undefined`. This would break the application.

To avoid this issue, you could use optional chaining here as well:

```jsx
order?.slice(-1)[0]?.products.map(...)
```

This ensures that you only try to access `.products` if there is a valid last order and you're not trying to access a property on `undefined`.

#### 4. **`map((product) => ...)`**

If everything works correctly up to this point, `products.map` will iterate over each product in the last order and generate an `OrderCard` component for each one.

**Potential issue**:

- If `products` is not an array (for example, if it's `undefined` or doesn't exist), `map` will throw an error because you can't iterate over a non-array value.

To fix this, you can ensure that `products` is always at least an empty array when there are no products, so that `map` doesn't fail:

```jsx
{
	order
		?.slice(-1)[0]
		?.products?.map((product) => (
			<OrderCard
				key={product.id}
				id={product.id}
				title={product.title}
				imageURL={product.image}
				price={product.price}
			/>
		));
}
```

<br>
<br>

## [MYORDERS PAGE: LIST OF ORDERS]()

The My Orders page is going to wrap all the orders. We are iterating over the `ordersList`, rendering a clickable `OrderCard` component. Each order will direct the user to a `MyOrder` page with the specific order selected.

MyOrders:

```javascript
import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCard';
import { Link } from 'react-router-dom';

import { React, useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function MyOrders() {
	const { ordersList } = useContext(
		ShoppingCartContext
	);

	return (
		<Layout>
			<div className='flex items-center justify-center relative w-80'>
				<h1>MyOrders</h1>
			</div>
			{ordersList?.map((order, index) => (
				<Link
					key={index}
					to={`/my-orders/${order.id}`}
				>
					<OrdersCard
						className='cursor-pointer'
						date={order.date}
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
					/>
				</Link>
			))}
		</Layout>
	);
}

export default MyOrders;
```

This component will be rendered at every iteration of `ordersList`.

OrdersCard:

```jsx
import { XMarkIcon } from '@heroicons/react/24/outline';

const OrdersCard = (props) => {
	const { date, totalPrice, totalProducts } =
		props;

	return (
		<div className='flex justify-between items-center mb-3 border border-black'>
			<p>
				<span>{date} </span>
				<span>{totalPrice} </span>
				<span>{totalProducts} </span>
			</p>
		</div>
	);
};

export { OrdersCard };
```

On the other hand, to avoid reloading the entire page and losing the `ordersList` information (as there is no persistence set up yet), the `Link` component will direct us to the My Orders page.

MyOrder:

```jsx
// COMPONENTS
import { Layout } from '../../Components/Layout';
import { OrderCard } from '../../Components/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

// CONTEXT
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function MyOrder() {
	const { ordersList } = useContext(
		ShoppingCartContext
	);

	return (
		<Layout>
			<div
				className='flex items-center justify-center relative
			w-80 mb-6'
			>
				<Link
					to={'/my-orders'}
					className='absolute left-0'
				>
					<ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
				</Link>
				<h1 className=''>MyOrder</h1>
			</div>
			<div className='flex flex-col w-80'>
				{ordersList
					?.slice(-1)[0]
					.products.map((product) => (
						<OrderCard
							key={product.id}
							id={product.id}
							title={product.title}
							imageURL={product.image}
							price={product.price}
						/>
					))}
			</div>
		</Layout>
	);
}

export default MyOrder;
```

<br>
<br>

## [MYORDER PAGE: INDIVIDUAL ORDER]()

Now we have the order list rendered on the My Orders page. The goal is to click on each order and see its content, specifically the selected products. To achieve this, we are redirected to the URL `/my-order/{index}`, where the index refers to the position in the `ordersList` array.

MyOrders:

```jsx
return (
	<Layout>
		<div className='flex items-center justify-center relative w-80'>
			<h1>MyOrders</h1>
		</div>
		{ordersList?.map((order, index) => (
			<Link
				key={index}
				to={`/my-orders/${index}`}
			>
				<OrdersCard
					className='cursor-pointer'
					date={order.date}
					totalPrice={order.totalPrice}
					totalProducts={order.totalProducts}
				/>
			</Link>
		))}
	</Layout>
);
```

It is necessary to specify in the App component the route.

App:

```jsx
{
	path: '/my-orders/:id',
	element: <MyOrder />,
},
```

When React renders the MyOrder page, it accesses the URL to extract the `:id` sent. This id will help us determine the position in the `ordersList` array. If the `id` is `last`, as when we click the checkout button, the index variable is assigned the last position of the array.

MyOrder:

```jsx
function MyOrder() {
	const { ordersList } = useContext(
		ShoppingCartContext
	);

	// URL INDEX
	const currentPath = window.location.pathname;
	let index = currentPath.substring(
		currentPath.lastIndexOf('/') + 1
	);
	// Last case
	if (index === 'last') {
		index = ordersList?.length - 1;
	}

	return (
		<Layout>
			<div
				className='flex items-center justify-center relative
			w-80 mb-6'
			>
				<Link
					to={'/my-orders'}
					className='absolute left-0'
				>
					<ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
				</Link>
				<h1 className=''>MyOrder</h1>
			</div>
			<div className='flex flex-col w-80'>
				{ordersList?.[index].products.map(
					(product) => (
						<OrderCard
							key={product.id}
							id={product.id}
							title={product.title}
							imageURL={product.image}
							price={product.price}
						/>
					)
				)}
			</div>
		</Layout>
	);
}
```

<br>
<br>

## [CHALLENGE: PURCHASE ORDERS WITH TAILWINDCSS]()

At this point there is the need to give style to the order cards.

OrderCard:

```jsx
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
	const { date, totalPrice, totalProducts } =
		props;
	let articles =
		totalProducts == 1 ? 'article' : 'articles';

	return (
		<div className='flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4'>
			<div className='flex justify-between w-full'>
				<div className='flex flex-col'>
					<p className='flex items-center gap-2'>
						<CalendarIcon className='size-5' />
						<span className='font-light'>
							{date}
						</span>
					</p>
					<p className='flex items-center gap-2'>
						<ShoppingBagIcon className='size-5' />
						<span className='font-light'>
							{totalProducts} {articles}
						</span>
					</p>
				</div>

				<p className='flex items-center gap-2'>
					<span className='font-medium text-2xl'>
						$ {totalPrice}
					</span>
					<ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
				</p>
			</div>
		</div>
	);
};

export { OrdersCard };
```

<br>
<br>
<br>

# FILTERING PRODUCTS FROM FRONTEND

# [PRODUCT SEARCH]()

Once we have the app running, we need to refactor the API request, which means relocating the request to the context component instead of the Home page. At the same time, another global state is created to store the word written in the search input.

Context:

```jsx
// API Products
const [apiItems, setApiItems] = useState(null);

useEffect(() => {
	fetch(urlApi)
		.then((response) => response.json())
		.then((data) => setApiItems(data));
}, []);

// Search products by title
const [searchByTitle, setSearchByTitle] =
	useState(null);
```

In the Home page, we apply some changes, such as creating the search input and setting the `onChange()` event, which will update the global state.

Home:

```jsx
function Home() {
	const {
		apiItems,
		searchByTitle,
		setSearchByTitle,
	} = useContext(ShoppingCartContext);

	console.log(searchByTitle);

	return (
		<Layout>
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>
					All Products
				</h1>
			</div>

			<div className='flex flex-col'>
				<input
					type='text'
					placeholder='Search a product'
					className='text-center rounded-lg border border-black w-full p-3 mb-4 focus:outline-none'
					onChange={(event) =>
						setSearchByTitle(event.target.value)
					}
				/>
				<div className='grid grid-cols-4 gap-6 w-full max-w-screen-lg'>
					{apiItems?.map((item) => (
						<Card key={item.id} data={item} />
					))}
				</div>
			</div>

			<ProductDetail />
		</Layout>
	);
}
```

<br>
<br>

## [FILTERING TITLES WITH JAVASCRIPT]()

To filter products using the words written in the input tag, it is necessary to execute a function that returns another array with the matches. This function is `filterItemsByTitle()`.

However, the `useEffect()` hook needs to be used because `filterItemsByTitle()` has to be executed every time the `apiItems` and `searchByTitle` dependencies change.

The resulting array is stored in `filteredItems`.

Context:

```jsx
// Filtered products - search results
const [filteredItems, setFilteredItems] =
	useState(null);

// Filtering process
const filterItemsByTitle = (
	apiItems,
	searchByTitle
) => {
	return apiItems?.filter((item) =>
		item.title
			.toLowerCase()
			.includes(searchByTitle.toLowerCase())
	);
};

useEffect(() => {
	if (searchByTitle) {
		setFilteredItems(
			filterItemsByTitle(apiItems, searchByTitle)
		);
	}
}, [apiItems, searchByTitle]);
```

In the Home page, we render the products array, which can either be the array returned by the API or the filtered items array. We apply logic to render one or the other based on the length of the arrays.

Home:

```jsx
function Home() {
	const {
		apiItems,
		searchByTitle,
		setSearchByTitle,
		filteredItems,
	} = useContext(ShoppingCartContext);

	// Products view render
	const renderView = () => {
		if (searchByTitle?.length > 0) {
			if (filteredItems?.length > 0) {
				return filteredItems?.map((item) => (
					<Card key={item.id} data={item} />
				));
			} else {
				return (
					<div className='flex flex-col items-center justify-center col-span-4 mt-6'>
						<InformationCircleIcon className='h-6 w-6 mb-2' />
						<p>No products found</p>
					</div>
				);
			}
		} else {
			return apiItems?.map((item) => (
				<Card key={item.id} data={item} />
			));
		}
	};

	// SIMPLIFIED CODE
	// const renderViewProducts = () => {
	// 	const itemsToRender =
	// 		searchByTitle?.length > 0
	// 			? filteredItems
	// 			: apiItems;

	// 	if (itemsToRender?.length > 0) {
	// 		return itemsToRender?.map((item) => (
	// 			<Card key={item.id} data={item} />
	// 		));
	// 	} else {
	// 		return <p> No results Found</p>;
	// 	}
	// };

	return (
		<Layout>
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>
					All Products
				</h1>
			</div>

			<div className='flex flex-col w-full max-w-screen-lg'>
				<input
					type='text'
					placeholder='Search a product'
					className='text-center rounded-lg border border-black w-full p-3 mb-4 focus:outline-none'
					onChange={(event) =>
						setSearchByTitle(event.target.value)
					}
				/>
				<div className='grid grid-cols-4 gap-6 w-full max-w-screen-lg'>
					{renderView()}
				</div>
			</div>

			<ProductDetail />
		</Layout>
	);
}

export default Home;
```

<br>
<br>

## [FILTERING CATEGORIES WITH JAVASCRIPT]()

Filtering products by categories is mainly executed in the Context component; the App component only defines the routes and the elements that will be rendered (Home page).

App:

```jsx
const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/clothes', element: <Home /> },
		{ path: '/electronics', element: <Home /> },
		{ path: '/jewelery', element: <Home /> },
		{ path: '/toys', element: <Home /> },
		{ path: '/others', element: <Home /> },
		{ path: '/', element: <Home /> },
		{
			path: '/my-account',
			element: <MyAccount />,
		},
		{ path: '/my-order', element: <MyOrder /> },
		{
			path: '/my-orders',
			element: <MyOrders />,
		},
		{
			path: '/my-orders/last',
			element: <MyOrder />,
		},
		{
			path: '/my-orders/:id',
			element: <MyOrder />,
		},
		{ path: '/*', element: <NotFound /> },
		{ path: '/signin', element: <SignIn /> },
	]);

	return routes;
};
```

On the other hand, the Navbar component sets a category in the global state `searchByCategory` for every Link tag; this value will be used to filter products.

Navbar:

```jsx

<li>
	<NavLink
		to='/'
		onClick={() =>
			context.setSearchByCategory(null)
		}
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
		onClick={() =>
			context.setSearchByCategory(
				"men\'s clothing"
			)
		}
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
		onClick={() =>
			context.setSearchByCategory(
				'electronics'
			)
		}
		className={({ isActive }) =>
			isActive ? activeStyle : undefined
		}
	>
		Electronics
	</NavLink>
</li>
```

The Context component is where all the filtering processes are made. After setting the states and the filter functions, we create another function called `filterBy()`, which will assign the `apiItems` array to `filteredResults`. After that, the filter by category is executed, and the result is assigned to `filteredResults`.

The next filtering by title process is based on the previous results.

In case both searches are false, the `apiItems` array is returned.

Context:

```jsx
// Search products by title / category
const [searchByTitle, setSearchByTitle] =
	useState(null);
const [searchByCategory, setSearchByCategory] =
	useState(null);

// Filtered products - search results
const [filteredItems, setFilteredItems] =
	useState(null);

// Filtering process by title
const filterItemsByTitle = (
	apiItems,
	searchByTitle
) => {
	return apiItems?.filter((item) =>
		item.title
			.toLowerCase()
			.includes(searchByTitle.toLowerCase())
	);
};

// Filtering process by category
const filterItemsByCategory = (
	apiItems,
	searchByCategory
) => {
	return apiItems?.filter((item) =>
		item.category
			.toLowerCase()
			.includes(searchByCategory.toLowerCase())
	);
};

// Filter process
const filterBy = (
	apiItems,
	searchByTitle,
	searchByCategory
) => {
	let filteredResults = apiItems;

	if (searchByCategory) {
		filteredResults = filterItemsByCategory(
			apiItems,
			searchByCategory
		);
	}

	if (searchByTitle) {
		filteredResults = filterItemsByTitle(
			filteredResults,
			searchByTitle
		);
	}

	return filteredResults;
};

useEffect(() => {
	setFilteredItems(
		filterBy(
			apiItems,
			searchByTitle,
			searchByCategory
		)
	);
}, [apiItems, searchByTitle, searchByCategory]);
```

From the previous header, the Home page has changed. Now, the `renderView()` function only executes the render, regardless of whether it is the apiItems array or the filtered one.

Home:

```jsx
const {
	setSearchByTitle,
	filteredItems: itemsToRender,
} = useContext(ShoppingCartContext);

// Products view render
const renderView = () => {
	if (itemsToRender?.length > 0) {
		return itemsToRender?.map((item) => (
			<Card key={item.id} data={item} />
		));
	} else {
		return (
			<div className='flex flex-col items-center justify-center col-span-4 mt-6'>
				<InformationCircleIcon className='h-6 w-6 mb-2' />
				<p>No products found</p>
			</div>
		);
	}
};
```

<br>
<br>
<br>

# BUGS TO FIX

- The application base url is not working properly, it is taking: [https://juancumbeq.github.io/platzi-react-with-vite-tailwind/](https://juancumbeq.github.io/platzi-react-with-vite-tailwind/) the entire url as a internal route of the application.

<br>
<br>
<br>

# AUTHOR

This project was developed by _Juan Cumbe_. If you have any questions or suggestions about the project, feel free to contact me via [e-mail](mailto:hello@juancumbe.com) or my [Linkedin](https://www.linkedin.com/in/juancumbeq/) profile.
