import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { market_logo, uzum_logo } from '../assets/logo';
import { FaRegHeart } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { IoIosSearch } from 'react-icons/io';
import Footer from './Footer';

const Header = () => {
	return (
		<header className='flex flex-col space-y-5 px-3 lg:px-0'>
			<div className='hidden lg:flex justify-between items-center bg-slate-100 py-1 px-3'>
				<div className='hidden lg:flex items-center space-x-5'>
					<div className='hidden lg:flex items-center space-x-3'>
						<CiLocationOn />
						<p className='cursor-pointer'>
							Город:{' '}
							<span className='font-medium border-b border-black cursor-pointer'>
								Ташкент
							</span>
						</p>
					</div>
					<p className='font-medium cursor-pointer'>Пункт выдачи</p>
				</div>
				<div className='hidden lg:flex space-x-3 text-slate-500 font-medium'>
					<p className='text-purple-600 tracking-wide'>Продавайте на Uzum</p>
					<p className='cursor-pointer'>Вопрос-ответ</p>
					<p className='cursor-pointer'>Мои заказы</p>
				</div>
			</div>
			<div className='flex justify-between items-center lg:hidden'>
				<div className='flex space-x-3 items-center'>
					<img src={market_logo} alt='' width={50} className='rounded-[50%]' />
					<div className='flex flex-col '>
						<p className='text-md tracking-wide'>Uzum Market</p>
						<p className='text-sm'>скачать приложение</p>
					</div>
				</div>
				<div className='rounded-xl bg-violet-500 text-white py-2 px-3'>
					Скачать
				</div>
			</div>
			<div className='sticky top-0 flex justify-between'>
				<div className='hidden lg:flex items-center space-x-2 cursor-pointer'>
					<img src={uzum_logo} alt='' width={50} className='rounded-[50%]' />
					<p className='text-xl font-bold tracking-widest text-purple-600 uppercase'>
						Uzum Market
					</p>
				</div>
				<form className='w-screen lg:w-2/4 border z-10 border-slate-500 flex justify-between items-center rounded-md'>
					<input
						type='search'
						placeholder='Искать товары и категории'
						className='px-3 py-3 lg:py-0 w-full  border-none outline-none'
					/>
					<button
						type='submit'
						className='w-[70px] px-5 bg-slate-100 rounded-md h-full'
					>
						<IoIosSearch className='text-2xl' />
					</button>
				</form>

				<div className='hidden lg:flex space-x-4 items-center'>
					<div className='flex items-center space-x-2 cursor-pointer'>
						<FaRegHeart />
						<p>Избранное</p>
					</div>
					<div className='flex items-center space-x-2 cursor-pointer'>
						<SlBasket />
						<p>Корзина</p>
					</div>
				</div>
			</div>
			<div className='w-full fixed bottom-0 lg:hidden z-10 bg-white w-full'>
				<Footer />
			</div>
		</header>
	);
};

export default Header;
