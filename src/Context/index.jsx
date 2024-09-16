import { createContext, useState } from 'react';

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

	// Product Detail - Show Product
	const [productToShow, setProductToShow] =
		useState({});

	// Shopping Cart - Add products to cart
	const [cartProducts, setCartProducts] =
		useState([]);

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
