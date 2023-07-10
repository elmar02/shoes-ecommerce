import React from 'react'
import Layout from '../../layout/Layout'
import Banner from '@/components/Banner'
import { useSelector } from 'react-redux';

const contact = () => {
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const contact = languages[selectedLanguage].contact;
  return (
    <Layout title={contact.title}>
      <Banner title={contact.title}/>
    </Layout>
  )
}

export default contact