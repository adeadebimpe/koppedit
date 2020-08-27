import React from 'react'

import googlelogo from '../../images/playstore.svg';

const GooglePlayButton = () => {
  return (
    <button className="download__button">
      <img src={googlelogo} alt="Google Play Store"/>
      <div className="button__text">
        <span>Get it done</span>
        <p>Google Play</p>
      </div>
    </button>
  )
}

export default GooglePlayButton
