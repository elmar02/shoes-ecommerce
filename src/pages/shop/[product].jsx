import { useRouter } from 'next/router';
import React from 'react'

const product = () => {
    const router = useRouter();
  const { product } = router.query;
  return (
    <div>{product}</div>
  )
}

export default product