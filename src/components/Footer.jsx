import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='flex justify-between pr-5 z-10'>
			<Link to={'/'}>
				<div className='flex flex-col items-center'>
					<IoHomeOutline className='text-xl' />
					<p>Главная</p>
				</div>
			</Link>
			<Link to={'/cart'}>
				<div className='flex flex-col items-center'>
					<SlBasket className='text-xl' />
					<p>Корзина</p>
				</div>
			</Link>
			<Link to={'/favourite'}>
				<div className='flex flex-col items-center'>
					<FaRegHeart className='text-xl' />
					<p>Избранное</p>
				</div>
			</Link>
		</div>
	);
};

export default Footer;
