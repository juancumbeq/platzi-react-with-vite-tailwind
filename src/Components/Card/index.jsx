// ICONS
import { PlusIcon } from '@heroicons/react/24/outline';

// GLOBAL CONTEXT
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = ({ data }) => {
	// LOCAL CONTEXT BASED ON GLOBAL CONTEXT
	const context = useContext(ShoppingCartContext);

	return (
		<div
			className='bg-white cursor-pointer w-56 h-60 rounded-lg'
			onClick={() => context.openProductDetail()}
		>
			<figure className='relative mb-2 w-full h-4/5'>
				<span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 '>
					{data.category}
				</span>
				<img
					className='w-full h-full object-cover rounded-lg'
					src={data.image}
					alt={data.title}
				/>
				<div
					className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
					onClick={() =>
						context.setCount(context.count + 1)
					}
				>
					<PlusIcon className='size-6 text-black'></PlusIcon>
				</div>
			</figure>
			<p className='flex justify-between'>
				<span className='text-sm font-light'>
					{data.title}
				</span>
				<span className='text-lg font-medium'>
					${data.price}
				</span>
			</p>
		</div>
	);
};

export { Card };
