import React from 'react'
import '../EnjoyablePlace/EnjoyablePlace.css'

const EnjoyablePlace = () => {
  return (
    <>
    
    <div className='enjoyable-place__container'>       <img src='./images/patterns/pattern-curve-top-right.svg' alt='pattern curve bottom right' className='pattern-bg'/>
    
    <div className='enjoyable-place__content'>
   
        <div className="ep-content__left">
        
        <picture>
          <source media="(min-width: 800px)" 
          srcSet="./images/homepage/enjoyable-place-desktop.jpg" />
          <source media="(min-width: 540px)" 
          srcSet="./images/homepage/enjoyable-place-tablet.jpg" />      
          <img src='./images/homepage/enjoyable-place-mobile.jpg' alt="enjoyable place-mobile" className="ep__img"/>
        </picture>

        </div>
        
        <div className='ep-content__right'>
            <img src='./images/patterns/pattern-divide.svg' alt='pattern lines' className='pattern-line__img'/>
            <h2>Enjoyable place <br />
            for all  the family</h2>
            <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour <br /> of the farm before your meal.</p>
        </div>
    </div>
   </div>
    
    </>
  )
}

export default EnjoyablePlace