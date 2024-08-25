import './App.css';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

function App() {
	return (
		<div className='text-3xl font-bold underline'>
			Hello world!
			<Home />
			<MyAccount />
			<MyOrder />
			<MyOrders />
			<NotFound />
			<SignIn />
		</div>
	);
}

export default App;
