import React from 'react'

const HowItWorksItem = ({image, alt, title, text}) => {
  return (
    <div className="howitworks__item">
        <img src={image} alt={alt} className="howitworks__image" />
        <div className="howitworks__text">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HowItWorksItem
