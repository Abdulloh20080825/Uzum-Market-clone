import React, { useEffect, useState } from 'react';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TovarList = ({ data, setFavouritesTovar, favouritesTovars }) => {
	useEffect(() => {
		const savedFavourites = JSON.parse(
			localStorage.getItem('favouritesTovars')
		);
		if (savedFavourites) {
			setFavouritesTovar(savedFavourites);
		}
	}, [setFavouritesTovar]);

	const onToggleFavourite = (data) => {
		const isFavourite = favouritesTovars.some(
			(item) => item.query === data.query
		);

		if (isFavourite) {
			// Remove from favourites
			const updatedFavourites = favouritesTovars.filter(
				(item) => item.query !== data.query
			);
			setFavouritesTovar(updatedFavourites);
			localStorage.setItem(
				'favouritesTovars',
				JSON.stringify(updatedFavourites)
			);
		} else {
			// Add to favourites
			const updatedFavourites = [...favouritesTovars, data];
			setFavouritesTovar(updatedFavourites);
			localStorage.setItem(
				'favouritesTovars',
				JSON.stringify(updatedFavourites)
			);
		}
	};

	return (
		<div className='bg-white rounded-lg shadow-lg overflow-hidden mt-10 h-[400px] flex flex-col justify-between'>
			<div>
				<div className='relative group'>
					<img
						src={data.url}
						alt={data.title}
						className='rounded-t-lg w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
					/>
					<div
						className={`absolute top-3 right-3 text-2xl cursor-pointer hover:scale-110 transition-transform`}
						onClick={() => onToggleFavourite(data)}
					>
						{favouritesTovars.some((item) => item.query === data.query) ? (
							<FaHeart className='text-red-600' />
						) : (
							<FaRegHeart className='text-black' />
						)}
					</div>
				</div>
				<Link to={`/tovar/${data.query}`}>
					<div className='py-4 px-2'>
						<p className='text-sm font-semibold mb-2'>
							{data.title.length >= 60
								? `${data.title.slice(0, 60)}...`
								: data.title}
						</p>
						<div className='flex items-center text-yellow-400 mb-2'>
							<FaStar />
							<p className='ml-1 text-sm'>{data.star}</p>
							<p className='ml-2 text-gray-500'>({data.total_order})</p>
						</div>
					</div>
				</Link>
			</div>

			<div className='p-4'>
				<div className='flex justify-between items-center'>
					<p className='text-gray-500 line-through'>{data.old_cost}</p>
					<p className='text-lg font-bold text-red-500'>{data.cost} сум</p>
				</div>
			</div>
		</div>
	);
};

export default TovarList;
