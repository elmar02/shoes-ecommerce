import React from 'react'
import Layout from '../../layout/Layout'
import Banner from '@/components/Banner'
import { useSelector } from 'react-redux';

const shop = () => {
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const shop = languages[selectedLanguage].shop;
  return (
    <Layout title={shop.title}>
      <Banner title={shop.title}/>
    </Layout>
  )
}

export default shop