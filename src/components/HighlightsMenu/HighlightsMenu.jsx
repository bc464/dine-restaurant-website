import React from 'react'
import '../HighlightsMenu/HighlightsMenu.css'

const HighlightsMenu = () => {
  return (
    <div className='highlightsMenu-container'>
        <div className='highlightsMenu-content'>
            <div className='hm-content__left'>
                <img src='./images/patterns/pattern-divide.svg' alt='pattern lines' className='pattern-line__img'/>
                <h2>A few highlights from our menu</h2>
                <p>We cater for all dietary requirements, but here's a glimpse at some of our diner's favorites. Our menu is revamped every season</p>
            </div>
            <div className='hm-content__right'>
                <div className='content-box'>
                    <div className='content-box__left'>
                        <picture>
                            <source media="(min-width: 749px)" 
                            srcSet="./images/homepage/salmon-desktop-tablet.jpg" />      
                            <img src='./images/homepage/salmon-mobile.jpg' alt="salmon-mobile" className="menu-highlights__img"/>
                        </picture>
                        <div className='menu-line'></div>
                    </div>

                    <div className="content-box__right">
                        <h3>Seared Salmon Fillet</h3>
                        <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                    </div>
                </div>
                <hr className='contentbox__line' />
            
                <div className='content-box'>
                    <div className='content-box__left'>
                        <picture>
                            <source media="(min-width: 749px)" 
                            srcSet="./images/homepage/beef-desktop-tablet.jpg" />      
                            <img src='./images/homepage/beef-mobile.jpg' alt="beef-mobile" className="menu-highlights__img"/>
                        </picture>
                        <div className='menu-line'></div>
                    </div>

                    <div className="content-box__right">
                        <h3>Rosemary Filet Mignon</h3>
                        <p>Our prime beef served to your taste with a delicious choice of seasoned sides.</p>
                    </div>
                </div>
                <hr className='contentbox__line' />
            
                <div className='content-box'>
                    <div className='content-box__left'>
                        <picture>
                            <source media="(min-width: 749px)" 
                            srcSet="./images/homepage/chocolate-desktop-tablet.jpg" />      
                            <img src='./images/homepage/chocolate-mobile.jpg' alt="chocolate-mobile" className="menu-highlights__img"/>
                        </picture>
                        <div className='menu-line'></div>
                    </div>

                    <div className="content-box__right">
                        <h3>Summer Fruit Chocolate Mouse</h3>
                        <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default HighlightsMenu