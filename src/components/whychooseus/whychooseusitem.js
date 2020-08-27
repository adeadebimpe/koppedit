import React from 'react'
import ColumnFour from '../flex/col-4'

const WhyChooseUsItem = ({ image, title, text, alt }) => {
  return (
    <ColumnFour>
      <div className="whychooseus__item">
        <img src={image} alt={alt} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </ColumnFour>
  )
}

export default WhyChooseUsItem
