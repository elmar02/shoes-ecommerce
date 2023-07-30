import React, { useEffect, useState } from 'react'
import Layout from '../../../layout/Layout'
import ProductSlick from '@/components/ProductSlick'
import { useRouter } from 'next/router'
import { getServerSideProps } from '../api/product';
export { getServerSideProps }; 
export default function Product_detail({ products }) {
  const router = useRouter();
  const {id} = router.query
  const product = products?.find((item)=> item.id===parseInt(id));
  const [recent,setRecent] = useState([])
  useEffect(()=>{

    let productList = JSON.parse(localStorage.getItem("visitedProducts"))||[];
    if (!productList.includes(parseInt(id))) productList?.unshift(parseInt(id));
    if(productList?.length>4) productList.pop();
    const index = productList.indexOf(parseInt(id));
    if (index !== -1) {
    productList.splice(index, 1);
    productList.unshift(parseInt(id));
    }
    console.log(productList?.length);
    const filteredProducts = productList.map((id)=>products?.find((item)=>item.id===id));
    setRecent(filteredProducts);
    localStorage.setItem("visitedProducts",JSON.stringify(productList))
  },[])

  const related = products?.filter((item)=>item.category===product.category).slice(0,4)
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
