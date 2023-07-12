import React from 'react'
import Layout from '../../layout/Layout'
import Banner from '@/components/Banner'
import Link from 'next/link'
import Banner1 from '@/images/about/banner1.jpg'
import Banner2 from '@/images/about/banner2.jpg'
import Banner3 from '@/images/about/banner3.jpg'
import Icon from '@/images/about/icon.jpg'
import Image from 'next/image'
import Slider from 'react-slick'
const about = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <Layout>
      <section className='py-24 dark:bg-gray-900 dark:text-white'>
        <div className="container px-5 mx-auto">
          <h1 className='text-center font-semibold text-5xl mb-7'>Hello! We’re Elessi</h1>
          <p className='text-center w-3/4 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus metus, convallis ut leo nec, tincidunt eleifend justo. Ut felis orci, hendrerit a pulvinar et, gravida ac lorem. Sed vitae molestie sapien, at sollicitudin tortor.
            Duis id volutpat libero, id vestibulum purus.Donec euismod accumsan felis,egestas lobortis velit tempor vitae. Integer eget velit fermentum, dignissim odio non, bibendum velit.</p>
          <div className="socials my-7 flex justify-center text-xl">
            <Link className='ms-3 p-5 text-white bg-blue-900 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.facebook.com/'} target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
            <Link className='ms-3 p-5 text-white bg-blue-400 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.twitter.com/'} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
            <Link className='ms-3 p-5 text-white bg-red-700 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.plus.google.com/'} target='_blank'><i className="fa-brands fa-google-plus-g"></i></Link>
            <Link className='ms-3 p-5 text-white bg-red-600 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.pinterest.com/'} target='_blank'><i className="fa-brands fa-pinterest"></i></Link>
            <Link className='ms-3 p-5 text-white bg-yellow-950 rounded-full w-8 h-8 flex justify-center items-center' href={'https://www.instagram.com/'} target='_blank'><i className="fa-brands fa-instagram"></i></Link>
          </div>
          <div className="workers my-20 text-center grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="image-box relative">
              <div className="socials hidden absolute bottom-5 left-1/2 -translate-x-1/2 ">
                <Link className='me-3' href={'https://www.facebook.com/'} target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
                <Link className='me-3' href={'https://www.twitter.com/'} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
                <Link className='me-3' href={'https://www.dribbble.com/'} target='_blank'><i className="fa-brands fa-dribbble"></i></Link>
                <Link href={'https://www.behance.net/'} target='_blank'><i className="fa-brands fa-behance"></i></Link>
              </div>
              <div className="image">
                <Image className='w-full' src={Banner1} />
              </div>
              <div className="text-box">
                <h1 className='mt-3 mb-5 font-bold'>Lisa John</h1>
                <p>Fashion Design</p>
              </div>
            </div>
            <div className="image-box relative">
              <div className="socials hidden absolute bottom-5 left-1/2 -translate-x-1/2 ">
                <Link className='me-3' href={'https://www.facebook.com/'} target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
                <Link className='me-3' href={'https://www.twitter.com/'} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
                <Link className='me-3' href={'https://www.dribbble.com/'} target='_blank'><i className="fa-brands fa-dribbble"></i></Link>
                <Link href={'https://www.behance.net/'} target='_blank'><i className="fa-brands fa-behance"></i></Link>
              </div>
              <div className="image">
                <Image className='w-full' src={Banner2} />
              </div>
              <div className="text-box">
                <h1 className='mt-3 mb-5 font-bold'>Jane Doe</h1>
                <p>Director</p>
              </div>
            </div>
            <div className="image-box relative">
              <div className="socials hidden absolute bottom-5 left-1/2 -translate-x-1/2 ">
                <Link className='me-3' href={'https://www.facebook.com/'} target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
                <Link className='me-3' href={'https://www.twitter.com/'} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
                <Link className='me-3' href={'https://www.dribbble.com/'} target='_blank'><i className="fa-brands fa-dribbble"></i></Link>
                <Link href={'https://www.behance.net/'} target='_blank'><i className="fa-brands fa-behance"></i></Link>
              </div>
              <div className="image">
                <Image className='w-full' src={Banner3} />
              </div>
              <div className="text-box">
                <h1 className='mt-3 mb-5 font-bold'>Cartherin Forres</h1>
                <p>Marketing Director</p>
              </div>
            </div>
          </div>
          <div className="reviews text-center">
            <h2 className='text-3xl font-bold mb-7'>Our customers reviews</h2>
            <Slider {...settings}>
              <div className='mb-7'>
                <div className='flex justify-center'><Image className='rounded-full' src={Icon}/></div>
                <p className='my-3 w-3/4 mx-auto'>A good theme is one thing, but with brilliant support behind it, it becomes a great theme. I had to narrow down from quite a selection of good themes for my Shopify store, what settled it for me to choose Gecko, was the ability to have custom swatches for product variations. My code knowledge is very limited, so I needed help with some customization, and I am very impressed with the prompt support in getting the site looking just how I needed it on both desktop and mobile. Keep up the great work The4 team!</p>
                <span className='font-semibold'>hjghhjgh </span>
                <span>- Happy Customer</span>
              </div>
              <div className='mb-7'>
                <div className='flex justify-center'><Image className='rounded-full' src={Icon}/></div>
                <p className='my-3 w-3/4 mx-auto'>A good theme is one thing, but with brilliant support behind it, it becomes a great theme. I had to narrow down from quite a selection of good themes for my Shopify store, what settled it for me to choose Gecko, was the ability to have custom swatches for product variations. My code knowledge is very limited, so I needed help with some customization, and I am very impressed with the prompt support in getting the site looking just how I needed it on both desktop and mobile. Keep up the great work The4 team!</p>
                <span className='font-semibold'>hjghhjgh </span>
                <span>- Happy Customer</span>
              </div>
              <div className='mb-7'>
                <div className='flex justify-center'><Image className='rounded-full' src={Icon}/></div>
                <p className='my-3 w-3/4 mx-auto'>A good theme is one thing, but with brilliant support behind it, it becomes a great theme. I had to narrow down from quite a selection of good themes for my Shopify store, what settled it for me to choose Gecko, was the ability to have custom swatches for product variations. My code knowledge is very limited, so I needed help with some customization, and I am very impressed with the prompt support in getting the site looking just how I needed it on both desktop and mobile. Keep up the great work The4 team!</p>
                <span className='font-semibold'>hjghhjgh </span>
                <span>- Happy Customer</span>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default about