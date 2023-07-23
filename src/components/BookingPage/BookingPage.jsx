import React, { useEffect, useState } from 'react'
import '../BookingPage/BookingPage.css'
import { Link } from 'react-router-dom';



const BookingPage = () => {
  const [count, setCount] =useState(0);
  const [inputFields, setInputFields] = useState({
    user: "",
    email: "",
    month: "",
    day: "",
    year: "",
    hour: "",
    minutes: ""
    
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const valiadateValues = (inputValues) => {
    let errors = {}

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
    if(!inputValues.user) {
      errors.user = "This field is required"
    }
    if(!isValidEmail(inputValues.email)) {
      errors.email = "Please recheck your email address"
    }
    if(!inputValues.month ) {
      errors.month = "The field is incomplete"
    
    }
    if( !inputFields.day ) {
      errors.day = "The field is incomplete"
    
    }
    if( !inputFields.year ) {
      errors.year = "The field is incomplete"
    
    }
    if(!inputValues.hour ) {
      errors.hour = "The field is incomplete"
    
    }
    if( !inputFields.minutes) {
      errors.minutes = "The field is incomplete"
    
    }
    return errors;
    
  }

  const handleChange = (e) => {
    setInputFields({...inputFields, [e.target.name]: e.target.value})
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(valiadateValues(inputFields));
    setSubmitting(true)
  }
  const finishSubmit = (e) => {
    
    inputFields.user = ""
    inputFields.email = ""
    inputFields.month = ""
    inputFields.day = ""
    inputFields.year = ""
    inputFields.hour = ""
    inputFields.minutes = ""
    
  }
  useEffect(() => {
    if(Object.keys(errors).length === 0 && submitting) {
      finishSubmit()
    }
  }, [errors])



  function handleCountDown() {
    if (count >0) setCount(c=>c-1)
  }
  function handleCountUp() {
    setCount(c=>c+1)
  }
  return (
    <>
      <div className='booking-container'>
      <picture>
              <source media="(min-width: 800px)" 
              srcSet="./images/booking/hero-bg-desktop.jpg" />
              <source media="(min-width: 749px)" 
              srcSet="./images/booking/hero-bg-tablet.jpg" />      
              <img src='./images/booking/hero-bg-mobile.jpg' alt="booking-hero-mobile" className="booking-bg__img"/>
            </picture>
        <div className="booking-container__left">
          <Link to="/" ><img src="./images/logo.svg" alt="logo-top" /></Link>
            <h1>Reservations</h1>
            <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
        </div>        
        
        <div className="booking-container__right">
          <form  onSubmit={handleSubmit}>
            <input  type="text" placeholder='Name' name='user' value={inputFields.user} onChange={handleChange}/>
            
            <hr />
            {errors.user ? (
              <p className='errorsMsg'>This field is required</p>
            ): null}
            <input  type="email" name="email"  placeholder='Email' value={inputFields.email} onChange={handleChange}/>
            
            
            <hr />
            {errors.email ? (
              <p className='errorsMsg'>Please check your email address</p> ) : null }
            <div className='pickDate-container'>
              <div className='pickDate-container__description'>
              <p>Pick a date</p>
              {errors.hour || errors.day || errors.year ? (
              <p className='errorsMsg'>This field is incomplete</p>
            ): null}
            </div>
              <div className='pickDate-content'>
                <div className='pickDate-content__box'>
                  <input type='number' name="month" placeholder='MM' min={0} max={12} value={inputFields.month} onChange={handleChange}/>
                  <hr/>
                </div>
                <div className='pickDate-content__box'>
                  <input type='number' name="day" placeholder='DD' min={0} max={31}
                  value={inputFields.day} onChange={handleChange}/>
                  <hr />
                </div>
                <div className='pickDate-content__box'>
                  <input type='number' name="year" placeholder='YYYY' min={2023} value={inputFields.year} onChange={handleChange}/>
                  <hr />
                </div>
              </div>
            </div>
            <div className='pickTime-container'>
              <div className='pickTime-container__description'>
              <p>Pick a time</p>
            {errors.hour || errors.minutes ? (
              <p className='errorsMsg'>This field is incomplete</p>
            ): null}
              </div>
           
            <div className='pickTime-content'>
              <div className='pickTime-content__box'>
                  <input type='number' name="hour" placeholder='09' min={0} max={23} value={inputFields.hour} onChange={handleChange} />
                 <hr />
                </div>
                <div className='pickTime-content__box'>
                  <input type='number' name="minutes" placeholder='00' min={0} max={23} value={inputFields.minutes} onChange={handleChange}/>
                  <hr />
                </div>
                <div className='pickTime-content__box pickTime-content__select'>
                  <select>
                    <option >AM</option>
                    <option>PM</option>  
                  </select>
                  <hr />
                </div>
            </div>
            </div>
            <div  className='peopleTotal-container'>
              <img src='./images/icons/icon-minus.svg' alt='minus icon' onClick={handleCountDown} />
              <span>{count} people</span>
              <img src='./images/icons/icon-plus.svg' alt='plus icon' onClick={handleCountUp}/>
            </div>
            <hr />
            <div className='form-button'>
            <button type='submit' className='btn form-button btn-dark' >Make Reservation</button>
            </div>
            
          </form>
        </div>
             
        </div>
        <div className='booking-empty__box'>
          <img src='./images/patterns/pattern-curve-bottom-right.svg' alt="pattern curve bottom right" className='pattern-curved__bottom'/>
          <img src='./images/patterns/pattern-lines.svg' alt='pattern-lines' className='booking-lines' />

        </div>

    </>
    
  )
}

export default BookingPage