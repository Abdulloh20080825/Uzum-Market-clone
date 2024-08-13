import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import { useState } from 'react';
import Tovar from './pages/Tovar';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';

const App = () => {
	const [favouritesTovars, setFavouritesTovar] = useState([]);
	const [backedTovars, setBackedTovars] = useState([]);
	console.log(favouritesTovars);

	return (
		<div className='max-w-[1200px] mx-auto'>
			<Header />
			<Routes>
				<Route
					index
					element={
						<Main
							setFavouritesTovar={setFavouritesTovar}
							favouritesTovars={favouritesTovars}
						/>
					}
				/>
				<Route path='/cart' element={<Cart />} />
				<Route
					path='/favourite'
					element={<Favourite favouritesTovars={favouritesTovars} />}
				/>
				<Route path='/tovar/:id' element={<Tovar />} />
			</Routes>
		</div>
	);
};

export default App;
