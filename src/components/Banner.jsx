import BtLink from './BtLink'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
const Banner = ({ title }) => {
  const router = useRouter();
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const gohome = languages[selectedLanguage].error.gohome
  const chooseCategory = (category) => {
    if (category !== 'all') {
      router.push(`?cat=${category}`)
    }
    else {
      router.push(``)
    }
  }
  const handleCategory = (e)=>{
    const category = e.target.value
    if (category !== 'all') {
      router.push(`?cat=${category}`)
    }
    else {
      router.push(``)
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
          <div className='mt-7'>
            <ul className='categories hidden lg:flex space-x-4'>
              <button onClick={() => chooseCategory('all')}><li className={`uppercase text-lg ${router.query.cat === undefined ? 'active' : ''}`}>All</li></button>
              <button onClick={() => chooseCategory('sneakers')}><li className={`uppercase text-lg ${router.query.cat === 'sneakers' ? 'active' : ''}`}>Sneakers</li></button>
              <button onClick={() => chooseCategory('high-heels')}><li className={`uppercase text-lg ${router.query.cat === 'high-heels' ? 'active' : ''}`}>High-heels</li></button>
              <button onClick={() => chooseCategory('slippers')}><li className={`uppercase text-lg ${router.query.cat === 'slippers' ? 'active' : ''}`}>Slippers</li></button>
              <button onClick={() => chooseCategory('shoes')}><li className={`uppercase text-lg ${router.query.cat === 'shoes' ? 'active' : ''}`}>Shoes</li></button>
              <button onClick={() => chooseCategory('converse')}><li className={`uppercase text-lg ${router.query.cat === 'converse' ? 'active' : ''}`}>Converse</li></button>
            </ul>
            <select value={router.query.cat===undefined?'all':router.query.cat} onChange={handleCategory} id="countries" className="text-lg text-center uppercase focus:outline-none lg:hidden bg-transparent">
              <option className='dark:bg-gray-700 bg-gray-200' value='all'>All</option>
              <option className='dark:bg-gray-700 bg-gray-200' value="sneakers">Sneakers</option>
              <option className='dark:bg-gray-700 bg-gray-200' value="high-heels">High-heels</option>
              <option className='dark:bg-gray-700 bg-gray-200' value="slippers">Slippers</option>
              <option className='dark:bg-gray-700 bg-gray-200' value="shoes">Shoes</option>
              <option className='dark:bg-gray-700 bg-gray-200' value="converse">Converse</option>
            </select>
          </div>
          : <></>
      }
    </div>
  )
}

export default Banner