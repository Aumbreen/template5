
import Header from "./components/Header"
import HeroSection from "./components/Hero"
import EditoPic from "./components/EditoPic"

import BestsellerProducts from "./components/bestellerpProduct"



import GreenDiv from "./components/GreenDiv"
import Universe from "./components/Universe"

import FeacturePost from "./components/FeacturePost"

import Footer from "./components/Footer"





export default function Home() {
  return (
    <>
      <div>
      <Header />
      <HeroSection />
      <EditoPic />
      <BestsellerProducts />

      <GreenDiv />
      <Universe />
      

    </div>
    <div>
      <FeacturePost />
      
    </div><Footer />
    
    </>

  
  )
}
