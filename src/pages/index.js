import React, { useRef } from "react";
import { Helmet } from 'react-helmet';
import Slider from "react-slick";
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout";
import homeStyles from "./home.module.css";
import headerStyles from '../components/header.module.css';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	className: "slides",
}



const IndexPage = (props) => {
	const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 100)
	const myRef = useRef(null);
	return (
		<Layout>
			<Helmet bodyAttributes={{ class: headerStyles.home }} />
			<div>
				<div className={homeStyles.hero}>
					<div className={homeStyles.heroGroup}>
						<h1>CREATIVE APPS</h1>
						<p>
							We create hand crafted software for your business from the initial
							prototype to completion
            			</p>
						<button className="button" onClick={() => scrollToRef(myRef)}>Learn More</button>
					</div>
				</div>
				<section>
					<div className={homeStyles.services}>
						<h1>Software development for web and mobile</h1>
						<p>
							At <strong>CREATIVE APPS</strong> we bring ideas to life. We are
							focused on collaboration and understanding your project's needs.
              				We create <strong>custom software</strong>, apps and websites that
              				add <strong>real value </strong> to your business. We can also do{" "}
							<strong>remote work</strong> and <strong>IT consultancy</strong>{" "}
							for agencies and startups for the creation of{" "}
							<strong>digital products.</strong>
						</p>
					</div>
					<div ref={myRef} className={homeStyles.cards}>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#66CD93" }}>
								W
              			</div>
							<h3>Web Development</h3>
							<p>
								Whether you have an idea of how your website should look, or
								detailed specifications, we use our technical expertise to help
								you bring it to life.
              				</p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#8F4EC9" }}>
								M
              				</div>
							<h3>Mobile Development</h3>
							<p>
								We build awesome custom mobile application for IOS and Android
								using native technologies. We also develop backend sytems and
								API's for mobile apps.
              				</p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#F5A623" }}>
								D
              				</div>
							<h3>Design</h3>
							<p>
								We craft clean and elegant UI's with great user experience. We
								value simple content structures, clean design patterns and
								thoughtful interactions.
             				 </p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#4A90E2" }}>
								I
              				</div>
							<h3>Integration</h3>
							<p>
								We can deal with software integrations to build scalable and
								solid architectures to guarantee long-lasting competitive
								advantages.
              				</p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#E24A4A" }}>
								M
              				</div>
							<h3>Migration</h3>
							<p>
								We can deal with legacy systems and migrate them to new
								platforms. We will make sure to safely backup your data to
								assure a smooth and easy migration.
              				</p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#66CD93" }}>
								C
              				</div>
							<h3>Consultancy</h3>
							<p>
								We provide general IT consultancy to agencies and startups that
								need to create digital products for their businesses from the
								initial prototype to completion.
              				</p>
						</div>
					</div>
				</section>
				<section>
					<h2 style={{ textAlign: "center" }}>What they say about us</h2>
					<Slider {...settings}>
						<div>
							<div className={homeStyles.sliderContainer}>
								<p>
									"The guys did a great job in migrating our platform to the new
									version of Redhat Openshift. They were always available for
									support and always handled our issues in a timely manner."
                				</p>
								<Img className={homeStyles.sliderAvatar} fixed={props.data.file.childImageSharp.fixed} />	
								<div className={homeStyles.reviewerContainer}>
									<img
										src="/images/italy.svg"
										className={homeStyles.sliderCountryFlag}
									/>
									<span>
										<strong>Jacopo Romani</strong>
									</span>
								</div>
								<div>
									<span>Needius</span>
								</div>
							</div>
						</div>
					</Slider>
				</section>
			</div>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "jacopo-romani.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`