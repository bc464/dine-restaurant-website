import React from 'react'
import '../LocallyPlace/LocallyPlace.css'

const LocallyPlace = () => {
  return (
    <div className='local-place__container'>
        
        <div className="lp-content">
            <div className="lp-content__left">
                <img src="./images/patterns/pattern-divide.svg" alt="pattern-line__img" className='pattern-line__img'/>
                <h2>The most locally sourced food</h2>
                <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
            </div>
            <div className="lp-content__right">  
            <picture>
               <source media="(min-width: 800px)" 
          srcSet="./images/homepage/locally-sourced-desktop.jpg" />
              <source media="(min-width: 540px)" 
          srcSet="./images/homepage/locally-sourced-tablet.jpg" />      
              <img src='./images/homepage/locally-sourced-mobile.jpg' alt="enjoyable place-mobile" className="localSource__img"/>
            </picture>
            <img src='./images/patterns/pattern-lines.svg' alt='pattern-lines' className='pattern-lines' />
          </div>
        </div>
         
         <img src='./images/patterns/pattern-curve-top-left.svg' alt='pattern curve bottom left' className='curve-left__img'/>       
        
    </div>
  )
}

export default LocallyPlace