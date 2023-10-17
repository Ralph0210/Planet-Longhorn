import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import '../globals.css'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}