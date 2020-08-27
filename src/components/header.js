import React from 'react'
import ReactMarkdown from 'react-markdown';
import { useStaticQuery, graphql } from 'gatsby';
import Row from './flex/row'
import Col from './flex/col'


//image 
import headerImage from '../images/GADGET.png';
import arrow from '../images/scrollarrow.svg';



const Header = () => {
	const data = useStaticQuery(graphql`
	query {
		allContentfulHeader {
		  edges {
			node {
			  subHeading
			  url
			}
		  }
		}
	  }
	  `)

	console.log(data.edges[0].node);
	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<Row>
						<Col>
							<h1>
								Buy and sell your <span>premium used gadgets</span> at the best prices
                   			</h1>
							<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
							{/* <div className="download">
								<img src={googlebadge} alt="Google Playstore" />
								<img src={applebadge} alt="Apple Playstore" />
							</div> */}
							<div className="download">
								<button className="btn btn-primary">Become a beta tester</button>
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
