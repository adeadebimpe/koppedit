import React from 'react'

import applelogo from '../../images/apple.svg';

const AppleButton = () => {
  return (
    <button className="download__button">
      <img src={applelogo} alt="Apple Store"/>
      <div className="button__text">
        <span>Get it done</span>
        <p>App Store</p>
      </div>
    </button>
  )
}

export default AppleButton
