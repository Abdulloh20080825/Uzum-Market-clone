import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TOVAR_DATA } from '../constants/uzumData';
import { FaStar } from 'react-icons/fa';

const Tovar = () => {
	const [selectedData, setSelectedData] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const data = TOVAR_DATA.filter((item) => item.query === id);
		setSelectedData(data[0]);
	}, [id]);
	console.log(selectedData);
	return (
		<div className='mt-10 flex flex-col md:flex-row justify-between mb-40'>
			<div className='w-full md:w-1/2 px-4 md:px-10 mb-4 md:mb-0'>
				<img
					src={selectedData.url}
					alt={selectedData.title}
					className='w-full h-[500px] object-cover'
				/>
			</div>
			<div className='w-full md:w-1/2 px-4 md:px-10'>
				<div className='flex items-center space-x-5 mb-4'>
					<div className='flex items-center space-x-2'>
						<FaStar className='text-yellow-400' />
						<p className='text-lg font-semibold'>{selectedData.star}</p>
					</div>
					<p className='text-gray-600'>
						Более {selectedData.total_order} заказов
					</p>
				</div>
				<p className='text-2xl md:text-3xl font-bold mb-4'>
					{selectedData.title}
				</p>
				<hr className='my-5 border-gray-300' />
				<div className='mb-4'>
					<p className='font-semibold'>Количество:</p>
					<p
						className={`${
							selectedData.total <= 30 ? 'text-red-600' : 'text-green-500'
						} mt-2 text-lg`}
					>
						В наличии {selectedData.total}
					</p>
				</div>
				<p className='font-semibold'>Цена:</p>
				<div className='flex space-x-6 items-center'>
					<p className='text-xl font-bold'>{selectedData.cost} сум</p>
					<del className='text-gray-600'>{selectedData.old_cost}</del>
				</div>
				<div className='bg-slate-100 rounded-lg p-5 flex items-center space-x-2'>
					<div className='bg-yellow-300 inline-block rounded-lg py-1 px-2'>
						<p className='text-lg font-semibold'>
							От {selectedData.on_mounth} сум/мес
						</p>
					</div>
					<p className='font-semibold text-xl'>в рассрочку</p>
				</div>
				<div className='my-10 flex justify-between px-5 space-x-2'>
					<button className='bg-violet-600 text-white py-4 px-6 font-semibold rounded-xl w-1/2'>
						Добавить в корзину
					</button>
					<button className='text-violet-600 border-2 border-violet-600 py-4 px-6 font-semibold rounded-xl w-1/2'>
						Купить в 1 клик
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tovar;
