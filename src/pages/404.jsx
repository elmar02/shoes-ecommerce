import React from 'react'
import Layout from '../../layout/Layout'
import Banner from '@/components/Banner'

const error = () => {
  return (
    <Layout >
        <Banner title={"404 | Opps, page not found"} />
    </Layout>
  )
}

export default error