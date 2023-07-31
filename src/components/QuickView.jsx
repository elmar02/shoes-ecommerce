import React from 'react'
import ProductDetail from './ProductDetail'

const QuickView = ({ display, setDisplay,product }) => {
  const changeDisplay = () => {
    setDisplay('hidden')
  }
  return (
    <div className={`quickview fixed ${display} justify-center items-center z-50 top-0 bottom-0 left-0 right-0`}>
      <div className='bg-white relative dark:bg-gray-900 w-5/6 h-5/6 p-5 overflow-y-auto'>
        <button onClick={changeDisplay} className='absolute top-3 right-4 text-4xl'><i className="fa-solid fa-xmark"></i></button>
        <ProductDetail product={product}/>
      </div>
    </div>
  )
}

export default QuickView