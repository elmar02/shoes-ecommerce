import { cartActions } from '@/redux/slices/cartSlice';
import { changeLiked, setFalse } from '@/redux/slices/wishlistSlice';
import { getCurrency } from '@/util';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { toast } from 'react-toastify';

const ProductDetail = ({ product, reviewsLength }) => {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={product.image} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    const yellowStars = Array.from({ length: Math.round(product.rating.rate) });
    const greyStars = Array.from({ length: 5 - Math.round(product.rating.rate) });

    const selectedCurrency = useSelector((state) => state.currency.currency);
    const constant = getCurrency(selectedCurrency)[0] * 100;
    const price = Math.round(constant * product.price) / 100
    const sign = getCurrency(selectedCurrency)[1]

    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.theme.theme.isDark)
    const cart = useSelector((state) => state.cart.inCart)
    const item = cart.find((items) => items.id === product.id) || []
    const [counterValue, setCounterValue] = useState(0);

    useEffect(() => {
        if (item.quantity) {
            setCounterValue(item.quantity)
        }
    }, [])
    const addToCart = () => {
        const existedItem = cart.find((item) => item.id === product.id)
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

            dispatch(cartActions.addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image
            }));
            for (let index = 0; index < counterValue - 1; index++) {
                dispatch(cartActions.increase(product))
            }
        }
    };
    const incr = () => {
        if (item.quantity) {
            dispatch(cartActions.increase(product))
        }
        setCounterValue(counterValue + 1)

    }
    const decr = () => {
        if (item.quantity) {
            dispatch(cartActions.decrease(product))
        }
        setCounterValue(counterValue - 1)

    }
    return (
        <div className="product-detail flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-7">
            <div className="images md:w-1/2 ">
                <Slider {...settings}>
                    <PhotoSlider src={product.image} product={product} />
                    <PhotoSlider src={product.image} product={product} />
                    <PhotoSlider src={product.image} product={product} />
                    <PhotoSlider src={product.image} product={product} />
                </Slider>
            </div>
            <div className="summary w-full md:w-1/2">
                <h1 className='text-2xl font-semibold mb-2'>{product.title}</h1>
                <div className="stars flex items-center mb-1">
                    {
                        [...yellowStars].map((item, index) =>
                            <svg key={index} className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>)
                    }
                    {
                        [...greyStars].map((item, index) =>
                            <svg key={index} className="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>)
                    }
                    <div className='ms-2 text-gray-500'>{reviewsLength} reviews</div>
                </div>
                <div className='text-2xl my-2'>{sign + price}</div>
                <p className='first-letter:uppercase text-gray-600 dark:text-gray-300'>{product.description}</p>
                <div className='flex mt-3 space-x-3'>
                    <div className="flex">
                        <button onClick={decr} className="inline-flex items-center justify-center p-2 text-sm font-medium text-gray-500 bg-white border border-r-0 border-gray-300 focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                            </svg>
                        </button>
                        <div>
                            <input readOnly type="number" value={counterValue} id="first_product" className="bg-gray-50 outline-none w-8 h-full text-center border border-gray-300 text-gray-900 text-sm block py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="1" required />
                        </div>
                        <button onClick={incr} className="inline-flex items-center justify-center p-2 text-sm font-medium text-gray-500 bg-white border border-l-0 border-gray-300 focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                    </div>
                    <button onClick={addToCart} className='bg-red-400 py-3 px-8 text-white'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

const PhotoSlider = ({ src, product }) => {

    const imgRef = useRef(null)
    const moveImage = (event) => {
        let x = event.clientX - 215
        let y = event.clientY - 179
        x = x / 273
        y = y / 517
        imgRef.current.style.transformOrigin = `${x * 100}% ${y * 100}%`
        imgRef.current.style.transform = "scale(2.5)"
    };

    const resetImage = () => {
        imgRef.current.style.transformOrigin = "center"
        imgRef.current.style.transform = "scale(1)"
    };

    const likedIds = useSelector((state) => state.wishlist.likedIds)
    const isLiked = likedIds.includes(product.id)
    const dispatch = useDispatch()
    const clickedHeart = () => {
        dispatch(changeLiked(product.id))
        dispatch(setFalse())
    }
    return (
        <div onMouseMove={moveImage}
            onMouseOut={resetImage}
            className='product-item cursor-zoom-in relative overflow-hidden'>
            <button onClick={clickedHeart} title='Add to wishlist' className='wish-button absolute top-4 right-5 text-2xl text-red-400 z-10'>
                {isLiked ? <i className="fa-solid fa-heart" />
                    : <i className="fa-regular fa-heart" />}
            </button>
            <div className="image-box flex justify-center transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img ref={imgRef} src={src} alt='product-img' className='object-contain' />
            </div>
        </div>
    )
}


export default ProductDetail