import React from 'react'
import ImgUrl from '@/images/home/shoe.webp'
import Image from 'next/image';

const Slide = () => {
    return (
        <div>
            <div>
                <div><Image src={ImgUrl} alt='img' /></div>
                <div className='text-center'>
                    <h1 className='sm:text-5xl text-4xl mb-3 font-bold' >Travel Boots</h1>
                    <p className='sm:text-3xl text-2xl text-gray-800'>$99.99</p>
                </div>
            </div>
        </div>
    )
}

export default Slide