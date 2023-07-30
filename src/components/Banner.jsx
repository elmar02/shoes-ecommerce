import BtLink from './BtLink'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

const Banner = ({ title,products }) => {
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
  const categories = [...new Set(products?.map(obj => obj.category))].sort();

  return (
    <div className='banner w-full text-center dark:text-white bg-left-top xl:bg-top'>
      <h1>{title}</h1>
      {
        router.pathname === '/404' ? 
        <div className='mt-8'>
          <BtLink to={'/home'} title={gohome} />
        </div>
         : <></>
      }
      {
        router.pathname === '/shop' ?
          <ul className='categories hidden md:flex space-x-4 mt-7'>
            <button onClick={() => chooseCategory('all')}><li className={`uppercase text-lg ${router.query.cat === undefined ? 'active' : ''}`}>All</li></button>
            {
              categories?.map((category,index)=>(
                <button key={index} onClick={() => chooseCategory(category)}><li className={`uppercase text-lg ${router.query.cat === category ? 'active' : ''}`}>{category}</li></button>
              ))
            }
          </ul>
          : <></>
      }
    </div>
  )
}

export default Banner