import React, {  useState, useCallback }  from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images";
import headerStyles from "../components/header.module.css"
import howStyles from './how.module.css';
import portfolioStyles from "./portfolio.module.css"


const photos = [
    {
        src: "/images/low1.svg",
        alt: "low1",
        width: 5,
        height: 3.54,
    },
    {
        src: "/images/low2.svg",
        alt: "low2",
        width: 5,
        height: 3.54,
    }
]

const lowphotos = [
    {
        src: "/images/high1.svg",
        alt: "low1",
        width: 1,
        height: 1.78,
    },
    {
        src: "/images/high2.svg",
        alt: "low2",
        width: 1,
        height: 1.78,
    },
    {
        src: "/images/high3.svg",
        alt: "low2",
        width: 1,
        height: 1.78,
    },
    {
        src: "/images/high4.svg",
        alt: "low2",
        width: 1,
        height: 1.78,
    }

]

const TeamPage = (props) => {
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
    
    const [currentImageLow, setCurrentImageLow] = useState(0);
	const [viewerIsOpenLow, setViewerIsOpenLow] = useState(false);

	const openLightboxLow = useCallback((event, { photo, index }) => {
		setCurrentImageLow(index);
		setViewerIsOpenLow(true);
		closeBurger();
	}, []);

	const closeLightboxLow = () => {
		setCurrentImageLow(0);
		setViewerIsOpenLow(false);
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
                        <h1>How we work</h1>
                        <p className={portfolioStyles.projectDescription}>
                            <strong>
                                Here a summary of our process.
                        </strong>
                        </p>
                    </div>
                    <div className={portfolioStyles.timeline}>
                        <ul>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={portfolioStyles.timelineDate}>
                                    <time className={portfolioStyles.timelineDateText}>
                                        1
                                </time>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2>
                                        Gathering requirements
                                </h2>
                                    <p>
                                        We work closely with our customers to gather their <strong>project requirements.</strong> We go through several iterations in order to make sure we fully understand their <strong>needs.</strong>. We can visit them directly the on their premises but we can also do this via <strong>Hangouts or Skype.</strong>
                                </p>
                                </div>
                            </li>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={portfolioStyles.timelineDate}>
                                    <span className={portfolioStyles.timelineDateText}>2</span>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2>Low fidelity prototyping</h2>
                                    <p>
                                        <strong>Low-fidelity prototyping</strong> is a quick and easy way to translate <strong>high-level design </strong> concepts into tangible and testable artifacts.
                                        We use paper prototyping that allows us to prototype a digital product interface without using digital software.
                                        We do wireframing as well using tools like <strong>Balsamiq</strong>, a visual representation of a product page that the designer can use to arrange page elements. 
                                </p>
                                <Gallery onClick={openLightbox} photos={photos} />
									<ModalGateway>
										{viewerIsOpen ? (
											<Modal onClose={closeLightbox}>
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
                                </div>
                            </li>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={portfolioStyles.timelineDate}>
                                    <time className={portfolioStyles.timelineDateText}>3</time>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2>High fidelity prototyping</h2>
                                    <p>
                                        <strong>High-fidelity prototypes</strong> appear and function as similar as possible to the actual product that we will ship. 
                                        We usually create high-fidelity prototypes when they have a solid understanding of what we are going to build. We use tools like <strong>Figma or Sketch.</strong>
                                    </p>
                                    <Gallery onClick={openLightboxLow} photos={lowphotos} />
									<ModalGateway>
										{viewerIsOpenLow ? (
											<Modal onClose={closeLightboxLow}>
												<Carousel
													currentIndex={currentImageLow}
													views={lowphotos.map(x => ({
														...x,
														srcset: x.srcSet,
														caption: x.title
													}))}
												/>
											</Modal>
										) : null}
									</ModalGateway>
                                </div>
                            </li>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={portfolioStyles.timelineDate}>
                                    <time className={portfolioStyles.timelineDateText}>4</time>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2>Sprint planning</h2>
                                    <p>
                                        We use <strong>agile methodologies</strong> and we plan our work in short development cycles of <strong>1-2 weeks.</strong> We estimate the complexity of the work that we need to perform and we assign tasks accordingly.
                                    </p>
                                </div>
                            </li>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={portfolioStyles.timelineDate}>
                                    <time className={portfolioStyles.timelineDateText}>5</time>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2>Development iterations</h2>
                                    <p>
                                    During the development we do <strong>continuous deployment</strong> on platfotms like <strong>Heroku and Netlify</strong> to keep the customers up to date with the progress.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </Layout >
    )
}


export default TeamPage;

