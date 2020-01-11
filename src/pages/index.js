import React from "react";
import { Link } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../components/layout";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	className: 'slides'
};

const IndexPage = () => (
	<Layout>
		<div>
			<div className="Hero">
				<div className="HeroGroup">
					<h1>CREATIVE APPS</h1>
					<p>
						We create hand crafted software for your business from the initial
						prototype to completion
          			</p>
					<Link to="/page-2/">Learn More</Link>
				</div>
			</div>
			<section>
				<div className="services">
					<h1>Software development for web and mobile</h1>
					<p>
						At <strong>CREATIVE APPS</strong> we focus on collaboration and understanding your project needs to create <strong>custom software</strong>,
						apps and websites that add <strong>real value</strong> to your business.
          			</p>
				</div>
				<div className="cards">
					<div className="card">
						<div className="cardIcon" style={{ color: "#66CD93" }}>
							W
            			</div>
						<h3>Web Development</h3>
						<p>
							Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus
							vitae. Sed lectus vestibulum mattis ullamcorper velit sed
							ullamcorper morbi.
            			</p>
					</div>
					<div className="card">
						<div className="cardIcon" style={{ color: "#8F4EC9" }}>
							M
            			</div>
						<h3>Mobile Development</h3>
						<p>
							Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus
							vitae. Sed lectus vestibulum mattis ullamcorper velit sed
							ullamcorper morbi.
            			</p>
					</div>
					<div className="card">
						<div className="cardIcon" style={{ color: "#F5A623" }}>
							D
            			</div>
						<h3>Design</h3>
						<p>
							Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus
							vitae. Sed lectus vestibulum mattis ullamcorper velit sed
							ullamcorper morbi.
            			</p>
					</div>
					<div className="card">
						<div className="cardIcon" style={{ color: "#4A90E2" }}>
							I
            			</div>
						<h3>Integration</h3>
						<p>
							Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus
							vitae. Sed lectus vestibulum mattis ullamcorper velit sed
							ullamcorper morbi.
            			</p>
					</div>
					<div className="card">
						<div className="cardIcon" style={{ color: "#E24A4A" }}>
							M
            			</div>
						<h3>Migration</h3>
						<p>
							Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus
							vitae. Sed lectus vestibulum mattis ullamcorper velit sed
							ullamcorper morbi.
            			</p>
					</div>
					<div className="card">
						<div className="cardIcon" style={{ color: "#66CD93" }}>
							C
            			</div>
						<h3>Consultancy</h3>
						<p>
							Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus
							vitae. Sed lectus vestibulum mattis ullamcorper velit sed
							ullamcorper morbi.
            			</p>
					</div>
				</div>
			</section>
			<section>
				<h2 style={{ textAlign: 'center' }}>What they say about us</h2>
				<Slider {...settings}>
					<div>
						<div className="sliderContainer">
							<p>
								"The guys did a great job in migrating our platform to the new version of Redhat Openshift. 
								They were always available for support and always handled our issues in a timely manner."
              				</p>
							  <img
									src="/images/jacopo-romani.png"
									width="50"
									style={{ marginRight: 15, marginBottom: 10, border: '3px solid gray', borderRadius: '50%' }}
							/>
							<div className="reviewerContainer">
								<img
									src="/images/italy.svg"
									width="30"
									style={{ marginRight: 10 }}
								/>
								<span><strong>Jacopo Romani</strong></span>
							</div>
							<div>
								<span>Needius</span>
							</div>
						</div>
					</div>
				</Slider>

				{/* <Slider dots centerMode centerPadding="0" arrows={false}>
					<div>
						<div className="sliderContainer">
							<p>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lacinia quis vel eros donec ac odio tempor orci."
              				</p>
							<div className="reviewerContainer">
								<img
									src="/images/italy.svg"
									width="30"
									style={{ marginRight: 15 }}
								/>
								<span><strong>Pippo Franco</strong></span>
							</div>
						</div>
					</div>
					<div>
						<div className="sliderContainer">
							<p>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua."
              				</p>
							<div className="reviewerContainer">
								<img
									src="/images/germany.svg"
									width="30"
									style={{ marginRight: 15 }}
								/>
								<span><strong>Jurgen Strunz</strong></span>
							</div>
						</div>
					</div>
					<div>
						<div className="sliderContainer">
							<p>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua."
              				</p>
							<div className="reviewerContainer">
								<img
									src="/images/sweden.svg"
									width="30"
									style={{ marginRight: 15 }}
								/>
								<span><strong>Andre Myhrer</strong></span>
							</div>
						</div>
					</div>
				</Slider> */}
			</section>
		</div>
	</Layout>
)

export default IndexPage
