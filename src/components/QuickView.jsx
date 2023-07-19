import React from 'react'

const QuickView = ({ display, setDisplay }) => {
  const changeDisplay = () => {
    setDisplay('hidden')
  }
  return (
    <div className={`quickview fixed ${display} justify-center items-center z-50 top-0 bottom-0 left-0 right-0`}>
      <div className='bg-white relative dark:bg-gray-800 w-3/4 h-5/6'>
        <button onClick={changeDisplay} className='absolute top-3 right-4 text-4xl'><i className="fa-solid fa-xmark"></i></button>
      </div>
    </div>
  )
}

export default QuickView