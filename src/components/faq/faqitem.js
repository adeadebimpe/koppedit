import React from 'react'
import ReactMarkdown from 'react-markdown';

const FaqItem = ({ faq, toggleFaq }) => {
  return (
    <div className={"faq__item " + (faq.open ? "open" : "")} onClick={toggleFaq} >
    
    <h6 className="faq__question" >{faq.node.question}</h6>
    <div className="faq__answer">
    <ReactMarkdown source={faq.node.answer.answer} escapeHtml={false} />
    </div>

    </div>
  )
}

export default FaqItem
