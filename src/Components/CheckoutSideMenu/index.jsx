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

			<div className='px-6 overflow-y-scroll'>
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
