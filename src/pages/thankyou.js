import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Nav from '../components/nav/nav';
import Footer from '../components/footer';
import Section from '../components/section';
import SEO from '../components/seo';

import '../style/normalize.scss';
import '../style/style.scss';

const ThankYou = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulThankYou {
          edges {
            node {
              body
              buttonName
              url
            }
          }
        }
      }
      
      `)

    const {body, buttonName, url} = data.allContentfulThankYou.edges[0].node;

    return (
        <main className="thankyou">
            <SEO />
            <Nav />
            <header> <h1>Thank You</h1> </header>
            <Section className="thankyou__content">
                <p>{body}</p>
                <a href={url}><button className="btn btn-primary">{buttonName}</button></a>
            </Section>
            <Footer />
        </main>
    )
}

export default ThankYou
