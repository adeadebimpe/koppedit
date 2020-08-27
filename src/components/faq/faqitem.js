import React from 'react'

const FaqItem = ({ faq, toggleFaq }) => {
  return (
    <div className={"faq__item " + (faq.open ? "open" : "")} onClick={toggleFaq} >
    
    <h6 className="faq__question">{faq.question}</h6>
    <p className="faq__answer">{faq.answer}</p>

    </div>
  )
}

export default FaqItem
