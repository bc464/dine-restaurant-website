import React from 'react'
import { Link } from 'react-router-dom'
import Family from '../Family/Family'

const Social = () => {
  return (
    <div className='main-container'>
    <img src='./images/patterns/pattern-curve-top-right.svg' alt='pattern curve bottom right' className='pattern-bg'/>
    <img src='./images/patterns/pattern-lines.svg' alt='pattern-lines' className='container-pattern__lines' />
    <div className='main-container__content'>

        <div className='mc-content__left'>
           
            <picture>
                <source media="(min-width: 800px)" 
                srcSet="./images/homepage/social-events-desktop.jpg" />
                <source media="(min-width: 549px)" 
                srcSet="./images/homepage/social-events-tablet.jpg" />      
                <img src='./images/homepage/social-events-mobile.jpg' alt="social-events-mobile" className="gathering-img"/>
            </picture>
        </div>

        <div className="mc-content__right">
            <h2>Social Events</h2>
            <p>Are you looking to have a larger social events? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.</p>
            <Link to="/booking" className="link-page btn btn-light btn-book">Book a Table</Link>

            

            <Link to="/" className="link-page next-page  ">FAMILY GATHERING</Link>
            <Link to="/special" className="link-page next-page ">SPECIAL EVENTS</Link>
            <Link to="/social" className="link-page next-page ">SOCIAL EVENTS</Link>


        </div>
    </div>
</div>
)
}
export default Social