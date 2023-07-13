import React from 'react'
import Layout from '../../layout/Layout'
import WishList from '@/components/WishList'

const wishlist = () => {
  return (
    <Layout>
      <section className='dark:bg-gray-900 dark:text-white  mx-auto px-5 py-10'>
      <WishList/>
      </section>
    </Layout>
  )
}

export default wishlist