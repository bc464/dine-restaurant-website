import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-box'>
            <div className='footer-logo'>
            <img src='../images/logo.svg' alt='logo image' className='footer-logo_img'/>
            </div>
            <div className='footer-content'>
                <div className='footer-content__address'>
                    <p>Marthwaite, Sedbergh</p>
                    <p>Cumbria</p>
                    <p>+00 44 123 4567</p>
                </div>
                <div className='footer-content__times'>
                    <p>Open Times</p>
                    <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
                    <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer