import Item from '@/components/Item'
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../../layout/Layout'
import { useRouter } from 'next/router'

export default function Shop() {
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

  const handleCategory = (e) => {
    const { pathname, query } = router;
    const category = e.target.value
    const updatedQuery = {
      ...query,
      cat: category,
    };

    if (category !== 'all') {
      router.push({
        pathname,
        query: updatedQuery,
      });
    }
    else {
      delete query.cat
      router.push({
        pathname,
        query,
      });
    }
  }

  const selectRef = useRef(null);
  const selectRef1 = useRef(null);
  useEffect(() => {
    function adjustSelectWidth() {
      const selectedOption = selectRef.current.options[selectRef.current.selectedIndex];
      const textWidth = getTextWidth(selectedOption.text) + 30;
      selectRef.current.style.width = textWidth + 'px';
      const selectedOption1 = selectRef1.current.options[selectRef1.current.selectedIndex];
      const textWidth1 = getTextWidth(selectedOption1.text) + 30;
      selectRef1.current.style.width = textWidth1 + 'px';
    }

    function getTextWidth(text) {
      const span = document.createElement('span');
      span.textContent = text;
      span.style.visibility = 'hidden';
      span.style.position = 'absolute';
      document.body.appendChild(span);
      const width = span.offsetWidth;
      document.body.removeChild(span);
      return width;
    }

    if (selectRef.current) {
      selectRef.current.addEventListener('change', adjustSelectWidth);
    }

    if (selectRef1.current) {
      selectRef1.current.addEventListener('change', adjustSelectWidth);
    }

    adjustSelectWidth();

    return () => {
      if (selectRef.current) {
        selectRef.current.removeEventListener('change', adjustSelectWidth);
      }

      if (selectRef1.current) {
        selectRef1.current.removeEventListener('change', adjustSelectWidth);
      }
    };
  }, []);
  const maxValue = 1000
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(maxValue);
  const handleMin = (e) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    if (value >= 0 && value <= max) {
      setMin(value)
    }
  }

  const handleMax = (e) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    if (value <= maxValue && value >= min) {
      setMax(value)
    }
  }

  const [filter, setFilter] = useState('')

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const [sort, setSort] = useState('feat')

  const handleSort = (e) => {
    setSort(e.target.value)
  }
  return (
    <Layout>
      <div className='dark:bg-gray-900 py-16 dark:text-white'>
        <div className="container mx-auto px-5">
          <div className="filter-area flex flex-wrap md:flex-nowrap space-y-5 md:space-y-0 md:space-x-5 justify-between">
            <div className="left-box flex w-full md:w-3/5">
              <div className="search-bar grow">
                <label htmlFor="search"></label>
                <input value={filter} onChange={handleFilter} id='search' className='rounded-lg outline-none md:bg-gray-100 md:dark:bg-gray-800 border-b-2 dark:border-gray-800 md:border-none p-2.5 w-full' type="text" placeholder='Search' />
              </div>
              <div className="price-range flex items-center ms-4">
                <input onChange={handleMin} value={min} placeholder='min' id='min' type="number" className='bg-gray-100 dark:bg-gray-800 w-16 outline-none text-center p-1' required />
                <span className='px-1'>-</span>
                <input onChange={handleMax} value={max} placeholder='max' id='max' type="number" className='bg-gray-100 dark:bg-gray-800 w-16 outline-none text-center p-1' required />
              </div>
            </div>
            <div className="displays flex space-x-4 w-fit md:grow md:justify-end">
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
            <div className="right-box flex md:justify-end">
              <select ref={selectRef} value={router.query.cat === undefined ? 'all' : router.query.cat} onChange={handleCategory} id="categories" className="text-sm uppercase focus:outline-none md:hidden bg-transparent">
                <option className='dark:bg-gray-700 bg-gray-200' value='all'>All</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="sneakers">Sneakers</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="high-heels">High-heels</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="slippers">Slippers</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="shoes">Shoes</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="converse">Converse</option>
              </select>
              <select ref={selectRef1} value={sort} onChange={handleSort} id="sortby" className="inline text-sm uppercase focus:outline-none bg-transparent">
                <option className='dark:bg-gray-700 bg-gray-200' value='feat'>Featured</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="best">Best selling</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="az">Alphabetically, A-Z</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="za">Alphabetically, Z-A</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="lowhigh">Price, Low to high</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="highlow">Price, high to low</option>
              </select>
            </div>
          </div>
          <hr className='border-gray-300 dark:border-gray-600 mt-5 md:mt-2' />
          <div className={`products grid ${other} ${medium} ${large} ${xlarge} gap-x-3 gap-y-10 mt-10`}>
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
    </Layout >
  )
}