import React from 'react'
import Layout from '../../../layout/Layout'
import ProductSlick from '@/components/ProductSlick'

export default function Product_detail() {
  return (
    <Layout>
      <section className='dark:bg-gray-900 dark:text-white'>
        <div className="container mx-auto px-5 py-10">
          <div className="product-detail text-center uppercase mb-10">
            product photos and summary will be there!
          </div>
          <hr className='border-gray-200 dark:border-gray-800 ' />
          <div className="products mt-16">
            <div className="related mb-10">
              <h1 className='text-center font-bold text-3xl mb-10'>Related product</h1>
              <ProductSlick />
            </div>
            <div className="recently mb-10">
              <h1 className='text-center font-bold text-3xl mb-10'>Related viewed products</h1>
              <ProductSlick />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

