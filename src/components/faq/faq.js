import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../section';

import FaqItem from './faqitem'


const FAQ = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulFaqItem {
            edges {
                node {
                id
                answer {
                    answer
                }
                question
                }
            }
            }
        }
      
    `);

    const [faqs, setfaqs] = useState(data.allContentfulFaqItem.edges);

    var result = faqs.map(function(el) {
        var o = Object.assign({}, el);
        o.open = false;
        return o;
     })

     console.log(result);

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
