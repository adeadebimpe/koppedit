import React from 'react'
import Section from '../section';
import WhyChooseUsItem from '../whychooseus/whychooseusitem';
import Row from '../flex/row';

//images
import easytouse from '../../images/easytouse.svg';
import secured from '../../images/secured.svg';
import buyandsell from '../../images/buyandsell.svg';


const WhyChooseUs = () => {
    return (
        <Section className="whychooseus">
            <h2>Why Choose Us</h2>
            <Row>
                <WhyChooseUsItem image={easytouse} title="Easy to use" text="Koppedit is the simplest and least technical way to buy and sell your premium used Gadgets." />
                <WhyChooseUsItem image={secured} title="Secured" text="Koppedit provides a secured means of transaction between buyers and sellers" />
                <WhyChooseUsItem image={buyandsell} title="Buy and Sell Everywhere" text="Sales / Purchase of Gadgets isn’t restricted to any region or country." />
            </Row>
        </Section>
    )
}

export default WhyChooseUs
