import React from 'react'
import publicBathroom from '../assets/bathroom.png'
import '../styles/About.css';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className='About'>

        <div 
            className='aboutTop' 
            style={{ backgroundImage: `url(${publicBathroom})` }}>
        </div>

        <div className='aboutBottom'>
            <h1> About the App </h1>
            <p>
                UCI Lavatory Locator is a mobile application that helps users locate bathrooms at UC Irvine. 
                With such a large campus that may be confusing and complicated to navigate, people need a way 
                to quickly find a place to use the restroom. While there are many, they may not be obvious, especially
                if in a hurry. Especially during the pandemic times of COVID-19, it was essential to find places to wash hands
                and sanitize hands. Staying clean and sanitized is critical in keeping good health and hygiene, and this app 
                will help you do just that. There is no need to stress in finding a bathroom and searching forever when you can 
                open UCI Lavatory Locator and find one instantly.
      
            </p>
        </div>
    
    </div>
  )
}

export default About
