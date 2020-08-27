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


const Howitworks = () => {
    return (
        <Section className="howitworks">
            <Row>
                    <Col>
                        <img src={howitworks} alt="Gadget" />
                    </Col>
                    <Col>
                        <h2>How it works</h2>
                        <HowItWorksItem image={one} title="Choose a device" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." />
                        <HowItWorksItem image={two} title="Make an Offer" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." />
                        <HowItWorksItem image={three} title="Make Payment" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." />
                    </Col>
                </Row>
        </Section>
    )
}

export default Howitworks
