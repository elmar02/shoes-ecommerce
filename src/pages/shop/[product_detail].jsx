import React, { useEffect, useState } from 'react'
import Layout from '../../../layout/Layout'
import ProductSlick from '@/components/ProductSlick'
import { useRouter } from 'next/router'
import { getServerSideProps } from '../api/product';
import ProductDetail from '@/components/ProductDetail';
export { getServerSideProps };

export default function Product_detail({ products, reviews }) {
  const router = useRouter();
  const { id } = router.query
  const product = products?.find((item) => item.id === parseInt(id));
  const [recent, setRecent] = useState([])
  const productReviews = reviews?.filter((item) => item.postId === product.id) || []
  const yellowStars = Array.from({ length: Math.round(product.rating.rate) });
  const greyStars = Array.from({ length: 5 - Math.round(product.rating.rate) })
  useEffect(() => {

    let productList = JSON.parse(localStorage.getItem("visitedProducts")) || [];
    if (!productList.includes(parseInt(id))) productList?.unshift(parseInt(id));
    if (productList?.length > 4) productList.pop();
    const index = productList.indexOf(parseInt(id));
    if (index !== -1) {
      productList.splice(index, 1);
      productList.unshift(parseInt(id));
    }
    const filteredProducts = productList.map((id) => products?.find((item) => item.id === id));
    setRecent(filteredProducts);
    localStorage.setItem("visitedProducts", JSON.stringify(productList))
  }, [])

  const related = products?.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)
  return (
    <Layout product_title={product.title}>
      <section className='dark:bg-gray-900 dark:text-white'>
        <div className="container mx-auto px-10 py-10">
          <ProductDetail product={product} reviewsLength={productReviews.length}/>
          <div className='reviews mt-20' >
            <h1 className='text-center font-bold text-3xl mb-10'>Reviews</h1>
            {
              productReviews.map((review, index) => (
                <div key={index}>
                  <div className="profile flex items-center mt-6 mb-4 space-x-4">
                    <div className="space-y-1 font-medium dark:text-white">
                      <h1 className='capitalize'>{review.name}</h1>
                      <div className="block text-sm text-gray-500 dark:text-gray-400">{review.email}</div>
                    </div>
                  </div>
                  <div className="stars flex items-center mb-1">
                    {
                      [...yellowStars].map((item,index) =>
                        <svg key={index} className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>)
                    }
                    {
                      [...greyStars].map((item,index) =>
                        <svg key={index} className="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>)
                    }
                  </div>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                  <p className="mb-6 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                  <hr className='border-gray-200 dark:border-gray-800 ' />
                </div>
              ))
            }
          </div>
          <div className="products mt-16">
            <div className="related mb-10">
              <h1 className='text-center font-bold text-3xl mb-10'>Related product</h1>
              <ProductSlick products={related} />
            </div>
            <div className="recently mb-10">
              <h1 className='text-center font-bold text-3xl mb-10'>Recently viewed products</h1>
              <ProductSlick products={recent} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
