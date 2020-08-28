import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from './section';

import googlebadge from '../images/googlebadge-white.svg';
import applebadge from '../images/applestore-white.svg'

const CTA = () => {

    const data = useStaticQuery(graphql`
    query {
     allContentfulCta {
    edges {
      node {
        heading
        body
      }
    }
  }
}

  
`);

const { heading, body } = data.allContentfulCta.edges[0].node;

    return (
        <Section className="cta">
            <div className="cta__content">
                <h2>{heading}</h2>
                <p>{body}</p>
               {/*  <div className="download">
								<img src={googlebadge} alt="Google Playstore"/>
								<img src={applebadge} alt="Apple Playstore"/>
				</div> */
               /*  <div className="download">
					<button className="btn btn-bordered">Become a beta tester</button>
				</div> */}
                <form action="">
                    <div className="input__group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="input__group">
                        <label htmlFor="device">Device OS</label>
                        <select name="device" id="">
                            <option value="andriod">Andriod</option>
                            <option value="ios">IOS</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-bordered">Submit</button>
                </form>
            </div>
        </Section>
    )
}

export default CTA
