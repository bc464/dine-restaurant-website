import React from 'react'
import { Link } from 'react-router-dom'

const Family = () => {
  return (
    <div className='main-container'>
        <img src='./images/patterns/pattern-curve-top-right.svg' alt='pattern curve bottom right' className='pattern-bg'/>
        <img src='./images/patterns/pattern-lines.svg' alt='pattern-lines' className='container-pattern__lines' />
        <div className='main-container__content'>

            <div className='mc-content__left'>
               
                <picture>
                    <source media="(min-width: 800px)" 
                    srcSet="./images/homepage/family-gathering-desktop.jpg" />
                    <source media="(min-width: 549px)" 
                    srcSet="./images/homepage/family-gathering-tablet.jpg" />      
                    <img src='./images/homepage/family-gathering-mobile.jpg' alt="family-gathering-mobile" className="gathering-img"/>
                </picture>
            </div>

            <div className="mc-content__right">
                
            <h2>Family Gathering</h2>
                <p>We lov e catering for the entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a menorable ecperience for all.</p>
                <Link to="/booking" className="link-page btn btn-light btn-book">Book a Table</Link>

                

                <Link  to="/" className="link-page next-page  ">FAMILY GATHERING</Link>
                <Link to="/special" className="link-page next-page ">SPECIAL EVENTS</Link>
                <Link to="/social" className="link-page next-page ">SOCIAL EVENTS</Link>


            </div>
        </div>
    </div>
  )
}

export default Family