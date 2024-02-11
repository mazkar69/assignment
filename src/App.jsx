//This project does not require routing, so i am taking thia app.js as a home page.

import Banner from "../components.js/Banner";
import Coupon from "../components.js/Coupon";
import Deals from "../components.js/Deal";
import Footer from "../components.js/Footer";
import Header from "../components.js/Header";
import Hero from "../components.js/Hero";
import HowItWorks from "../components.js/HowITWorks";
import Navbar from "../components.js/Navbar";
import Newsletter from "../components.js/Newsletter";
import Offers from "../components.js/Offers";
import Popular from "../components.js/Popular";
import PopularCategory from "../components.js/PopularCategory";
import Promotion from "../components.js/Promotion";
import Heading from "../components.js/common/Heading";



export default function App(){



  return(
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <Offers/>
    <Deals/>
    <Coupon/>
    <Banner/>
    <Popular/>
    <Newsletter/>
    <HowItWorks/>
    <Promotion/>
    <PopularCategory/>
    <Footer/>
    
    </>
  )
}





