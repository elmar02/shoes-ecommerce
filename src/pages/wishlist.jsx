import React from 'react'
import Layout from '../../layout/Layout'
import Item from '@/components/Item'

export default function Wishlist() {
  return (
    <Layout>
      <section className='dark:bg-gray-900 dark:text-white'>
        <div className="container mx-auto px-5 py-10">
          {
            false ?
              <div className={`products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-10`}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
              :
              <div className='text-center'>No products were added to the wishlist</div>
          }
        </div>
      </section>
    </Layout>
  )
}

