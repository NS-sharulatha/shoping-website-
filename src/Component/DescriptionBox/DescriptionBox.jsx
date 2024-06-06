import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>We work with our suppliers, workers, unions and international organisations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals. </p>
        <p>Thanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our products in order to understand their traceability.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
