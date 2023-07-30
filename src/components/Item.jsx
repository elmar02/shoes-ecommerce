import { getCurrency } from '@/util';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import QuickView from './QuickView';
import { changeLiked, setFalse } from '@/redux/slices/wishlistSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartActions } from '@/redux/slices/cartSlice';

const Item = ({ product }) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.theme.isDark)
  const cart = useSelector((state)=>state.cart.inCart)
  const addToCart = () => {
    const existedItem = cart.find((item)=>item.id===product.id)
    if (existedItem) {
      toast.warning("Product already added!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? 'dark' : 'light',
      });
    }
    else {
      toast.success(`${product.title} was added to Cart`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? 'dark' : 'light',
        icon: <i className="ri-shopping-bag-line text-white bg-red-400 rounded-full padding ring-shake" />,
      });
    }
    dispatch(cartActions.addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    }));
  };

  const dataPrice = product.price
  const selectedCurrency = useSelector((state) => state.currency.currency);
  const constant = getCurrency(selectedCurrency)[0] * 100;
  const price = Math.round(constant * dataPrice) / 100
  const sign = getCurrency(selectedCurrency)[1]
  const [display, setDisplay] = useState('hidden')
  const changeDisplay = () => {
    setDisplay('flex');
  }
  const productUrl = "/shop/" + product.title.replace(/ /g, "-") + "?id=" + product.id

  const likedIds = useSelector((state) => state.wishlist.likedIds)
  const isLiked = likedIds.includes(product.id)
  const clickedHeart = () => {
    dispatch(changeLiked(product.id))
    dispatch(setFalse())
  }
  return (
    <div className='product-item relative'>
      <Link href={productUrl} className="image-box flex justify-center transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 h-96">
        <img src={product.image} alt='product-img' className='object-contain' />
      </Link>
      <button onClick={clickedHeart} title='Add to wishlist' className='wish-button absolute top-4 right-5 text-2xl hover:animate-bounce text-red-400'>
        {isLiked ? <i className="fa-solid fa-heart" />
          : <i className="fa-regular fa-heart" />}
      </button>
      <button onClick={changeDisplay} title='Quick view' className='view-button absolute top-16 right-2 bg-neutral-800 text-white px-3 py-2 rounded-full md:invisible md:translate-x-5 md:opacity-0'><i className="fa-regular fa-eye"></i></button>
      <button onClick={addToCart} title='Add to cart' className='cart-button absolute right-2 bg-red-400 text-white w-10 h-10 rounded-full md:invisible md:translate-x-5 md:opacity-0'><i className="ri-shopping-bag-line"></i></button>
      <div className="title-box py-4 dark:text-white">
        <Link className='hover:text-red-400 text-lg transition-colors' href={productUrl}><h1>{product.title}</h1></Link>
        <p className='font-semibold'>{price + sign}</p>
      </div>
      <QuickView display={display} setDisplay={setDisplay} />
    </div>
  )
}

export default Item