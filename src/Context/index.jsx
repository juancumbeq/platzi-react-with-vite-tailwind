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
