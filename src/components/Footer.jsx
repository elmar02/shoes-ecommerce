import React, { useEffect, useState } from 'react'
import darkLogo from '@/images/static/logo-dark.png'
import lightLogo from '@/images/static/logo-light.png'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Footer = () => {
  const isDark = useSelector((state) => state.theme.theme.isDark)
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const footer = languages[selectedLanguage].footer;
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto px-5 py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <li>
            <div className="logo mb-4"><Link href={'/'}><Image src={isDark ? darkLogo : lightLogo} alt="FootShop Logo" width={100} /></Link></div>
            <p className="text-sm">{footer.desc}</p>
            <ul className="mt-4 space-y-2">
              {
                footer.pages.map((page, index) => (
                  <li key={index}><Link href={page.link} className="hover:text-red-400 transition-colors">{page.name}</Link></li>
                ))
              }
            </ul>
          </li>
          <li>
            <h2 className="text-lg font-bold mb-4">{footer.columns[0].title}</h2>
            <ul className="mt-4 space-y-2">
              {
                footer.columns[0].items.map((item, index) => (<li key={index}><Link href={item.href}>{item.text}</Link></li>))
              }
            </ul>
          </li>
          <li>
            <h2 className="text-lg font-bold mb-4">{footer.columns[1].title}</h2>
            <ul className="mt-4 space-y-2">
              {
                footer.columns[1].items.map((item, index) => (
                  <li key={index}><Link href={item.href} target='_blank' className="hover:text-red-400 transition-colors">{item.text}</Link></li>
                ))
              }
            </ul>
          </li>
          <li>
            <h2 className="text-lg font-bold mb-4">{footer.columns[2].title}</h2>
            <p className="text-sm">{footer.columns[2].desc}</p>
            <div className="flex space-x-4 mt-4">
              {
                footer.columns[2].items.map((item, index) => (
                  <Link key={index} href={item.link} target='_blank' className="hover:text-red-400 transition-colors">
                    <i className={item.icon}></i>
                  </Link>
                ))
              }
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white py-4 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} {footer.copyrighted}
        </div>
      </div>
    </footer>
  )
}

export default Footer


