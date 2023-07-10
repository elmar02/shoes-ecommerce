import React, { useState } from 'react'
import ImgUrl from '@/images/home/shoe.png'
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getCurrency } from '../util';
const Slide = () => {
    const selectedLanguage = useSelector((state) => state.language.lang);
    const languages = useSelector((state) => state.language.languages);
    const slider = languages[selectedLanguage].home.slider;
    const selectedCurrency = useSelector((state) => state.currency.currency);
    const constant = getCurrency(selectedCurrency)[0]*100;
    const price = Math.round(constant*99.99)/100
    const sign = getCurrency(selectedCurrency)[1]
    return (
        <div>
            <div>
                <div><Image src={ImgUrl} alt='img' /></div>
                <Link href={'/'} className='text-center'>
                    <h1 className='sm:text-5xl text-4xl mb-3 font-bold' >{slider[0].title}</h1>
                    <p className='sm:text-3xl text-2xl text-gray-800 dark:text-gray-400'>{sign+price}</p>
                </Link>
            </div>
        </div>
    )
}

export default Slide