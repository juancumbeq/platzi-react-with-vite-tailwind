// COMPONENTS
import { Layout } from '../../Components/Layout';
import { OrderCard } from '../../Components/OrderCard';

// CONTEXT
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function MyOrder() {
	const { order } =
		useContext(ShoppingCartContext);

	return (
		<Layout>
			<div className=''>MyOrder</div>
			<div className='flex flex-col w-80'>
				{order
					?.slice(-1)[0]
					.products.map((product) => (
						<OrderCard
							key={product.id}
							id={product.id}
							title={product.title}
							imageURL={product.image}
							price={product.price}
						/>
					))}
			</div>
		</Layout>
	);
}

export default MyOrder;

