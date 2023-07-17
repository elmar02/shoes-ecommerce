import React from 'react'
import Layout from '../../layout/Layout'

export default function Wishlist() {
  return (
    <Layout>
      <section className='dark:bg-gray-900 dark:text-white  mx-auto px-5 py-10'>
        {
          false ?
            <table className='cartTable w-full text-center'>
              <></>
            </table > :
            <div className='text-center'>No products were added to the wishlist</div>
        }
      </section>
    </Layout>
  )
}

