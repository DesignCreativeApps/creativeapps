import React, {  useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images";
import Layout from "../components/layout"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import portfolioStyles from "./portfolio.module.css"
import headerStyles from "../components/header.module.css"

const photos = [
	{
		src: "/images/blue1.svg",
		alt: "blue1",
		width: 5,
		height: 3,
	},
	{
		src: "/images/blue2.svg",
		alt: "blue2",
		width: 5,
		height: 3,
	},
	{
		src: "/images/blue3.svg",
		alt: "blue3",
		width: 5,
		height: 3,
	},
	{
		src: "/images/blue4.svg",
		alt: "blue4",
		width: 5,
		height: 3,
	},
]

const gesinterventi = [
	{
		src: "/images/iphone1.svg",
		alt: "iphone1",
		width: 150,
		height: 326,
	},
	{
		src: "/images/iphone2.svg",
		alt: "iphone1",
		width: 1,
		height: 2.17,
	},
	{
		src: "/images/iphone3.svg",
		alt: "iphone1",
		width: 1,
		height: 2.17,
	},
	{
		src: "/images/iphone4.svg",
		alt: "iphone1",
		width: 1,
		height: 2.17,
	},
]

const PortfolioPage = () => {
	const closeBurger = () => {
		const burger = document.getElementsByClassName("bm-burger-button");
		burger[0].style.display='none';	
	}
	const openBurger = () => {
		const burger = document.getElementsByClassName("bm-burger-button");
		burger[0].style.display='block';	
	}
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
		closeBurger();
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
		if(window.innerWidth <= 720) {
			openBurger();
		}
	};

	const [currentImageBlue, setCurrentImageBlue] = useState(0);
	const [viewerIsOpenBlue, setViewerIsOpenBlue] = useState(false);

	const openLightboxBlue = useCallback((event, { photo, index }) => {
		setCurrentImageBlue(index);
		setViewerIsOpenBlue(true);
		closeBurger();
	}, []);

	const closeLightboxBlue = () => {
		setCurrentImageBlue(0);
		setViewerIsOpenBlue(false);
		if(window.innerWidth <= 720) {
			openBurger();
		}
	};

	return (
		<Layout>
			<div className="container">
				<SEO title="Portfolio" />
				<Helmet bodyAttributes={{ class: headerStyles.others }} />
				<section className="othersSection">
					<div>
						<h1>Portfolio</h1>
						<p className={portfolioStyles.projectDescription}>
							<strong>
								<FormattedMessage id="portfolio.subtitle" />
							</strong>
						</p>
					</div>
					<div className={portfolioStyles.timeline}>
						<ul>
							<li className={portfolioStyles.timelineElement}>
								<div className={portfolioStyles.timelineDate}>
									<time className={portfolioStyles.timelineDateText}>
										<FormattedMessage id="portfolio.now.title" />
									</time>
								</div>
								<div className={portfolioStyles.timelineContent}>
									<h4>
										<FormattedMessage id="portfolio.now.subtitle" />
									</h4>
								</div>
							</li>
							<li className={portfolioStyles.timelineElement}>
								<div className={portfolioStyles.timelineDate}>
									<span className={portfolioStyles.timelineDateText}>2019</span>
								</div>
								<div className={portfolioStyles.timelineContent}>
									<h2>Gestione Interventi</h2>
									<h3>
										<FormattedMessage id="company" />
									</h3>

									<p>
										<FormattedMessage
											id="portfolio.project1.company"
											defaultMessage="<company>Cucine Borz</company> è un'azienda che realizza impianti di cucine industriali, sistemi di lavaggio, refrigerazione aspirazione e lavorazione acciaio fornendo servizi di assistenza tecnica specializzata."
											values={{
												company: msg => <strong>{msg}</strong>
											}}
										/>
									</p>
									<h3>
										<FormattedMessage id="request" />
									</h3>
									<p>
										<FormattedMessage id="portfolio.project1.request" />
									</p>
									<h3>
										<FormattedMessage id="solution" />
									</h3>
									<p>
										<FormattedMessage id="portfolio.project1.solution" />
									</p>
									<h3>Screeshots</h3>
									<Gallery style={{zIndex: 100}} onClick={openLightbox} photos={gesinterventi} />
									<ModalGateway>
										{viewerIsOpen ? (
											<Modal onClose={closeLightbox}>
												<Carousel
													currentIndex={currentImageBlue}
													views={gesinterventi.map(x => ({
														...x,
														srcset: x.srcSet,
														caption: x.title
													}))}
												/>
											</Modal>
										) : null}
									</ModalGateway>
									<div>
										<h3>
											<FormattedMessage id="type" />
										</h3>
										<ul className="tagsContainer">
											<li className="typeTag">#Mobile Dev</li>
											<li className="typeTag">#IOS</li>
											<li className="typeTag">#Backend</li>
										</ul>
									</div>
									<div>
										<h3>
											<FormattedMessage id="technologies" />
										</h3>
										<ul className="tagsContainer">
											<li className="techTag">#Laravel</li>
											<li className="techTag">#Mysql</li>
											<li className="techTag">#React Native</li>
										</ul>
									</div>
									<div>
										<h3>
											<FormattedMessage id="website" />
										</h3>
										<a
											href="https://apps.apple.com/fr/app/gesinterventi/id1474807559?l=en"
											style={{
												padding: 6,
												backgroundColor: "#3A53A4",
												color: "white",
												borderRadius: 10,
												fontWeight: 500,
												display: "inline-block",
											}}
										>
											GesInterventi
                    					</a>
									</div>
								</div>
							</li>
							<li className={portfolioStyles.timelineElement}>
								<div className={portfolioStyles.timelineDate}>
									<time className={portfolioStyles.timelineDateText}>2018</time>
								</div>
								<div className={portfolioStyles.timelineContent}>
									<h2>Blu(e)</h2>
									<h3>
										<FormattedMessage id="company" />
									</h3>
									<p>
										<FormattedMessage
											id="portfolio.project2.company"
											defaultMessage="<company>Needius</company> è una giovane società di Rovereto in provincia di Trento con la missione di trovare soluzioni per migliorare la qualità della vita delle persone. Specializzati nella realizzazione di software per disabilità il loro prodotto di punta è Blu(e), un comunicatore per tablets Samsung basato sulla comunicazione aumentativa alternativa che aiuta le persone con difficoltà di linguaggio a comunicare."
											values={{
												company: msg => <strong>{msg}</strong>
											}}
										/>
									</p>
									<h3>
										<FormattedMessage id="request" />
									</h3>
									<p>
										<FormattedMessage id="portfolio.project2.request" />
									</p>
									<h3>
										<FormattedMessage id="solution" />
									</h3>
									<p>
										<FormattedMessage id="portfolio.project2.solution" />
									</p>
									<h3>Screeshots</h3>
									<Gallery photos={photos} onClick={openLightboxBlue} />
									<ModalGateway>
										{viewerIsOpenBlue ? (
											<Modal onClose={closeLightboxBlue}>
												<Carousel
													currentIndex={currentImage}
													views={photos.map(x => ({
														...x,
														srcset: x.srcSet,
														caption: x.title
													}))}
												/>
											</Modal>
										) : null}
									</ModalGateway>
									<div>
										<h3>
											<FormattedMessage id="type" />
										</h3>
										<ul className="tagsContainer">
											<li className="typeTag">#Migration</li>
											<li className="typeTag">#Web</li>
											<li className="typeTag">#Mobile</li>
											<li className="typeTag">#Backend</li>
										</ul>
									</div>
									<div>
										<h3>
											<FormattedMessage id="technologies" />
										</h3>
										<ul className="tagsContainer">
											<li className="techTag">#Django</li>
											<li className="techTag">#Mysql</li>
											<li className="techTag">#AngularJs</li>
											<li className="techTag">#Android</li>
											<li className="techTag">#Kubernetes</li>
										</ul>
									</div>
									<div>
										<h3>
											<FormattedMessage id="website" />
										</h3>
										<a
											href="http://tabletautismo.it"
											style={{
												padding: 6,
												backgroundColor: "#3A53A4",
												color: "white",
												borderRadius: 10,
												fontWeight: 500,
												display: "inline-block",
											}}
										>
											Tablet Autismo
                    					</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default PortfolioPage
