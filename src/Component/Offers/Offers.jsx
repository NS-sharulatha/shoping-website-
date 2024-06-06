
import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>LIMITED-TIME</h1>
            <h1>OFFERS TAILORED FOR YOU</h1>
            <p>Reserved for Our Most Popular Products</p>
            <button>CHECK NOW</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="Exclusive Offer" height="100%" />
        </div>
    </div>
  );
}

export default Offers;
