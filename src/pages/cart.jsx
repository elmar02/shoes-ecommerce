import React from 'react'
import Layout from '../../layout/Layout'
import Counter from '@/components/Counter'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '@/redux/slices/cartSlice'
import useCart from '@/hooks/useCart'
import { getCurrency } from '@/util'

export default function Cart() {
  const cart = useSelector((state) => state.cart.inCart)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const dispatch = useDispatch()
  const removeFromCart = (product)=>{
    dispatch(cartActions.removeFromCart(product))
  }
  const selectedCurrency = useSelector((state) => state.currency.currency);
  const constant = getCurrency(selectedCurrency)[0]*100;
  const sign = getCurrency(selectedCurrency)[1]

  // custom hooks for store cart in local storage
  useCart();
  return (
    <Layout>
      <section className='dark:bg-gray-900 dark:text-white  mx-auto px-5'>
        {
          cart?.length !== 0 ?
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
                  {
                    cart?.map((item, index) => (
                      <tr key={index}>
                        <td><button onClick={()=>removeFromCart(item)} title='Remove'><i className="fa-solid fa-xmark text-3xl"></i></button></td>
                        <td className='flex justify-center'><Link href={`/shop/${item.title}?id=${item.id}`}><img className='w-16' src={item.image} alt="product" /></Link></td>
                        <td><Link href={`/shop/${item.title}?id=${item.id}`}>{item.title}</Link></td>
                        <td>{sign}{Math.ceil(item.price*constant)/100}</td>
                        <td className=''><Counter product={item} /></td>
                        <td>{sign}{Math.ceil(item.quantity*item.price*constant)/100}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="cartTable-mobile md:hidden pt-8">
                {
                  cart?.map((item,index) =>{ return(
                    <div key={index} className="product p-4 rounded-lg mb-3 relative dark:bg-gray-700 bg-gray-100 text-right">
                      <button onClick={()=>removeFromCart(item)} className='absolute top-5 left-5' title='Remove'><i className="fa-solid fa-xmark text-3xl"></i></button>
                      <div className="product-photo flex justify-center">
                      <Link href={`/shop/${item.title}?id=${item.id}`}><img className='w-16 h-20 object-contain object-top' src={item.image} alt="product" /></Link>
                      </div>
                      <div className="flex justify-between py-5 space-x-3">
                        <h1>Product:</h1>
                        <p><Link href={`/shop/${item.title}?id=${item.id}`}>{item.title}</Link></p>
                      </div>
                      <div className="flex justify-between items-center py-5 space-x-3">
                        <h1>Price:</h1>
                        <p>{sign}{Math.ceil(item.price*constant)/100}</p>
                      </div>
                      <div className="flex justify-between items-center py-5 space-x-3">
                        <h1>Quantity:</h1>
                        <Counter product={item}/>
                      </div>
                      <div className="flex justify-between items-center pt-5 space-x-3">
                        <h1>Total:</h1>
                        <p>{sign}{Math.ceil(item.quantity*item.price*constant)/100}</p>
                      </div>
                    </div>
                  )})
                }
              </div>
              <div className='flex justify-end py-4'><span className='font-bold pe-1'>Total:</span>{sign}{Math.ceil(totalPrice*constant)/100}</div>
            </div>
            :
            <div className='empty text-center py-12'>
              <i className="ri-shopping-cart-line text-9xl text-gray-600 dark:text-gray-200"></i>
              <h1 className='font-semibold text-5xl'>No products in the cart.</h1>
              <p className='mt-6 mb-7'>You will find a lot of interesting products on our {"Shop"} page.</p>
              <Link className='uppercase text-red-400 font-semibold border-b-2 border-red-400 pb-1 inline-block' href={'/shop'}>continue shopping</Link>
            </div>
        }
      </section>
    </Layout >
  )
}
