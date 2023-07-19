import BtLink from './BtLink'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
const Banner = ({ title }) => {
  const router = useRouter();
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const gohome = languages[selectedLanguage].error.gohome
  const chooseCategory = (category) => {
    const { pathname, query } = router;
    const updatedQuery = {
      ...query,
      cat: category,
    };
    if (category !== 'all') {
      router.push({
        pathname,
        query: updatedQuery,
      });
    }
    else{
      delete query.cat
      router.push({
        pathname,
        query,
      });
    }
  }

  return (
    <div className='banner w-full text-center dark:text-white'>
      <h1>{title}</h1>
      {
        router.pathname === '/404' ? <BtLink to={'/home'} title={gohome} /> : <></>
      }
      {
        router.pathname === '/shop' ?
          <ul className='categories hidden md:flex space-x-4 mt-7'>
            <button onClick={() => chooseCategory('all')}><li className={`uppercase text-lg ${router.query.cat === undefined ? 'active' : ''}`}>All</li></button>
            <button onClick={() => chooseCategory('sneakers')}><li className={`uppercase text-lg ${router.query.cat === 'sneakers' ? 'active' : ''}`}>Sneakers</li></button>
            <button onClick={() => chooseCategory('high-heels')}><li className={`uppercase text-lg ${router.query.cat === 'high-heels' ? 'active' : ''}`}>High-heels</li></button>
            <button onClick={() => chooseCategory('slippers')}><li className={`uppercase text-lg ${router.query.cat === 'slippers' ? 'active' : ''}`}>Slippers</li></button>
            <button onClick={() => chooseCategory('shoes')}><li className={`uppercase text-lg ${router.query.cat === 'shoes' ? 'active' : ''}`}>Shoes</li></button>
            <button onClick={() => chooseCategory('converse')}><li className={`uppercase text-lg ${router.query.cat === 'converse' ? 'active' : ''}`}>Converse</li></button>
          </ul>
          : <></>
      }
    </div>
  )
}

export default Banner