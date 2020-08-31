import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Nav from '../components/nav/nav';
import Footer from '../components/footer';
import Section from '../components/section';
import SEO from '../components/seo';

const PrivacyPolicy = () => {
    const data = useStaticQuery(graphql`
	query {
        allContentfulPrivacyPolicy {
            edges {
              node {
                body {
                  json
                }
              }
            }
        }
      }
      
      `)

      const body = data.allContentfulPrivacyPolicy.edges[0].node.body.json;
      
    return (
       <main className="privacypolicy">
        <SEO />
        <Nav />
        <header> <h1>Privacy Policy</h1> </header>
        <Section className="privacypolicy__content">
        {documentToReactComponents(body)}
        </Section>
        <Footer />
       </main>
    )
}

export default PrivacyPolicy
