import React from 'react'
import Layout from '../../layout/Layout'
import Item from '@/components/Item'
import { useSelector } from 'react-redux'
import { getServerSideProps } from './api/product';
export { getServerSideProps };
export default function Wishlist({ products }) {
  const likedIds = useSelector((state) => state.wishlist.likedIds)
  const likedProducts = products?.filter((product) => likedIds.includes(product.id))
  return (
    <Layout>
      <section className='dark:bg-gray-900 dark:text-white'>
        <div className="container mx-auto px-5 lg:px-36 py-10">
          {
            likedIds?.length !== 0 ?
              <div className={`products pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-10`}>
                {
                  likedProducts?.map((item, index) => (
                    <Item key={index} product={item} />
                  ))
                }
              </div>
              :
              <div className='text-center'>No products were added to the wishlist</div>
          }
        </div>
      </section>
    </Layout>
  )
}

