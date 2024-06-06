import React from 'react'
import './Hero.css'
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Step into Style With Zara</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>TRENDING</p>
                </div>
                <p>COLLECTIONS</p>
                <p>EVERY WEEK</p>
            </div>
            <div className="hero-latest-btn">
                <div>New Arrivals</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}

export default Hero



