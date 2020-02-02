import React, { useRef } from "react"
import { Helmet } from "react-helmet"
import Slider from "react-slick"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Language from "../components/language"
import SEO from "../components/seo"
import { FormattedMessage } from "gatsby-plugin-intl"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Layout from "../components/layout"
import homeStyles from "./home.module.css"
import headerStyles from "../components/header.module.css"

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	className: "slides",
}

const IndexPage = props => {
	const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100)
	const myRef = useRef(null)
	return (
		<Layout>
			<div className={homeStyles.homeContainer}>
				<SEO title="Homepage" />
				<Helmet bodyAttributes={{ class: headerStyles.home }} />
				<BackgroundImage
					Tag="div"
					className={homeStyles.hero}
					fluid={props.data.wallpaper.childImageSharp.fluid}
				>
					<div className={homeStyles.heroGroup}>
						<h1>CREATIVE APPS</h1>
						<p>
							<FormattedMessage id="home.headline" />
						</p>
						<button onClick={() => scrollToRef(myRef)} className="button">
							<FormattedMessage id="home.learn" />
						</button>
					</div>
					<div className={homeStyles.languageContainer}>
						<Language />
					</div>
				</BackgroundImage>
				<section>
					<div className={homeStyles.services}>
						<h1>
							<FormattedMessage id="home.description.title" />
						</h1>
						<div>
							<FormattedMessage
								id="home.description.paragraph"
								defaultMessage="A <company>CREATIVE APPS</company> diamo vita alle tue idee. Il nostro obiettivo principale è quello di capire le <needs>esigenze</needs> del cliente attraverso una collaborazione una diretta. Sviluppiamo <custom>software personalizzato</custom>, applicazioni e siti web che aggiungono vero <value>valore</value> al business dei nostri clienti. Forniamo anche attività di <consultancy>consulenza</consultancy> da remoto per agenzie e startup per la creazione dei loro <product>prodotti digitali.</product>"
								values={{
									company: msg => <strong>{msg}</strong>,
									needs: msg => <strong>{msg}</strong>,
									custom: msg => <strong>{msg}</strong>,
									value: msg => <strong>{msg}</strong>,
									consultancy: msg => <strong>{msg}</strong>,
									product: msg => <strong>{msg}</strong>,
								}}
							/>
						</div>
					</div>
				</section>
				<section>
					<div ref={myRef} className={homeStyles.cards}>
				
						<div className={homeStyles.card}>
						<div className={homeStyles.cardIcon} style={{ color: "#66CD93" }}>
								W
            				</div>
							<h3>
								<FormattedMessage id="home.web.title" />
							</h3>
							<p>
								<FormattedMessage id="home.web.paragraph" />
							</p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#8F4EC9" }}>
								M
            			</div>
							<h3>
								<FormattedMessage id="home.mobile.title" />
							</h3>
							<p>
								<FormattedMessage id="home.mobile.paragraph" />
							</p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#F5A623" }}>
								D
            			</div>
							<h3>
								<FormattedMessage id="home.design.title" />
							</h3>
							<p>
								<FormattedMessage id="home.design.paragraph" />
							</p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#4A90E2" }}>
								I
            			</div>
							<h3>
								<FormattedMessage id="home.integration.title" />
							</h3>
							<p>
								<FormattedMessage id="home.integration.paragraph" />
							</p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#E24A4A" }}>
								M
            			</div>
							<h3>
								<FormattedMessage id="home.migration.title" />
							</h3>
							<p>
								<FormattedMessage id="home.migration.paragraph" />
							</p>
						</div>
						<div className={homeStyles.card}>
							<div className={homeStyles.cardIcon} style={{ color: "#66CD93" }}>
								C
            			</div>
							<h3>
								<FormattedMessage id="home.consultancy.title" />
							</h3>
							<p>
								<FormattedMessage id="home.consultancy.paragraph" />
							</p>
						</div>
					</div>
				</section>
				<section>
					<h2 style={{ textAlign: "center", margin: 0 }}>
						<FormattedMessage id="home.whattheysay.title" />
					</h2>
					<Slider {...settings}>
						<div>
							<div className={homeStyles.sliderContainer}>
								<p>
									<FormattedMessage id="home.whattheysay.paragraph" />
								</p>
								<Img
									className={homeStyles.sliderAvatar}
									fixed={props.data.jacopo.childImageSharp.fixed}
								/>
								<div className={homeStyles.reviewerContainer}>
									<img
										alt="italy"
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
    jacopo: file(relativePath: { eq: "jacopo-romani.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    wallpaper: file(relativePath: { eq: "wallpaper2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
