import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCard';

import { React, useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function MyOrders() {
	const { ordersList } = useContext(
		ShoppingCartContext
	);

	return (
		<Layout>
			<div className=''>MyOrders</div>
			{ordersList?.map((ordersList) => {
				<OrdersCard
					totalPrice={ordersList.totalPrice}
					totalProducts={ordersList.totalProducts}
				/>;
			})}
		</Layout>
	);
}

export default MyOrders;
