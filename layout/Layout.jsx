import Banner from "@/components/Banner";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const router = useRouter()
  const number = 0
  const search = router.query.q
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const pages = languages[selectedLanguage].pages;
  const searchTitle = languages[selectedLanguage].header.search
  const filteredPages = pages.find(page => page.page_url === router.pathname);
  const title = filteredPages.name.replace('search',search).replace('number',number)
  const home = ['Home','Əsas Səhifə','Ana Sayfa']
  

  useEffect(() => {
    document.title = (router.pathname==='/search'? `${searchTitle}: `:'')+ title + ' / Elessi';
  }, [title]);
  
  return (
    <>
    <Header/>
    {!home.includes(title)? <Banner title={title}/> : <></>}
    <div>{ props.children }</div>
    <Footer/>
    </>
  )
}

export default Layout