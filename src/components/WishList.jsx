import React from 'react'
import img from '../../public/product.jpg'
import Image from 'next/image'

const WishList = () => {
    return (
        <>
            {
                true ? <table className='cartTable w-full text-center'>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button><i class="fa-solid fa-heart text-red-400 px-2 md:p-0"></i></button></td>
                            <td className='flex justify-center'><Image src={img} width={60}></Image></td>
                            <td>Baby Boomers</td>
                            <td>49$</td>
                            <td>Stocked</td>
                        </tr>
                    </tbody>
                </table > :
                    <div className='text-center'>No products were added to the wishlist</div>
            }
        </>
    )
}

export default WishList