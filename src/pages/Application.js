import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/Application.css'

import bathroomSS from '../assets/bathroomSS.jpeg'
import mapSS from '../assets/mapScreenshot.jpeg'


function Application() {
    return (
        <div className="Application">
            
            <div className="titleContainer">
                <h1 className="appTitle">UC Irvine Lavatory Locator App</h1>
            </div>

            <div className="contentContainer">

                <div className="leftImageContainer">
                    <img
                        src={mapSS}
                        alt="Left Image"
                    />
                </div>


                <div className="textContainer">
                    <div className="textSection">
                        <h2>Purpose</h2>
                            <p>
                            
                            Our app was made to create a convenience in providing a free directory to finding the bathrooms
                            at the UC Irvine campus. With such a large campus, finding specific places can be extremely difficult
                            and time consuming. When needing a bathroom, time is especially of the essence, and having an app for quick access to
                            information on the location of the nearest bathrooms can be very helpful. Also, in a time following the pandemic where
                            health is so important, finding a place to wash your hands and sanitize keeps hygiene and health at a much higher
                            level overall. 
                            
                            </p>
                    </div>

                    <div className="textSection">
                        
                        <h2>How it Works</h2>
                            
                            <p>
                            When opening our application, it navigates you on a map to your current location on the UC Irvine Campus. From here, you can 
                            then view the bathrooms that are located on the campus, and you can visually see what they look like and where these spots are with a physical representation
                            of distance and how far they are from you. You may scroll in and out as well as move the map around to explore even further. The toggle option
                            also allows for a satellite view as as well.
                            
                            </p>
                    </div>

                    <div className="textSection">
                        <h2>Development</h2>
                            <p>

                            In crafting the UC Irvine Lavatory Locator, our team embarked on a two-pronged approach, developing 
                            an iOS application using Swift and this complementary website using React, JavaScript, and CSS. 
                            
                            The iOS app, built with Swift's modern syntax, incorporates dynamic UIs through SwiftUI and precise location 
                            services with Core Location and MapKit. 
                            
                            Simultaneously, our supplementary website, powered by React, employs JavaScript for interactivity and CSS for responsive design. 
                            This cohesive blend of technologies ensures a seamless user experience, enhancing accessibility and information 
                            dissemination. Continuous improvement remains at the forefront, driven by constant campus changes,
                            user feedback, technological advancements, and the evolving needs of this community.
                           
                            </p>
                    </div>
                </div>
                

                <div className="imageContainer">
                    <img
                        src={bathroomSS}
                        alt="Demo of the App"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Application
