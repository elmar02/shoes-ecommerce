import React from 'react'
import img from '../../public/product.jpg'
import Image from 'next/image'

const WishList = () => {
    return (
        <>
            {
                false ? <table className='cartTable w-full text-center'>
                    <></>
                </table > :
                    <div className='text-center'>No products were added to the wishlist</div>
            }
        </>
    )
}

export default WishList