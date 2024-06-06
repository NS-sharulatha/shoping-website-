import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Be the First to Know About Exclusive Offers</h1>
      <p>Get the Latest News: Subscribe to Our Email Updates!</p>
      <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
      
    </div>
  )
}

export default NewsLetter
