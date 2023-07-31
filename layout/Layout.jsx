import Banner from "@/components/Banner";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import LiveChat from "@/components/LiveChat";
import useCart from "@/hooks/useCart";
import useWishlist from "@/hooks/useWishlist";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const Layout = (props) => {
  // custom hooks for store wishlist and cart in local storage
  useWishlist();
  useCart();
  const isDark = useSelector((state) => state.theme.theme.isDark)
  const router = useRouter()
  const number = props.result
  const search = router.query.q
  const selectedLanguage = useSelector((state) => state.language.lang);
  const languages = useSelector((state) => state.language.languages);
  const pages = languages[selectedLanguage].pages;
  const searchTitle = languages[selectedLanguage].header.search
  const filteredPages = pages.find(page => page.page_url === router.route);
  const title = filteredPages?.name.replace('[SEARCH]',search).replace('[NUMBER]',number).replace('[PRODUCT]',props.product_title)
  useEffect(() => {
    document.title = (router.pathname==='/search'? `${searchTitle}: `:'')+ title + ' / Elessi';
  }, [title]);
  
return (
    <>
    <LiveChat/>
    <Header/>
    {router.pathname!=='/home'? <Banner title={title} products={props.products}/> : <></>}
    <div>{ props.children }</div>
    <Footer/>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme={isDark? 'dark':'light'}
      />
    </>
  )
}

export default Layout