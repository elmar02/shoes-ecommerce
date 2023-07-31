import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getCurrency } from '../util';
const Slide = ({ImgUrl,title,price}) => {
    const selectedCurrency = useSelector((state) => state.currency.currency);
    const constant = getCurrency(selectedCurrency)[0]*100;
    const prices = Math.round(constant*price)/100
    const sign = getCurrency(selectedCurrency)[1]
    return (
        <div>
            <div>
                <div><Image src={ImgUrl} alt='slide' /></div>
                <Link href={'/'} className='text-center'>
                    <h1 className='sm:text-5xl text-4xl mb-3 font-bold' >{title}</h1>
                    <p className='sm:text-3xl text-2xl text-gray-800 dark:text-gray-400'>{sign+prices}</p>
                </Link>
            </div>
        </div>
    )
}

export default Slide