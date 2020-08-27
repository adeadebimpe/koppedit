import React, { useState } from 'react';
import Section from '../section';

import FaqItem from './faqitem'

const FAQ = () => {
    const [faqs, setfaqs] = useState([
        {
            "question": "What is your name?",
            "answer": "Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.",
            "open": false
        },
        {
            "question": "What is your name?",
            "answer": "Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.",
            "open": false
        },
        {
            "question": "What is your name?",
            "answer": "Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets.",
            "open": false
        }
    ])

    const toggleFaq = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <Section className="faq">
            <div className="faq__content">
                <h2>Frequently Asked Questions</h2>

                {faqs.map((faq, index) => {
                    return <FaqItem faq={faq} key={index} toggleFaq={() => toggleFaq(index)} />
                })}
            </div>
        </Section>
    )
}

export default FAQ
