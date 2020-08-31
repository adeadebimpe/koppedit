import React from 'react';
import { Link } from 'gatsby';
import Row from './flex/row';
import ColumnFour from './flex/col-4';

import logowhite from '../images/logo-white.svg';


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Row>
                    <ColumnFour>
                        <img src={logowhite} alt="Logo White" />
                        <p className="emailaddress">Contact us: <a href="mailto:support@koppedit.com">support@koppedit.com</a></p>
                    </ColumnFour>
                    <ColumnFour>
                        <h6>Coming soon</h6>

                        <ul>
                            <li>
                                <Link to="/">iOS App</Link>
                            </li>
                            <li>
                                <Link to="/">Android App</Link>
                            </li>
                        </ul>
                    </ColumnFour>
                    <ColumnFour>
                        <h6>Resources</h6>
                        <ul>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="#faq">FAQs</Link></li>
                            <li><Link to="/">Privacy</Link></li>
                        </ul>
                    </ColumnFour>
                </Row>
            </div>
        </footer>
    )
}

export default Footer
