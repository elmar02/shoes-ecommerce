import React, { useEffect, useState } from 'react'
import darkLogo from '@/images/static/logo-dark.png'
import lightLogo from '@/images/static/logo-light.png'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Footer = () => {
  const isDark = useSelector((state)=>state.theme.theme.isDark)
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <li>
            <div className="logo mb-4"><Link href={'/'}><Image src={isDark?darkLogo:lightLogo} alt="FootShop Logo" width={100} /></Link></div>
            <p className="text-sm">Step into Style and Comfort with Elessi!</p>
            <ul className="mt-4 space-y-2">
              <li><Link href={"/shop"} className="hover:text-red-400 transition-colors">Shop Now</Link></li>
              <li><Link href={"/about"} className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link href={"/contact"} className="hover:text-red-400 transition-colors">Contact Us</Link></li>
              <li><Link href={"/cart"} className="hover:text-red-400 transition-colors">Check Your Cart</Link></li>
            </ul>
          </li>
          <li>
            <h2 className="text-lg font-bold mb-4">Products</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href={'/'}>Product 1</Link></li>
              <li><Link href={'/'}>Product 2</Link></li>
              <li><Link href={'/'}>Product 3</Link></li>
              <li><Link href={'/'}>Product 4</Link></li>
            </ul>
          </li>
          <li>
            <h2 className="text-lg font-bold mb-4">Partners</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href={'https://www.adidas.com/us'} target='_blank' className="hover:text-red-400 transition-colors">Adidas</Link></li>
              <li><Link href={'https://www.nike.com'} target='_blank' className="hover:text-red-400 transition-colors">Nike</Link></li>
              <li><Link href={'https://www.bulgari.com'} target='_blank' className="hover:text-red-400 transition-colors">Bvlgari</Link></li>
              <li><Link href={'https://www.dolcegabbana.com'} target='_blank' className="hover:text-red-400 transition-colors">Dolce&Gabbana</Link></li>
            </ul>
          </li>
          <li>
            <h2 className="text-lg font-bold mb-4">Stay Connected</h2>
            <p className="text-sm">Follow us on social media:</p>
            <div className="flex space-x-4 mt-4">
              <Link href={'https://www.facebook.com/'} target='_blank' className="hover:text-red-400 transition-colors">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href={'https://www.twitter.com/'} target='_blank' className="hover:text-red-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href={'https://www.instagram.com/'} target='_blank' className="hover:text-red-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href={'https://www.linkedin.com/'} target='_blank' className="hover:text-red-400 transition-colors">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white py-4 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer


