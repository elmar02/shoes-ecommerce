import React from 'react'
import Layout from '../../layout/Layout'
import Banner from '@/components/Banner'
import { useSelector } from 'react-redux';

const error = () => {
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const error = languages[selectedLanguage].error;
  return (
    <Layout title={error.title}>
        <Banner title={error.title} />
    </Layout>
  )
}

export default error