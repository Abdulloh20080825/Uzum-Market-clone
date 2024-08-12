import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import { useState } from 'react';
import Tovar from './pages/Tovar';

const App = () => {
	const [favouritesTovars, setFavouritesTovar] = useState([]);
	const [backedTovars, setBackedTovars] = useState([]);
	return (
		<div className='max-w-[1200px] mx-auto'>
			<Header />
			<Routes>
				<Route index element={<Main />} />
				<Route path='/karzina' />
        <Route path='/favourite' />
				<Route path='/tovar/:id' element={<Tovar />} />
			</Routes>
		</div>
	);
};

export default App;
