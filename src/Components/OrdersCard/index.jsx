import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
	const { date, totalPrice, totalProducts } =
		props;
	let articles =
		totalProducts == 1 ? 'article' : 'articles';

	return (
		<div className='flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4 shadow-md'>
			<div className='flex justify-between w-full'>
				<div className='flex flex-col'>
					<p className='flex items-center gap-2'>
						<CalendarIcon className='size-5' />
						<span className='font-light'>
							{date}
						</span>
					</p>
					<p className='flex items-center gap-2'>
						<ShoppingBagIcon className='size-5' />
						<span className='font-light'>
							{totalProducts} {articles}
						</span>
					</p>
				</div>

				<p className='flex items-center gap-2'>
					<span className='font-medium text-2xl'>
						$ {totalPrice}
					</span>
					<ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
				</p>
			</div>
		</div>
	);
};

export { OrdersCard };
