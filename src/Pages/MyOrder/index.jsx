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

export default MyOrder;
