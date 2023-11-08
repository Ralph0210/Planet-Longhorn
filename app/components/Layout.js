'use client'
import { useState, useEffect } from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import {motion, AnimatePresence, useIsPresent } from "framer-motion"
import { useRouter, usePathname} from "next/navigation"
import '../globals.css'
import PrivacyScreen from "./PrivacyScreen"
 
export default function Layout({ children }) {
  const pathname = usePathname();
  const router=useRouter()
  const [showPrivacyScreen, setShowPrivacyScreen] = useState(false);

 // Add a listener to the router to detect page changes
 useEffect(() => {
    // Display the privacy screen when the route changes
    setShowPrivacyScreen(true);

    // After a certain delay (e.g., 3 seconds), hide the privacy screen
    setTimeout(() => {
      setShowPrivacyScreen(false);
    }, 1000); // Adjust the delay as needed
}, [pathname]);

  return (
    <>
       <AnimatePresence wait>
        {showPrivacyScreen ? (
            <PrivacyScreen />):(
              <>
              <Navbar />
              <main>{children}</main>
            <Footer />
            </>
            )
        }
       
        
        
      </AnimatePresence>
      
      
      
    </>
  )
}