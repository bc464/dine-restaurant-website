import {React, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer,'
import ReservationBottomLink from '../components/ReservationBottomLink/ReservationBottomLink'
import EnjoyablePlace from '../components/EnjoyablePlace/EnjoyablePlace'
import LocallyPlace from '../components/LocallyPlace/LocallyPlace'
import HighlightsMenu from '../components/HighlightsMenu/HighlightsMenu'
import Family from '../components/Family/Family'
import Special from '../components/Special/Special'
import Social from '../components/Social/Social'




const Home = () => {
  

  return (
    <>
    <div>
   
      
        <Hero />
        <EnjoyablePlace />
        <LocallyPlace />
        <HighlightsMenu />
        <Family />
        
        <ReservationBottomLink />
        <Footer />
      
    </div>
      </>
  )
}

export default Home