import React from 'react'
import BtLink from './BtLink'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
const Banner = ({title}) => {
  const router = useRouter();
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const gohome = languages[selectedLanguage].error.gohome
  return (
    <div className='banner w-full text-center dark:text-white'>
      <h1>{title}</h1>
      {
        router.pathname==='/404' ? <BtLink to={'/home'} title={gohome} /> : <></>
      }
    </div>
  )
}

export default Banner