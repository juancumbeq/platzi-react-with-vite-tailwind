import { useState, useEffect } from 'react';

import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { urlApi } from './url';
import { ProductDetail } from '../../Components/ProductDetail';

function Home() {
	const [items, setItems] = useState(null);

	useEffect(() => {
		fetch(urlApi)
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);

	// console.log(items);

	return (
		<Layout>
			Home
			<div className='grid grid-cols-2 gap-6 w-full max-w-lg'>
				{items?.map((item) => (
					<Card key={item.id} data={item} />
				))}
			</div>
			<ProductDetail />
		</Layout>
	);
}

export default Home;
