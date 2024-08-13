import React from 'react';
import { TOVAR_DATA } from '../constants/uzumData';
import TovarList from '../components/TovarList';

const Main = ({ favouritesTovars, setFavouritesTovar }) => {
	return (
		<div className='mt-16'>
			<p className='text-3xl font-semibold'>Популярное</p>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
				{TOVAR_DATA.map((item, idx) => (
					<TovarList
						key={idx}
						data={item}
						setFavouritesTovar={setFavouritesTovar}
						favouritesTovars={favouritesTovars}
					/>
				))}
			</div>
		</div>
	);
};

export default Main;
