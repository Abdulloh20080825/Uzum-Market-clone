import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Favourite = ({ favouritesTovars }) => {
	return (
		<div className='py-16'>
			<h1 className='text-3xl font-semibold tracking-wide cursor-pointer'>
				Мои Желания{' '}
			</h1>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
				{favouritesTovars.map((item, idx) => (
					<div
						key={idx}
						className='bg-white rounded-lg shadow-lg overflow-hidden mt-10 h-[400px] flex flex-col justify-between'
					>
						<div>
							<div className='relative group'>
								<img
									src={item.url}
									alt={item.title}
									className='rounded-t-lg w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
								/>
								<FaHeart className='absolute top-3 right-3 text-red-600 text-2xl cursor-pointer hover:scale-110 transition-transform' />
							</div>
							<Link to={`/tovar/${item.query}`}>
								<div className='py-4 px-2'>
									<p className='text-sm font-semibold mb-2'>
										{item.title.length >= 60
											? `${item.title.slice(0, 60)}...`
											: item.title}
									</p>
									<div className='flex items-center text-yellow-400 mb-2'>
										<FaStar />
										<p className='ml-1 text-sm'>{item.star}</p>
										<p className='ml-2 text-gray-500'>({item.total_order})</p>
									</div>
								</div>
							</Link>
						</div>

						<div className='p-4'>
							<div className='flex justify-between items-center'>
								<p className='text-gray-500 line-through'>{item.old_cost}</p>
								<p className='text-lg font-bold text-red-500'>
									{item.cost} сум
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Favourite;
