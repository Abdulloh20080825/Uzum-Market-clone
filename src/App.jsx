import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';

const App = () => {
	return (
		<div className='max-w-[1200px] mx-auto'>
			<Header />
			<Routes>
				<Route index element={<Main />} />
			</Routes>
		</div>
	);
};

export default App;
