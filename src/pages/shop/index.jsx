import Item from '@/components/Item'
import React, { useRef, useState } from 'react'
import Layout from '../../../layout/Layout'

export default function Shop() {
  const [other,setOther] = useState('grid-cols-2')
  const [medium,setMedium] = useState('grid-cols-3')
  const [large,setLarge] = useState('grid-cols-4')
  const [xlarge,setXlarge] = useState('grid-cols-4')
  const ref = useRef()
  const changeDisplay = (type)=>{
    console.log(ref.current.classList);
    switch(type){
      case 1: setOther('grid-cols-1'); break;
      case 2: setOther('grid-cols-2'); setMedium('grid-cols-2'); setLarge('grid-cols-2'); setXlarge('grid-cols-2'); break;
      case 3: setMedium('grid-cols-3'); setLarge('grid-cols-3'); setXlarge('grid-cols-3'); break;
      case 4: setLarge('grid-cols-4'); setXlarge('grid-cols-4'); break;
      case 5: setXlarge('grid-cols-5'); break;
    }
  }
  return (
    <Layout>
      <div className='dark:bg-gray-900 py-16 dark:text-white'>
        <div className="container mx-auto px-5">
          <div className="filter-area flex justify-between">
            <div className="search-bar">
              <input className='outline-none bg-slate-800 p-2' type="text" placeholder='Search' />
            </div>
            <div className="displays flex py-3 space-x-4">
              <button onClick={()=>changeDisplay(1)} className='1d flex space-x-1 md:hidden'>
                <div className='w-2 h-full bg-slate-600'></div>
              </button>
              <button onClick={()=>changeDisplay(2)} className='2d flex space-x-1'>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
              </button>
              <button onClick={()=>changeDisplay(3)} className='3d md:flex space-x-1 hidden'>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
              </button>
              <button onClick={()=>changeDisplay(4)} className='4d lg:flex space-x-1 hidden'>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
              </button>
              <button onClick={()=>changeDisplay(5)} className='5d xl:flex space-x-1 hidden'>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
                <div className='w-2 h-full bg-slate-600'></div>
              </button>
            </div>
          </div>
          <hr className='border-gray-300 dark:border-gray-600' />
          <div ref={ref} className={`products grid ${other} md:${medium} lg:${large} xl:${xlarge} gap-x-3 gap-y-10 mt-10`}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </Layout>
  )
}