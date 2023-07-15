import Link from 'next/link'
import React from 'react'
import img from '../../public/product.jpg'
import Image from 'next/image'
import Counter from './Counter'

const CartList = () => {
    return (
        <>
            {
                true ?
                    <div>
                        <table className='cartTable hidden md:table w-full text-center'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><button><i class="fa-solid fa-xmark text-3xl"></i></button></td>
                                    <td className='flex justify-center'><Image src={img} width={60} alt="product"></Image></td>
                                    <td>Baby Boomers</td>
                                    <td>49$</td>
                                    <td className=''><Counter/></td>
                                    <td>49$</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cartTable-mobile md:hidden pt-8">
                            <div className="product p-4 rounded-lg mb-3 relative dark:bg-gray-700 bg-gray-100">
                                <button className='absolute top-5 left-5'><i class="fa-solid fa-xmark text-3xl"></i></button>
                                <div className="product-photo flex justify-center">
                                    <Image src={img} width={60} alt="product"></Image>
                                </div>
                                <div className="data">
                                    <div className="flex justify-between items-center py-5">
                                        <h1>Product:</h1>
                                        <p>Baby Boomers</p>
                                    </div>
                                    <div className="flex justify-between items-center py-5">
                                        <h1>Price:</h1>
                                        <p>49$</p>
                                    </div>
                                    <div className="flex justify-between items-center py-5">
                                        <h1>Quantity:</h1>
                                        <p><Counter/></p>
                                    </div>
                                    <div className="flex justify-between items-center pt-5">
                                        <h1>Total:</h1>
                                        <p>49$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end py-4'><span className='font-bold pe-1'>Total:</span>49$</div>

                    </div>
                    :
                    <div className='empty text-center'>
                        <i className="ri-shopping-cart-line text-9xl text-gray-600 dark:text-gray-200"></i>
                        <h1 className='font-semibold text-5xl'>No products in the cart.</h1>
                        <p className='mt-6'>Before proceed to checkout you must add some products to your shopping cart.</p>
                        <p className='mb-7'>You will find a lot of interesting products on our {"Shop"} page.</p>
                        <Link className='uppercase text-red-400 font-semibold border-b-2 border-red-400 pb-1 inline-block' href={'/shop'}>continue shopping</Link>
                    </div>

            }
        </>
    )
}

export default CartList