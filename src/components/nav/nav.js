import React from 'react';
import Helmet from 'react-helmet';

import NavItem from './navitem';

import favicon from '../../images/Favicon.svg';


//images
import logo from '../../images/logo.svg'

const Navigation = () => {
  return (
    <nav>
      <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
      <div className="container">
          <a href="#" className="nav__logo">
              <img src={logo} alt="KoppedIt Logo"/>
          </a>
          <ul className="nav">
            <NavItem name="How it works" url="#howitworks" />
            <NavItem name="Why Us" url="#whychooseus" />
            <NavItem name="FAQ" url="#faq" />
          </ul>
      </div>
    </nav>
  )
}

export default Navigation
