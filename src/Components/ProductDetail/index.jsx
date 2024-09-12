// STYLES
import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/outline';

// CONTEXT
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function ProductDetail() {
	// CONTEXT STATES
	const {
		isProductDetailOpen,
		closeProductDetail,
		productToShow,
	} = useContext(ShoppingCartContext);

	return (
		<aside
			className={`${
				isProductDetailOpen ? `flex` : `hidden`
			} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>
					Details
				</h2>
				<XCircleIcon
					className='size-6 text-black cursor-pointer'
					onClick={() => closeProductDetail()}
				></XCircleIcon>
			</div>

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
		</aside>
	);
}

export { ProductDetail };
