import React from "react";
import { Link } from 'react-router-dom';

import BannerImage from '../assets/campus.jpg';

import "../styles/Home.css"


function Home() {
  return (
    <div 
        className="home" 
        style={{ 
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover', }}>

        <div className="headerContainer" >

            {/* <h1> UCI Lavatory Locator </h1> 

            <p> UC Irvine's Best Bathroom Finder</p>

            <Link to="/App">
                <button>Lavatory Locator App</button>
            </Link> */}

            <div className="text-container">
                <h1>UCI Lavatory Locator</h1>
                <p>UC Irvine's Best Bathroom Finder</p>
            </div>
            {/* <div>
                <h1>UCI Lavatory Locator</h1>
                <p>UC Irvine's Best Bathroom Finder</p>
            </div> */}

            
            <div>
                  <Link to="/Application">
                    <button>Lavatory Locator App</button>
                  </Link>
            </div>

          </div>

    </div>
  );
}

export default Home;
