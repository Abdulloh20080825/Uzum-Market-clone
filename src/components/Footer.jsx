import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { IoHomeOutline } from 'react-icons/io5';

const Footer = () => {
	return (
		<div className='flex justify-between pr-5'>
			<div className='flex flex-col items-center'>
				<IoHomeOutline className='text-xl'/>
				<p>Главная</p>
			</div>

			<div className='flex flex-col items-center'>
				<SlBasket className='text-xl' />
				<p>Корзина</p>
			</div>

			<div className='flex flex-col items-center'>
				<FaRegHeart className='text-xl' />
				<p>Избранное</p>
			</div>
		</div>
	);
};

export default Footer;
