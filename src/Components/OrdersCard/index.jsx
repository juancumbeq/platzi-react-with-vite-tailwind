import { XMarkIcon } from '@heroicons/react/24/outline';

const OrdersCard = (props) => {
	const { date, totalPrice, totalProducts } =
		props;

	return (
		<div className='flex justify-between items-center mb-3 border border-black'>
			<p>
				<span>{date} </span>
				<span>{totalPrice} </span>
				<span>{totalProducts} </span>
			</p>
		</div>
	);
};

export { OrdersCard };
