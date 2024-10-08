import {
	createContext,
	useState,
	useEffect,
} from 'react';
import { urlApi } from '../Pages/Home/url';

// CONTEXT CREATION
const ShoppingCartContext = createContext();

// COMPONENT PROVIDER
function ShoppingCartProvider({ children }) {
	// Global states
	// Shopping Cart - Increment quantity
	const [count, setCount] = useState(0);

	// Product Detail - Open/Close
	const [
		isProductDetailOpen,
		setIsProductDetailOpen,
	] = useState(false);
	const openProductDetail = () =>
		setIsProductDetailOpen(true);
	const closeProductDetail = () =>
		setIsProductDetailOpen(false);

	// Checkout side menu - Open/Close
	const [
		isCheckoutSideMenuOpen,
		setIsCheckoutSideMenuOpen,
	] = useState(false);
	const openCheckoutSideMenu = () =>
		setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu = () =>
		setIsCheckoutSideMenuOpen(false);

	// Product Detail - Show Product
	const [productToShow, setProductToShow] =
		useState({});

	// Shopping Cart - Add products to cart
	const [cartProducts, setCartProducts] =
		useState([]);

	// Shopping Cart - Orders
	const [ordersList, setOrdersList] = useState(
		[]
	);

	// API GET Products
	const [apiItems, setApiItems] = useState(null);

	useEffect(() => {
		fetch(urlApi)
			.then((response) => response.json())
			.then((data) => setApiItems(data));
	}, []);

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

	console.log('searchByTitle: ', searchByTitle);
	console.log(
		'searchByCategory: ',
		searchByCategory
	);

	// RETURN STATEMENT USING CONTEXT PROVIDER
	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,
				productToShow,
				setProductToShow,
				cartProducts,
				setCartProducts,
				openCheckoutSideMenu,
				closeCheckoutSideMenu,
				isCheckoutSideMenuOpen,
				ordersList,
				setOrdersList,
				apiItems,
				setApiItems,
				searchByTitle,
				setSearchByTitle,
				filteredItems,
				searchByCategory,
				setSearchByCategory,
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
