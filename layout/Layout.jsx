import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useEffect } from "react";

const Layout = (props) => {
  useEffect(() => {
    document.title = props.title + ' / Elessi';
  }, [props.title]);
  
  return (
    <>
    <Header/>
    <div>{ props.children }</div>
    <Footer/>
    </>
  )
}

export default Layout