import React from 'react'
import Layout from '../../layout/Layout'
import SlickSlider from '@/components/SlickSlider'
import { useSelector } from 'react-redux';
const home = () => {
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const home = languages[selectedLanguage].home;
  return (
    <Layout title={home.title}>
      <header className='dark:bg-gray-900 dark:text-white'>
      <SlickSlider/>
      </header>
    </Layout>
  )
}

export default home