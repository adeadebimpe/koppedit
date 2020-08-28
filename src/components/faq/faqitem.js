import React from 'react'

const FaqItem = ({ faq, toggleFaq }) => {
  return (
    <div className={"faq__item " + (faq.open ? "open" : "")} onClick={toggleFaq} >
    
    <h6 className="faq__question">{faq.node.question}</h6>
    <p className="faq__answer">{faq.node.answer.answer}</p>

    </div>
  )
}

export default FaqItem
