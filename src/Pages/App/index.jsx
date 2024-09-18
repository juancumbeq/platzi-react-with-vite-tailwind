import {
	useRoutes,
	BrowserRouter,
} from 'react-router-dom';

// CONTEXT
import { ShoppingCartProvider } from '../../Context';

// APPLICATION PAGES
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

// COMPONENTS
import { Navbar } from '../../Components/Navbar';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

import './App.css';

// ROUTES COMPONENT
const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{
			path: '/my-account',
			element: <MyAccount />,
		},
		{ path: '/my-order', element: <MyOrder /> },
		{
			path: '/my-orders',
			element: <MyOrders />,
		},
		{
			path: '/my-orders/last',
			element: <MyOrder />,
		},
		{ path: '/*', element: <NotFound /> },
		{ path: '/signin', element: <SignIn /> },
	]);

	return routes;
};

// MAIN APP COMPONENT
function App() {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<AppRoutes />
				<Navbar />
				<CheckoutSideMenu />
			</BrowserRouter>
		</ShoppingCartProvider>
	);
}

export default App;
