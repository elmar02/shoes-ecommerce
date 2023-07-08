import React, { useEffect, useRef } from 'react'
import logoUrl from '@/images/static/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Header = () => {
    const barRef = useRef(null);
    const layoutRef = useRef(null);
    const layoutRef1 = useRef(null);
    const navBarRef = useRef(null);
    const upRef = useRef(null);
    const searchRef = useRef(null);
    const closeBar = () => {
        if (barRef.current) {
            barRef.current.classList.add("collapsed");
        }
        if (layoutRef.current) {
            layoutRef.current.classList.add("collapse");
        }
    };
    const closeSearch = () => {
        if (layoutRef1.current) {
            layoutRef1.current.classList.add("collapse");
        }
        if (searchRef.current) {
            searchRef.current.classList.add("collapsed");
        }
    };
    const openSearch = () => {
        if (layoutRef1.current) {
            layoutRef1.current.classList.remove("collapse");
        }
        if (searchRef.current) {
            searchRef.current.classList.remove("collapsed");
        }
    };
    const openBar = () => {
        if (barRef.current) {
            barRef.current.classList.remove("collapsed");
        }
        if (layoutRef.current) {
            layoutRef.current.classList.remove("collapse");
        }
    };
    const up = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const fixedHeader = () => {
        window.addEventListener("scroll", function () {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                if (navBarRef.current) {
                    navBarRef.current.classList.add("fixed-header");
                }
                if (upRef.current) {
                    upRef.current.classList.remove("hidden");
                    upRef.current.classList.add("flex");
                }
            } else {
                if (navBarRef.current) {
                    navBarRef.current.classList.remove("fixed-header");
                }
                if (upRef.current) {
                    upRef.current.classList.add("hidden");
                    upRef.current.classList.remove("flex");
                }
            }
        });
    };

    useEffect(() => {
        fixedHeader();
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", closeBar);
        window.addEventListener("scroll", closeSearch);
        return () => {
            window.removeEventListener("scroll", closeBar);
            window.removeEventListener("scroll", closeSearch);
        };
    }, []);
    const router = useRouter()
    return (
        <header>
            <button onClick={up} ref={upRef} className='fixed z-10 hidden w-9 h-9 justify-center items-center rounded-full bg-red-400 text-white bottom-10 right-10'><i class="fa-solid fa-chevron-up"></i></button>
            <div ref={barRef} className="mobile-side-bar collapsed md:hidden fixed left-0 w-72 top-0 bottom-0 bg-white z-50 p-1">
                <div className='flex items-center mt-1 mb-2'>
                    <form action="submit" className='flex search border-2 border-red-400 w-full rounded-md p-1'>
                        <label htmlFor="search"><i class="fa-solid fa-magnifying-glass text-red-400 mx-1"></i></label>
                        <input id='search' type="text" placeholder='Search' className='outline-none w-full placeholder:text-red-400' />
                    </form>
                    <i onClick={closeBar} class="fa-solid fa-xmark mx-2 text-2xl text-red-400 cursor-pointer"></i>
                </div>
                <ul className='text-2xl'>
                    <Link className={`w-full block p-2 hover:bg-red-400 hover:text-white transition-transform ${router.pathname === '/home' ? 'bg-red-400 text-white' : ''}`}
                        href={'/home'}>Home</Link>
                    <Link className={`w-full block p-2 hover:bg-red-400 hover:text-white transition-transform ${router.pathname === '/shop' ? 'bg-red-400 text-white' : ''}`}
                        href={'/shop'}>Shop</Link>
                    <Link className={`w-full block p-2 hover:bg-red-400 hover:text-white transition-transform ${router.pathname === '/about' ? 'bg-red-400 text-white' : ''}`}
                        href={'/about'}>About Us</Link>
                    <Link className={`w-full block p-2 hover:bg-red-400 hover:text-white transition-transform ${router.pathname === '/contact' ? 'bg-red-400 text-white' : ''}`}
                        href={'/contact'}>Contact Us</Link>
                    <li className='p-2 hover:bg-red-400 hover:text-white'>
                        <select id="languages" class="bg-transparent outline-none">
                            <option className='bg-white text-black hover:bg-gray-400' value="ENG">ENG</option>
                            <option className='bg-white text-black hover:bg-gray-400' value="AZE">AZE</option>
                            <option className='bg-white text-black hover:bg-gray-400' value="TUR">TUR</option>
                        </select>
                    </li>
                    <li className='p-2 hover:bg-red-400 hover:text-white '>
                        <select id="currencies" class="bg-transparent outline-none">
                            <option className='bg-white text-black hover:bg-gray-400' value="USD">USD</option>
                            <option className='bg-white text-black hover:bg-gray-400' value="AZN">AZN</option>
                            <option className='bg-white text-black hover:bg-gray-400' value="TRY">TRY</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div onClick={closeBar} ref={layoutRef} className="layout collapse md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black z-40 opacity-60"></div>
            <div className="upper-nav bg-red-400 text-sm">
                <div className="container mx-auto py-3 text-white">
                    <div className="flex justify-center md:justify-between">
                        <div className="contact-box flex items-center">
                            <Link className='ms-3' href={'https://www.facebook.com/'} target='_blank'><i class="fa-brands fa-facebook-f"></i></Link>
                            <Link className='ms-3' href={'https://www.twitter.com/'} target='_blank'><i class="fa-brands fa-twitter"></i></Link>
                            <Link className='ms-3' href={'https://www.plus.google.com/'} target='_blank'><i class="fa-brands fa-google-plus-g"></i></Link>
                            <Link className='ms-3' href={'https://www.pinterest.com/'} target='_blank'><i class="fa-brands fa-pinterest"></i></Link>
                            <Link className='ms-3' href={'https://www.instagram.com/'} target='_blank'><i class="fa-brands fa-instagram"></i></Link>
                            <Link className='ms-3' href={'tel:+994773121173'} target='_blank'>Call: <span className='border-b border-white border-opacity-30'>+994 703121173</span></Link>
                        </div>
                        <div className="right-box hidden md:flex">

                            <select id="languages" class="bg-transparent outline-none w-fit me-2">
                                <option className='bg-white text-black hover:bg-gray-400' value="ENG">ENG</option>
                                <option className='bg-white text-black hover:bg-gray-400' value="AZE">AZE</option>
                                <option className='bg-white text-black hover:bg-gray-400' value="TUR">TUR</option>
                            </select>
                            <select id="currencies" class="bg-transparent outline-none w-fit border-white border-opacity-30 border-s ps-2">
                                <option className='bg-white text-black hover:bg-gray-400' value="USD">USD</option>
                                <option className='bg-white text-black hover:bg-gray-400' value="AZN">AZN</option>
                                <option className='bg-white text-black hover:bg-gray-400' value="TRY">TRY</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={navBarRef} className="lower-nav w-full text-lg">
                <div className="container mx-auto py-6 px-3">
                    <div className="flex items-center">
                        <button onClick={openBar} className='md:hidden me-6 flex justify-start w-fit text-3xl'><i class="fa-solid fa-bars-staggered"></i></button>
                        <div className="logo "><Link href={'/'}><Image src={logoUrl} alt="FootShop Logo" width={100} /></Link></div>
                        <ul className="nav-menu text-2xl grow hidden md:flex justify-center">
                            <li>
                                <Link className={`pe-5 hover:text-red-400 transition-transform ${router.pathname === '/home' ? 'text-red-400' : ''}`} href={'/home'}>Home</Link>
                            </li>
                            <li>
                                <Link className={`pe-5 hover:text-red-400 transition-transform ${router.pathname === '/shop' ? 'text-red-400' : ''}`} href={'/shop'}>Shop</Link>
                            </li>
                            <li>
                                <Link className={`pe-5 hover:text-red-400 transition-transform ${router.pathname === '/about' ? 'text-red-400' : ''}`} href={'/about'}>About Us</Link>
                            </li>
                            <li>
                                <Link className={`pe-5 hover:text-red-400 transition-transform ${router.pathname === '/contact' ? 'text-red-400' : ''}`} href={'/contact'}>Contact Us</Link>
                            </li>
                        </ul>
                        <div className="right-box grow md:grow-0 md:w-fit flex justify-end">
                            <ul className='flex justify-end'>
                                <li onClick={openSearch} className='pe-3 hidden md:block'>
                                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                </li>
                                <li className='pe-3'>
                                    <Link href={'/wishlist'}>
                                        <i class="fa-regular fa-heart"></i>
                                        <div className='box bg-red-400 text-white px-2 rounded-full'>0</div>
                                    </Link>
                                </li>
                                <li className='pe-3'>
                                    <Link href={'/cart'}>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <div className='box bg-red-400 text-white px-2 rounded-full'>0</div>
                                    </Link>
                                </li>
                                <li className='relative ps-2'>
                                    <input type="checkbox" class="checkbox checked:checkbox-label" id="checkbox" defaultChecked={true} />
                                    <label for="checkbox" class="checkbox-label">
                                        <i class="fas fa-sun text-yellow-300"></i>
                                        <i class="fas fa-moon text-yellow-300"></i>
                                        <span class="ball"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={searchRef} className="searched-box collapsed hidden md:flex fixed z-40 bg-white left-0 right-0 top-0 h-1/6 p-3 items-center">
                <form action="submit" className='flex search border-2 border-red-400 w-full rounded-md p-1'>
                    <label htmlFor="search"><i class="fa-solid fa-magnifying-glass text-red-400 mx-1"></i></label>
                    <input id='search' type="text" placeholder='Search' className='outline-none w-full placeholder:text-red-400' />
                </form>
                <i onClick={closeSearch} class="fa-solid fa-xmark mx-2 text-2xl text-red-400 cursor-pointer"></i>
            </div>
            <div onClick={closeSearch} ref={layoutRef1} className="layout collapse fixed top-0 left-0 right-0 bottom-0 bg-black z-30 opacity-60"></div>
        </header>
    )
}

export default Header