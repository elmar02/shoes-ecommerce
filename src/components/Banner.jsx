import React from 'react'
import BtLink from './BtLink'
const Banner = ({title}) => {
  return (
    <div className='banner w-full text-center dark:text-white'>
      <h1>{title}</h1>
      {
        title==='404 | Opps, page not found' ? <BtLink to={'/home'} title={'Go Home'} /> : <></>
      }
    </div>
  )
}

export default Banner