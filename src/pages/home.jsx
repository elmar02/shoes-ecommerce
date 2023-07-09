import React from 'react'
import Layout from '../../layout/Layout'
import SlickSlider from '@/components/SlickSlider'
const home = () => {
  return (
    <Layout title='Home'>
      <header className='dark:bg-gray-900 dark:text-white'>
      <SlickSlider/>
      </header>
    </Layout>
  )
}

export default home