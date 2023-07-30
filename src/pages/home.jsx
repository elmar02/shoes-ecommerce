import React from 'react'
import Layout from '../../layout/Layout'
import SlickSlider from '@/components/SlickSlider'
import Link from 'next/link'
import Banner1 from '@/images/home/h9-banner-1_900x.jpg'
import Banner3 from '@/images/home/h9-banner-2_900x.jpg'
import Banner2 from '@/images/home/h9-banner-3_900x.jpg'
import Brand1 from '@/images/home/brand-1_600x.png'
import Brand2 from '@/images/home/brand-2_600x.png'
import Brand3 from '@/images/home/brand-3_600x.png'
import Brand4 from '@/images/home/brand-4_600x.png'
import Brand5 from '@/images/home/brand-5_600x.png'
import Brand6 from '@/images/home/brand-6_600x.png'
import Image from 'next/image'
import Slider from 'react-slick'
import Timer from '@/components/Timer'
import { getServerSideProps } from './api/product';
export { getServerSideProps };


export default function Home({ products }) {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  const targetDate = new Date("2023-08-04T00:00:00");
  return (
    <Layout>
      <header className='dark:bg-gray-900 dark:text-white'>
        <SlickSlider />
        <section className='pt-16'>
          <div className='mx-auto px-5'>
            <div className="shop-bar grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
              <Link className='relative' href={'/shop?cat=shoes'}>
                <Image className='w-full' src={Banner1} alt='banner1' />
                <div className="text-box absolute top-1/2 -translate-y-1/2 left-12 md:left-6">
                  <h1 className='font-semibold text-2xl text-black leading-7'>New <br /> season {new Date().getFullYear()}</h1>
                  <p className='font-bold text-gray-500'>Shoes & Accessories</p>
                </div>
              </Link>
              <Link className='relative' href={'/shop?cat=slippers'}>
                <Image className='w-full' src={Banner2} alt='banner2' />
                <div className="text-box absolute top-1/2 -translate-y-1/2 left-12 md:left-6">
                  <h1 className='font-semibold text-2xl text-white  leading-7'>Spring <br /> Arrivals</h1>
                  <p className='font-bold text-white'>Shoes Collections</p>
                </div>
              </Link>
              <Link className='relative' href={'/shop?cat=high-heels'}>
                <Image className='w-full' src={Banner3} alt='banner3' />
                <div className="text-box absolute top-12 md:top-4 left-12 md:left-6">
                  <h1 className='font-semibold text-2xl text-black'>Classic Collections</h1>
                  <p className='font-bold text-gray-500'>Sale off 50%</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className='offer-banner w-full p-3 my-20'>
          <div className="flex items-center justify-center space-y-5 md:space-y-0 md:space-x-8 font-bold flex-col md:flex-row">
            <div className="textbox text-yellow-400 text-center md:text-start">
              <h1 className='font-extrabold text-xl'>Black Friday Sale</h1>
              <p className='font-normal'>up to 50% OFF</p>
            </div>
            <Timer targetDate={targetDate} />
            <Link className='bg-yellow-400 rounded-md hover:bg-yellow-300 text-black py-4 px-7 text-sm hidden md:block' href={'/shop'}>Shop Now</Link>
          </div>
        </section>
        <section className='pb-10'>
          <div className='mx-auto px-5'>
            <div className="brands mt-10 dark:invert">
              <Slider {...settings}>
                <Link className='hover:opacity-70' target='_blank' href={'https://www.sezane.com'} ><Image src={Brand1} alt='brand' /></Link>
                <Link className='hover:opacity-70' target='_blank' href={'https://www.terranovastyle.com'} ><Image src={Brand2} alt='brand' /></Link>
                <Link className='hover:opacity-70' target='_blank' href={'https://www.zara.com'} ><Image src={Brand3} alt='brand' /></Link>
                <Link className='hover:opacity-70' target='_blank' href={'https://www.bershka.com'} ><Image src={Brand4} alt='brand' /></Link>
                <Link className='hover:opacity-70' target='_blank' href={'https://www.pullandbear.com'} ><Image src={Brand5} alt='brand' /></Link>
                <Link className='hover:opacity-70' target='_blank' href={'https://www.forever21.com'} ><Image src={Brand6} alt='brand' /></Link>
              </Slider>
            </div>
          </div>
        </section>
      </header >
    </Layout >
  )
}