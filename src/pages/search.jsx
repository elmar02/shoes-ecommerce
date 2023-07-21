import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import { useRouter } from 'next/router'
import Item from '@/components/Item'

export default function Search() {
  const router = useRouter()
  const [other, setOther] = useState('grid-cols-2')
  const [medium, setMedium] = useState('md:grid-cols-3')
  const [large, setLarge] = useState('lg:grid-cols-4')
  const [xlarge, setXlarge] = useState('xl:grid-cols-4')
  const changeDisplay = (type) => {
    switch (type) {
      case 1: setOther('grid-cols-1'); break;
      case 2: setOther('grid-cols-2'); setMedium('md:grid-cols-2'); setLarge('lg:grid-cols-2'); setXlarge('xl:grid-cols-2'); break
      case 3: setMedium('md:grid-cols-3'); setLarge('lg:grid-cols-3'); setXlarge('xl:grid-cols-3'); break
      case 4: setLarge('lg:grid-cols-4'); setXlarge('xl:grid-cols-4'); break
      case 5: setXlarge('xl:grid-cols-5'); break
    }
  }
  return (
    <Layout>
      <section className='dark:bg-gray-900 dark:text-white'>
        <div className="mx-auto px-7 py-10">
          <div className="filter-area flex justify-center">
            <div className="displays flex space-x-4">
              <button onClick={() => changeDisplay(1)} className={`1d flex items-center space-x-1 md:hidden ${other === 'grid-cols-1' ? '' : 'opacity-50'}`}>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
              </button>
              <button onClick={() => changeDisplay(2)} className={`2d flex w-fit items-center space-x-1 ${other === 'grid-cols-2' ? '' : 'opacity-50'} ${medium === 'md:grid-cols-2' ? '' : 'md:opacity-50'} ${large === 'lg:grid-cols-2' ? '' : 'lg:opacity-50'} ${xlarge === 'xl:grid-cols-2' ? '' : 'xl:opacity-50'}`} >
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
              </button>
              <button onClick={() => changeDisplay(3)} className={`3d md:flex items-center space-x-1 hidden ${medium === 'md:grid-cols-3' ? '' : 'md:opacity-50'} ${large === 'lg:grid-cols-3' ? '' : 'lg:opacity-50'} ${xlarge === 'xl:grid-cols-3' ? '' : 'xl:opacity-50'}`}>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
              </button>
              <button onClick={() => changeDisplay(4)} className={`4d lg:flex items-center space-x-1 hidden ${large === 'lg:grid-cols-4' ? '' : 'lg:opacity-50'} ${xlarge === 'xl:grid-cols-4' ? '' : 'xl:opacity-50'}`}>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
              </button>
              <button onClick={() => changeDisplay(5)} className={`5d xl:flex items-center space-x-1 hidden ${xlarge === 'xl:grid-cols-5' ? '' : 'xl:opacity-50'}`}>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
                <div className='w-2 h-5 bg-gray-400 dark:bg-gray-700'></div>
              </button>
            </div>
          </div>
          <hr className='border-gray-300 dark:border-gray-600 mt-4 mb-10' />
          {
            false?
            <div className={`products grid ${other} ${medium} ${large} ${xlarge} gap-x-3 gap-y-10`}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
            :
            <div className="empty flex items-center py-4 px-6 border-2 space-x-3 dark:border-gray-700 text-gray-500 dark:text-gray-300">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <p>No products were found matching your selection.</p>
            </div>
          }
        </div>
      </section>
    </Layout>
  )
}