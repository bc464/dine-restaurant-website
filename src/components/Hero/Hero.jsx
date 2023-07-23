import React from 'react'
import '../Hero/Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className="hero-container">
    <picture>
            <source media="(min-width: 800px)" 
            srcSet="./images/homepage/hero-bg-desktop.jpg" />
            <source media="(min-width: 549px)" 
            srcSet="./images/homepage/hero-bg-tablet.jpg" />      
            <img src='./images/homepage/hero-bg-mobile.jpg' alt="hero-mobile" className="hero-bg__img"/>
          </picture>
    
      <div className="hero-container__left">
        <img src="./images/logo.svg" alt="logo-top" />
        <h1>Exquisite dining since 1989</h1>
        <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
        <Link to="/booking" className="link-page btn btn-dark">Book a Table</Link>
      </div>
    </div>
    </>
  )
}
export default Hero
