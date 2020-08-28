import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../section';
import WhyChooseUsItem from '../whychooseus/whychooseusitem';
import Row from '../flex/row';

//images
import easytouse from '../../images/easytouse.svg';
import secured from '../../images/secured.svg';
import buyandsell from '../../images/buyandsell.svg';


const WhyChooseUs = () => {
    const data = useStaticQuery(graphql`
	query {
        allContentfulWhyChooseUsItem {
          edges {
            node {
              body
              heading
            }
          }
        }
      }
      `)

    const userData = data.allContentfulWhyChooseUsItem.edges;

    return (
        <Section className="whychooseus">
            <h2>Why Choose Us</h2>
            <Row>
                <WhyChooseUsItem image={easytouse} title={userData[0].node.heading} text={userData[0].node.body} />
                <WhyChooseUsItem image={secured} title={userData[1].node.heading} text={userData[1].node.body} />
                <WhyChooseUsItem image={buyandsell} title={userData[2].node.heading} text={userData[2].node.body} />
            </Row>
        </Section>
    )
}

export default WhyChooseUs
