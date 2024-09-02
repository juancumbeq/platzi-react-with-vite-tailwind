import { createContext } from 'react';

// CONTEXT CREATION
const ShoppingCartContext = createContext();

// COMPONENT PROVIDER
function ShoppingCartProvider({ children }) {
	// RETURN STATEMENT USING CONTEXT PROVIDER
	return (
		<ShoppingCartContext.Provider>
			{children}
		</ShoppingCartContext.Provider>
	);
}

export {
	ShoppingCartContext,
	ShoppingCartProvider,
};
