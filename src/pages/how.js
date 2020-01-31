import React, { useState, useCallback } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images";
import { FormattedMessage } from "gatsby-plugin-intl"
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
        burger[0].style.display = 'none';
    }
    const openBurger = () => {
        const burger = document.getElementsByClassName("bm-burger-button");
        burger[0].style.display = 'block';
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
        if (window.innerWidth <= 720) {
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
        if (window.innerWidth <= 720) {
            openBurger();
        }
    };
    return (
        <Layout>
            <div className="container">
                <SEO title="How we work" />
                <Helmet bodyAttributes={{ class: headerStyles.others }} />
                <section className="othersSection">
                    <div>
                        <h1><FormattedMessage id="how.title" /></h1>
                        <p className={portfolioStyles.projectDescription}>
                            <strong>
                            <FormattedMessage id="how.subtitle" />
                        </strong>
                        </p>
                    </div>
                    <div className={portfolioStyles.timeline}>
                        <ul>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={howStyles.timelineDate}>
                                    <time className={howStyles.numberCircle}>
                                        1
                                    </time>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2>
                                    <FormattedMessage id="how.requirements.title" />
                                </h2>
                                    <p>
                                    <FormattedMessage id="how.requirements.paragraph" />
                                    </p>
                                    <h3> <FormattedMessage id="methodologies" /></h3>
                                    <ul className="tagsContainer">
                                        <li className="methodTag">#Agile</li>
                                        <li className="methodTag">#Scrum</li>
                                    </ul>
                                    <h3> <FormattedMessage id="tools" /></h3>
                                    <ul className="tagsContainer">
                                        <li className="toolsTag">#GoogleDrive</li>
                                        <li className="toolsTag">#Hanghouts</li>
                                        <li className="toolsTag">#Skype</li>
                                    </ul>
                                </div>

                            </li>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={howStyles.timelineDate}>
                                    <span className={howStyles.numberCircle}>2</span>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2> <FormattedMessage id="how.high.title" /></h2>
                                    <p>
                                    <FormattedMessage id="how.high.paragraph"/>
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
                                    <h3> <FormattedMessage id="methodologies" /></h3>
                                    <ul className="tagsContainer">
                                        <li className="methodTag">#Prototyping</li>
                                        <li className="methodTag">#Low Fidelity</li>
                                    </ul>
                                    <h3><FormattedMessage id="tools" /></h3>
                                    <ul className="tagsContainer">
                                        <li className="toolsTag">#Balsmiq</li>
                                        <li className="toolsTag">#Figma</li>
                                    </ul>
                                </div>
                            </li>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={howStyles.timelineDate}>
                                    <time className={howStyles.numberCircle}>3</time>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2> <FormattedMessage id="how.low.title" /></h2>
                                    <p>
                                    <FormattedMessage id="how.low.paragraph" />
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
                                    <h3><FormattedMessage id="methodologies" /></h3>
                                    <ul className="tagsContainer">
                                        <li className="methodTag">#Prototyping</li>
                                        <li className="methodTag">#High Fidelity</li>
                                    </ul>
                                    <h3> <FormattedMessage id="tools" /></h3>
                                    <ul className="tagsContainer">
                                        <li className="toolsTag">#Sketch</li>
                                        <li className="toolsTag">#Figma</li>
                                        <li className="toolsTag">#Webflow</li>
                                    </ul>
                                </div>
                            </li>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={howStyles.timelineDate}>
                                    <time className={howStyles.numberCircle}>4</time>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2> <FormattedMessage id="how.planning.title" /></h2>
                                    <p>
                                    <FormattedMessage id="how.planning.paragraph" />
                                    </p>
                                    <h3> <FormattedMessage id="methodologies" /></h3>
                                    <ul className="tagsContainer">
                                        <li className="methodTag">#Agile</li>
                                        <li className="methodTag">#Scrum</li>
                                    </ul>
                                    <h3> <FormattedMessage id="tools" /></h3>
                                    <ul className="tagsContainer">
                                        <li className="toolsTag">#Trello</li>
                                        <li className="toolsTag">#Jira</li>
                                    </ul>
                                </div>
                            </li>
                            <li className={portfolioStyles.timelineElement}>
                                <div className={howStyles.timelineDate}>
                                    <time className={howStyles.numberCircle}>5</time>
                                </div>
                                <div className={portfolioStyles.timelineContent}>
                                    <h2><FormattedMessage id="how.development.title" /></h2>
                                    <p>
                                    <FormattedMessage id="how.development.paragraph" />
                                    </p>
                                    <h3>Methodologies</h3>
                                    <ul className="tagsContainer">
                                        <li className="methodTag">#Agile</li>
                                        <li className="methodTag">#Scrum</li>
                                    </ul>
                                    <h3>Tools</h3>
                                    <ul className="tagsContainer">
                                        <li className="toolsTag">#Bugsnug</li>
                                        <li className="toolsTag">#Heroku</li>
                                        <li className="toolsTag">#Netlify</li>
                                        <li className="toolsTag">#Swagger</li>
                                    </ul>
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

