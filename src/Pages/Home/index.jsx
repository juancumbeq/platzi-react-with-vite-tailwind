import { useContext } from 'react';

// COMPONENTS
import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

// CONTEXT
import { ShoppingCartContext } from '../../Context';

function Home() {
	const {
		setSearchByTitle,
		filteredItems: itemsToRender,
	} = useContext(ShoppingCartContext);

	// Products view render
	const renderView = () => {
		if (itemsToRender?.length > 0) {
			return itemsToRender?.map((item) => (
				<Card key={item.id} data={item} />
			));
		} else {
			return (
				<div className='flex flex-col items-center justify-center col-span-4 mt-6'>
					<InformationCircleIcon className='h-6 w-6 mb-2' />
					<p>No products found</p>
				</div>
			);
		}
	};

	return (
		<Layout>
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>
					All Products
				</h1>
			</div>

			<div className='flex flex-col w-full max-w-screen-lg'>
				<input
					type='text'
					placeholder='Search a product'
					className='text-center rounded-lg border border-black w-full p-3 mb-4 focus:outline-none'
					onChange={(event) =>
						setSearchByTitle(event.target.value)
					}
				/>
				<div className='grid grid-cols-4 gap-6 w-full max-w-screen-lg'>
					{renderView()}
				</div>
			</div>

			<ProductDetail />
		</Layout>
	);
}

export default Home;
