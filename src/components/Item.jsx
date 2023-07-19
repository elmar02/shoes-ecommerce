import { getCurrency } from '@/util';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import imgsrc from '../../public/productItem.png'
import Image from 'next/image';
import Link from 'next/link';
import QuickView from './QuickView';
const Item = () => {
  const dataPrice = 99
  const selectedCurrency = useSelector((state) => state.currency.currency);
  const constant = getCurrency(selectedCurrency)[0] * 100;
  const price = Math.round(constant * dataPrice) / 100
  const sign = getCurrency(selectedCurrency)[1]
  const [display,setDisplay] = useState('hidden')
  const changeDisplay = () => {
    setDisplay('flex');
  }
  return (
    <div className='product-item relative'>
      <Link href={'/shop/product'} className="image-box block transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className='w-full' src={imgsrc} alt='product-img' />
      </Link>
      <button title='Add to wishlist' className='wish-button absolute top-4 right-4 text-xl hover:animate-bounce'>{false ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</button>
      <button onClick={changeDisplay} title='Quick view' className='view-button absolute top-16 right-1 bg-neutral-800 text-white px-3 py-2 rounded-full md:invisible md:translate-x-5 md:opacity-0'><i class="fa-regular fa-eye"></i></button>
      <button title='Add to cart' className='cart-button absolute right-1 bottom-16 bg-red-400 text-white w-10 h-10 rounded-full md:invisible md:translate-x-5 md:opacity-0'><i class="ri-shopping-bag-line"></i></button>
      <div className="title-box py-4 dark:text-white">
        <Link className='hover:text-red-400 text-lg transition-colors' href={'shop/product'}><h1>Travel Boots</h1></Link>
        <p className='font-semibold'>{price + sign}</p>
      </div>
      <QuickView display={display} setDisplay={setDisplay}/>
    </div>
  )
}

export default Item