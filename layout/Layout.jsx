import Banner from "@/components/Banner";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const pages = languages[selectedLanguage].pages;
  const router = useRouter()
  const filteredPages = pages.find(page => page.page_url === router.pathname);
  const title = filteredPages.name
  const home = ['Home','Əsas Səhifə','Ana Sayfa']
  useEffect(() => {
    document.title = title + ' / Elessi';
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