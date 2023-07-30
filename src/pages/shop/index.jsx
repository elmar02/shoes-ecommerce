import Item from '@/components/Item'
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../../layout/Layout'
import { useRouter } from 'next/router'
import { getServerSideProps } from '../api/product';
import { useSelector } from 'react-redux';
import { getCurrency } from '@/util';
export { getServerSideProps };
export default function Shop({ products }) {
  const router = useRouter()

  const [productState, setProductState] = useState([]);
  useEffect(() => {
    setProductState(products)
  }, [])

  // state to set products in grid for responsive style
  const [other, setOther] = useState('grid-cols-2')
  const [medium, setMedium] = useState('md:grid-cols-3')
  const [large, setLarge] = useState('lg:grid-cols-4')
  const [xlarge, setXlarge] = useState('xl:grid-cols-4')

  // function to set number of products per row
  const changeDisplay = (type) => {
    switch (type) {
      case 1: setOther('grid-cols-1'); break;
      case 2: setOther('grid-cols-2'); setMedium('md:grid-cols-2'); setLarge('lg:grid-cols-2'); setXlarge('xl:grid-cols-2'); break
      case 3: setMedium('md:grid-cols-3'); setLarge('lg:grid-cols-3'); setXlarge('xl:grid-cols-3'); break
      case 4: setLarge('lg:grid-cols-4'); setXlarge('xl:grid-cols-4'); break
      case 5: setXlarge('xl:grid-cols-5'); break
    }
  }

  //filter by category
  const categoryRef = useRef(null);
  const categories = [...new Set(products?.map(obj => obj.category))].sort();

  // function to update category query according to value
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

  //adjusts width of select according to options
  useEffect(() => {
    function adjustSelectWidth() {
      const selectedOption = categoryRef.current.options[categoryRef.current.selectedIndex];
      const textWidth = getTextWidth(selectedOption.text) + 35;
      categoryRef.current.style.width = textWidth + 'px';
      const selectedOption1 = sortRef.current.options[sortRef.current.selectedIndex];
      const textWidth1 = getTextWidth(selectedOption1.text) + 30;
      sortRef.current.style.width = textWidth1 + 'px';
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

    if (categoryRef.current) {
      categoryRef.current.addEventListener('change', adjustSelectWidth);
    }

    if (sortRef.current) {
      sortRef.current.addEventListener('change', adjustSelectWidth);
    }

    adjustSelectWidth();

    return () => {
      if (categoryRef.current) {
        categoryRef.current.removeEventListener('change', adjustSelectWidth);
      }

      if (sortRef.current) {
        sortRef.current.removeEventListener('change', adjustSelectWidth);
      }
    };
  }, []);


  //filter by minimum and maximum prnce
  const minRef = useRef(null)
  const maxRef = useRef(null)

  useEffect(() => {
    minRef.current.value = router.query.price_from
    maxRef.current.value = router.query.price_to
  }, [])

  const onKeyMin = (e) => {
    if (e.key === 'Enter') {
      const value = parseInt(minRef.current.value)
      const { pathname, query } = router;
      const updatedQuery = {
        ...query,
        price_from: value,
      };

      if (!isNaN(value)) {
        router.push({
          pathname,
          query: updatedQuery,
        });
      }
      else {
        delete query.price_from
        router.push({
          pathname,
          query,
        });
      }
    }
  }
  const onKeyMax = (e) => {
    if (e.key === 'Enter') {
      const value = parseInt(maxRef.current.value)
      const { pathname, query } = router;
      const updatedQuery = {
        ...query,
        price_to: value,
      };

      if (!isNaN(value)) {
        router.push({
          pathname,
          query: updatedQuery,
        });
      }
      else {
        delete query.price_to
        router.push({
          pathname,
          query,
        });
      }
    }
  }

  // filter by search
  const [filter, setFilter] = useState('')

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  //filter by sort
  const sortRef = useRef(null);

  const handleSort = (e) => {
    const { pathname, query } = router;

    const value = e.target.value

    const updatedQuery = {
      ...query,
      sortby: value,
    };

    if (value !== 'featured') {
      router.push({
        pathname,
        query: updatedQuery,
      });
    }
    else {
      delete query.sortby
      router.push({
        pathname,
        query,
      });
    }
  }

  const selectedCurrency = useSelector((state) => state.currency.currency);
  const constant = getCurrency(selectedCurrency)[0] * 100;

  useEffect(() => {
    let filteredProducts = products
    const { cat, price_to, price_from, sortby } = router.query
    if (cat) {
      filteredProducts = filteredProducts?.filter((item) => item.category === router.query.cat)
    }
    if (price_from) {
      const priceFrom = parseInt(price_from)
      const dataPrice = priceFrom
      const price = dataPrice / constant * 100
      filteredProducts = filteredProducts?.filter((item) => item.price >= price)
    }
    if (price_to) {
      const priceTo = parseInt(price_to)
      const dataPrice = priceTo
      const price = dataPrice / constant * 100
      filteredProducts = filteredProducts?.filter((item) => item.price <= price)
    }
    if (filter !== '') {
      filteredProducts = filteredProducts?.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))
    }
    if (sortby) {
      switch (sortby) {
        case "most_favourite":
          filteredProducts?.sort((a, b) => a.rating.rate - b.rating.rate)
          break;
        case "most_rated":
          filteredProducts?.sort((a, b) => a.rating.count - b.rating.count)
          break;
        case "a_to_z":
          filteredProducts?.sort((a, b) => a.title.localeCompare(b.title))
          break;
        case "z_to_a":
          filteredProducts?.sort((a, b) => b.title.localeCompare(a.title))
          break;
        case "low_to_high":
          filteredProducts?.sort((a, b) => a.price - b.price)
          break;
        case "high_to_low":
          filteredProducts?.sort((a, b) => b.price - a.price)
          break;
        default: break;
      }
    }
    setProductState(filteredProducts)
  }, [router.query, filter])
  return (
    <Layout products={products}>
      <div className='dark:bg-gray-900 py-16 dark:text-white'>
        <div className="container mx-auto px-5">
          <div className="filter-area flex flex-wrap md:flex-nowrap space-y-5 md:space-y-0 md:space-x-5 justify-between">
            <div className="left-box flex w-full md:w-3/5">
              <div className="search-bar grow">
                <label htmlFor="search"></label>
                <input value={filter} onChange={handleFilter} id='search' className='rounded-lg outline-none md:bg-gray-100 md:dark:bg-gray-800 border-b-2 dark:border-gray-800 md:border-none p-2.5 w-full' type="text" placeholder='Search' />
              </div>
              <div className="price-range flex items-center ms-4">
                <input onKeyPress={onKeyMin} ref={minRef} placeholder='min' id='min' type="number" className='bg-gray-100 dark:bg-gray-800 w-16 outline-none text-center p-1 no-arrows' />
                <span className='px-1'>-</span>
                <input onKeyPress={onKeyMax} ref={maxRef} placeholder='max' id='max' type="number" className='bg-gray-100 dark:bg-gray-800 w-16 outline-none text-center p-1 no-arrows' />
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
              <select ref={categoryRef} value={router.query.cat === undefined ? 'all' : router.query.cat} onChange={handleCategory} id="categories" className="text-sm uppercase focus:outline-none md:hidden bg-transparent">
                <option className='dark:bg-gray-700 bg-gray-200' value='all'>All</option>
                {
                  categories?.map((category, index) => (
                    <option key={index} className='dark:bg-gray-700 bg-gray-200' value={category}>{category}</option>
                  ))
                }
              </select>
              <select ref={sortRef} value={router.query.sortby === undefined ? 'default' : router.query.sortby} onChange={handleSort} id="sortby" className="inline text-sm uppercase focus:outline-none bg-transparent">
                <option className='dark:bg-gray-700 bg-gray-200' value='default'>Default</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="low_to_high">Price, Low to high</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="high_to_low">Price, high to low</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="a_to_z">Alphabetically, A-Z</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="z_to_a">Alphabetically, Z-A</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="most_rated">Most Rated</option>
                <option className='dark:bg-gray-700 bg-gray-200' value="most_favourite">Most Favourite</option>
              </select>
            </div>
          </div>
          <hr className='border-gray-300 dark:border-gray-600 mt-5 md:mt-2' />
          {
            productState ?
              <div className={`products grid ${other} ${medium} ${large} ${xlarge} gap-x-3 gap-y-10 mt-10`}>

                {productState?.map((item, index) => (
                  <Item key={index} product={item} />
                ))}

              </div>
              :
              <div className='text-center w-full mt-10 text-xl'>No product in Shop</div>

          }
        </div>
      </div>
    </Layout >
  )
}