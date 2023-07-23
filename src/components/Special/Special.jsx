import React from 'react'
import { Link } from 'react-router-dom'

const Special = () => {
  return (
    <div className='main-container'>
        <img src='./images/patterns/pattern-curve-top-right.svg' alt='pattern curve bottom right' className='pattern-bg'/>
        <img src='./images/patterns/pattern-lines.svg' alt='pattern-lines' className='container-pattern__lines' />
        <div className='main-container__content'>

            <div className='mc-content__left'>
               
                <picture>
                    <source media="(min-width: 800px)" 
                    srcSet="./images/homepage/special-events-desktop.jpg" />
                    <source media="(min-width: 549px)" 
                    srcSet="./images/homepage/special-events-tablet.jpg" />      
                    <img src='./images/homepage/special-events-mobile.jpg' alt="special-events-mobile" className="gathering-img"/>
                </picture>
            </div>

            <div className="mc-content__right">
                <h2>Special Events</h2>
                <p>Whether it's a romantic or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.</p>
                <Link to="/booking" className="link-page btn btn-light btn-book">Book a Table</Link>

                

                <Link to="/" className="link-page next-page  ">FAMILY GATHERING</Link>
                <Link to="/special" className="link-page next-page ">SPECIAL EVENTS</Link>
                <Link to="/social" className="link-page next-page ">SOCIAL EVENTS</Link>


            </div>
        </div>
    </div>
  )
}

export default Special