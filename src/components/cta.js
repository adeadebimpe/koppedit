import React from 'react';
import Section from './section';

import googlebadge from '../images/googlebadge-white.svg';
import applebadge from '../images/applestore-white.svg'

const CTA = () => {
    return (
        <Section className="cta">
            <div className="cta__content">
                <h2>Start Buying and selling now</h2>
                <p>Take your business everywhere with you an never miss a business opportunity with the Kopped mobile app. Manage order, communicate with customers, upload products to your online store and social media directly from the mobile app.</p>
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
