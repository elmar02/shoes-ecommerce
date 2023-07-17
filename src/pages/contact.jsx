import React from 'react'
import Layout from '../../layout/Layout'
import Link from 'next/link'

export default function Contact () {
  return (
    <Layout>
      <section className='py-16 dark:bg-gray-900 dark:text-white'>
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="left-box h-96 md:h-auto">
              <iframe className='google-map border-0 w-full h-full'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3442434528133!2d49.84419047590515!3d40.379062471445614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7a06b402f%3A0xd8897cf79ec36111!2s28%20Mall!5e0!3m2!1sen!2sus!4v1689068389511!5m2!1sen!2sus"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="right-box">
              <div className="info-box grid grid-cols-2 gap-5 mb-10">
                <div className="box">
                  <h3 className='font-bold text-2xl'>Adress</h3>
                  <p className='text-gray-500 dark:text-gray-300'>6th Forrest Ray,</p>
                  <p className='text-gray-500 dark:text-gray-300'>Manhattan NYC 10001, USA</p>
                </div>
                <div className="box">
                  <h3 className='font-bold text-2xl'>Mobile</h3>
                  <p className='text-gray-500 dark:text-gray-300'>Mobile 1: (+01)-212-33-6789</p>
                  <p className='text-gray-500 dark:text-gray-300'>Mobile 2: (+01)-212-66-8888</p>
                  <p className='text-gray-500 dark:text-gray-300'>Hotline: 1900 888 888</p>
                </div>
                <div className="box">
                  <h3 className='font-bold text-2xl'>Email</h3>
                  <p className='text-gray-500 dark:text-gray-300'>Contact@sample.com</p>
                  <p className='text-gray-500 dark:text-gray-300'>Support@sample.com</p>
                </div>
                <div className="box">
                  <h3 className='font-bold text-2xl'>Time</h3>
                  <p className='text-gray-500 dark:text-gray-300'>Monday - Friday: 08:00 - 20:00</p>
                  <p className='text-gray-500 dark:text-gray-300'>Saturday - Sunday: 13:00 - 22:00</p>
                </div>
              </div>
              <div className="form-box">
                <h3 className='font-bold text-2xl mb-5'>Drop us a line</h3>
                <form action="form" className='flex flex-col text-sm text-gray-500 dark:text-gray-300'>
                  <label htmlFor="name">Your Name</label>
                  <input className='bg-transparent border mt-1 mb-3 outline-none p-2 focus:border-black dark:focus:border-white border-gray-200 dark:border-gray-700' id='name' type="text" name='name' />
                  <label htmlFor="email">Your Email (required)</label>
                  <input className='bg-transparent border mt-1 mb-3 outline-none p-2 focus:border-black dark:focus:border-white border-gray-200 dark:border-gray-700' id='email' type="text" name='email' />
                  <label htmlFor="message">Your Message</label>
                  <textarea className='bg-transparent border mt-1 mb-3 outline-none p-2 focus:border-black dark:focus:border-white border-gray-200 dark:border-gray-700' id='message' name='message'></textarea>
                  <button className='bg-red-400 hover:bg-red-300 text-white mt-3 p-2 text-xl'>Send</button>
                </form>
                <div className="socials mt-7 flex justify-center text-xl">
                  <Link className='ms-3 p-5 text-white bg-blue-900 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.facebook.com/'} target='_blank'><i class="fa-brands fa-facebook-f"></i></Link>
                  <Link className='ms-3 p-5 text-white bg-blue-400 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.twitter.com/'} target='_blank'><i class="fa-brands fa-twitter"></i></Link>
                  <Link className='ms-3 p-5 text-white bg-red-700 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.plus.google.com/'} target='_blank'><i class="fa-brands fa-google-plus-g"></i></Link>
                  <Link className='ms-3 p-5 text-white bg-red-600 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.pinterest.com/'} target='_blank'><i class="fa-brands fa-pinterest"></i></Link>
                  <Link className='ms-3 p-5 text-white bg-yellow-950 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.instagram.com/'} target='_blank'><i class="fa-brands fa-instagram"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}