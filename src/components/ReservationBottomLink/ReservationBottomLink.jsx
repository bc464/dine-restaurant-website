import React from 'react'
import { Link } from 'react-router-dom'

import '../ReservationBottomLink/ReservationBottomLink.css'


const ReservationBottomLink = () => {
  return (
    <div className='reservation-bottom__container'>
        <picture>
          <source media="(min-width: 800px)" 
          srcSet="./images/homepage/ready-bg-desktop.jpg" />
          <source media="(min-width: 549px)" 
          srcSet="./images/homepage/ready-bg-tablet.jpg" />      
          <img src='./images/homepage/ready-bg-mobile.jpg' alt="ready-mobile" className="ready-bg__img"/>
        </picture>
        <div className='rb-content'>

       
        <h2>Ready to make a reservation</h2>
        <div className='reservation-btn'>
        <Link to="/booking" className="link-page btn btn-dark reservation-link">Book a Table</Link>
        </div>
        </div>
        

    </div>
  )
}

export default ReservationBottomLink