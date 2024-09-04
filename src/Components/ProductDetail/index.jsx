// STYLES
import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/outline';

// CONTEXT
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function ProductDetail() {
	const { isProductDetailOpen } = useContext(
		ShoppingCartContext
	);
	return (
		<aside
			className={`${
				isProductDetailOpen ? `flex` : `hidden`
			} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
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