import React from 'react'
import ReactMarkdown from 'react-markdown';
import { useStaticQuery, graphql } from 'gatsby';
import Row from './flex/row'
import Col from './flex/col'


//image 
import headerImage from '../images/GADGET.png';
import arrow from '../images/scrollarrow.svg';

import logo from '../images/logo.svg';

const Header = () => {
	const data = useStaticQuery(graphql`
	query {
		allContentfulHeader {
		  edges {
			node {
				heading {
					heading
				  }
			  subHeading
			  url
			}
		  }
		}
	  }
	  `)

	const { heading, subHeading, url } = data.allContentfulHeader.edges[0].node;

	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<Row>
						<Col>
							<ReactMarkdown source={heading.heading} escapeHtml={false} />
							<div className="download">
								<a href={url}><button className="btn btn-primary">Become a beta tester</button></a>
							</div>
						</Col>
						<Col>
							<img src={headerImage} className="header-image" alt="Laptops, Phones and other Gadgets" />
						</Col>
					</Row>
				</div>
				<div className="arrow" >
					<a href="#howitworks"><img src={arrow} alt="Scroll arrow" /></a>
				</div>
			</div>
		</header>
	)
}

export default Header
