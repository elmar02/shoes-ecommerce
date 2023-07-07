import Footer from "@/components/Footer"
import Header from "@/components/Header"

const Layout = (props) => {
  return (
    <>
    <Header/>
    <div className="container mx-auto">{ props.children }</div>
    <Footer/>
    </>
  )
}

export default Layout