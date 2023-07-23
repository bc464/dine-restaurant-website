import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from 'react'

import Home from "../src/pages/Home";
import Booking from '../src/pages/Booking'
import SocialPage from "./pages/SocialPage";
import SpecialPage from "./pages/SpecialPage";
import './App.css'
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [count, setCount] = useState(0);
  

  return (
    
    <BrowserRouter >
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking/>} />
          
          <Route path="social" element={<SocialPage />} />
          <Route path="special" element={<SpecialPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
