import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../Utils';
import { Link } from 'react-router-dom';

// STYLES
import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/outline';

// CONTEXT
import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function CheckoutSideMenu() {
	// CONTEXT STATES
	const {
		isCheckoutSideMenuOpen,
		closeCheckoutSideMenu,
		cartProducts,
		setCartProducts,
		ordersList,
		setOrdersList,
		setSearchByTitle,
		setSearchByCategory,
	} = useContext(ShoppingCartContext);

	// DELETE CART PRODUCTS
	const handleDelete = (id) => {
		const filteredProducts = cartProducts.filter(
			(product) => product.id != id
		);
		setCartProducts(filteredProducts);
	};

	// HANDLE ORDERS CHECKOUT
	const handleCheckout = () => {
		// date
		const currentDate = new Date();

		// current order details
		const orderToAdd = {
			date: currentDate.toLocaleDateString(),
			products: cartProducts,
			totalProducts: cartProducts.length,
			totalPrice: totalPrice(cartProducts),
		};
		// adding the current order
		setOrdersList([...ordersList, orderToAdd]);
		// cleaning the checkout cart
		setCartProducts([]);

		setSearchByTitle(null);
		setSearchByCategory(null);
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

			<div className='px-6 overflow-y-scroll flex-1'>
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
			<div className='px-9 mt-6 mb-6'>
				<p className='flex justify-between items-center mb-2'>
					<span className='font-light'>
						Total:
					</span>
					<span className='font-medium text-xl'>
						${totalPrice(cartProducts)}
					</span>
				</p>
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
			</div>
		</aside>
	);
}

export { CheckoutSideMenu };
