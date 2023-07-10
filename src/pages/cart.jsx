import React from 'react'
import Layout from '../../layout/Layout'
import Banner from '@/components/Banner'
import { useSelector } from 'react-redux';

const cart = () => {
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const cart = languages[selectedLanguage].cart;
  return (
    <Layout title={cart.title}>
      <Banner title={cart.title}/>
    </Layout>
  )
}

export default cart