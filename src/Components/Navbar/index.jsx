import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

// GLOBAL CONTEXT
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function Navbar() {
	const context = useContext(ShoppingCartContext);
	const activeStyle =
		'underline underline-offset-4';

	return (
		<nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-ligth'>
			<ul className='flex items-center gap-3'>
				<li className='font-semibold text-lg'>
					<NavLink to='/'>Shopi</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						onClick={() =>
							context.setSearchByCategory(null)
						}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						All
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/clothes'
						onClick={() =>
							context.setSearchByCategory(
								"men's clothing"
							)
						}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/electronics'
						onClick={() =>
							context.setSearchByCategory(
								'electronics'
							)
						}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/jewelery'
						onClick={() =>
							context.setSearchByCategory(
								'jewelery'
							)
						}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Jewelery
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/toys'
						onClick={() =>
							context.setSearchByCategory('toys')
						}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/others'
						onClick={() =>
							context.setSearchByCategory(
								'others'
							)
						}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Others
					</NavLink>
				</li>
			</ul>

			<ul className='flex items-center gap-3'>
				<li className='text-black/60'>
					test@shopi.com
				</li>
				<li>
					<NavLink
						to='/my-orders'
						onClick={() => {
							context.setSearchByCategory(null);
							context.setSearchByTitle(null);
						}}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						My Orders
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/my-account'
						onClick={() => {
							context.setSearchByCategory(null);
							context.setSearchByTitle(null);
						}}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/sign-in'
						onClick={() => {
							context.setSearchByCategory(null);
							context.setSearchByTitle(null);
						}}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Sign In
					</NavLink>
				</li>
				<li className='flex'>
					<ShoppingBagIcon className='size-6 text-black'></ShoppingBagIcon>{' '}
					{context.cartProducts.length}
				</li>
			</ul>
		</nav>
	);
}

export { Navbar };
