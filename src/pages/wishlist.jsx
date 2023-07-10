import React from 'react'
import Layout from '../../layout/Layout'
import Banner from '@/components/Banner'
import { useSelector } from 'react-redux';

const wishlist = () => {
  const selectedLanguage = useSelector((state) => state.language.lang);

  const languages = useSelector((state) => state.language.languages);
  const wishlist = languages[selectedLanguage].wishlist;
  return (
    <Layout title={wishlist.title}>
      <Banner title={wishlist.title}/>
    </Layout>
  )
}

export default wishlist