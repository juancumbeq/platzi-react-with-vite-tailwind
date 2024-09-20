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
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>
					MyOrders
				</h1>
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
}

export default MyOrders;
