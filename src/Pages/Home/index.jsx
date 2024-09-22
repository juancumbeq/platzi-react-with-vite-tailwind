import { useContext } from 'react';

import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { urlApi } from './url';
import { ProductDetail } from '../../Components/ProductDetail';

import { ShoppingCartContext } from '../../Context';

function Home() {
	const {
		apiItems,
		searchByTitle,
		setSearchByTitle,
	} = useContext(ShoppingCartContext);

	console.log(searchByTitle);

	return (
		<Layout>
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>
					All Products
				</h1>
			</div>

			<div className='flex flex-col'>
				<input
					type='text'
					placeholder='Search a product'
					className='text-center rounded-lg border border-black w-full p-3 mb-4 focus:outline-none'
					onChange={(event) =>
						setSearchByTitle(event.target.value)
					}
				/>
				<div className='grid grid-cols-4 gap-6 w-full max-w-screen-lg'>
					{apiItems?.map((item) => (
						<Card key={item.id} data={item} />
					))}
				</div>
			</div>

			<ProductDetail />
		</Layout>
	);
}

export default Home;
