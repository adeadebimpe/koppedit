import React from 'react'
import Row from '../flex/row';
import Col from '../flex/col';
import Section from '../section';
import HowItWorksItem from './howitworksItem';

//images
import howitworks from '../../images/how-it-works.png';
import one from '../../images/one.svg';
import two from '../../images/two.svg';
import three from '../../images/three.svg';
import { useStaticQuery } from 'gatsby';


const Howitworks = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulHowItWorksItem {
          edges {
            node {
              heading
              body
            }
          }
        }
      }
      `)


    return (
        <Section className="howitworks">
            <Row>
                    <Col>
                        <img src={howitworks} alt="Gadget" />
                    </Col>
                    <Col>
                        <h2>How it works</h2>
                        <HowItWorksItem image={one} title={data.allContentfulHowItWorksItem.edges[2].node.heading} text={data.allContentfulHowItWorksItem.edges[2].node.body} />
                        <HowItWorksItem image={two} title={data.allContentfulHowItWorksItem.edges[1].node.heading} text={data.allContentfulHowItWorksItem.edges[1].node.body} />
                        <HowItWorksItem image={three} title={data.allContentfulHowItWorksItem.edges[0].node.heading} text={data.allContentfulHowItWorksItem.edges[2].node.body} />
                    </Col>
                </Row>
        </Section>
    )
}

export default Howitworks
