import Link from 'next/link'
import React from 'react'

const BtLink = (props) => {
  return (
    <Link className='bg-red-400 hover:bg-red-300 text-white p-2 text-xl' href={props.to}>{props.title}</Link>
  )
}

export default BtLink