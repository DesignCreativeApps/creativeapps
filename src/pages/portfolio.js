import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Image from '../components/image';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Helmet } from 'react-helmet';
import portfolioStyles from './portfolio.module.css';
import headerStyles from '../components/header.module.css';

const photos = [
	{
		src: "/images/blue1.jpg",
		width: 5,
		height: 3
	},
	{
		src: "/images/blue2.jpg",
		width: 5,
		height: 3
	},
	{
		src: "/images/blue3.jpg",
		width: 5,
		height: 3
	},
	{
		src: "/images/blue4.jpg",
		width: 5,
		height: 3
	}
];

const gesinterventi = [
	{
		src: "/images/iphone1.jpg",
		width: 150,
		height: 326
	},
	{
		src: "/images/iphone2.jpg",
		width: 1,
		height: 2.17
	},
	{
		src: "/images/iphone3.jpg",
		width: 1,
		height: 2.17
	},
	{
		src: "/images/iphone4.jpg",
		width: 1,
		height: 2.17
	}
];


const PortfolioPage = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	const [currentImageBlue, setCurrentImageBlue] = useState(0);
	const [viewerIsOpenBlue, setViewerIsOpenBlue] = useState(false);

	const openLightboxBlue = useCallback((event, { photo, index }) => {
		setCurrentImageBlue(index);
		setViewerIsOpenBlue(true);
	}, []);

	const closeLightboxBlue = () => {
		setCurrentImageBlue(0);
		setViewerIsOpenBlue(false);
	};

	const [selectAll, setSelectAll] = useState(false);

	const toggleSelectAll = () => {
	  setSelectAll(!selectAll);
	};

	const imageRenderer = useCallback(
		({ index, left, top, key, photo, onClick}) => {
			console.log(onClick);
			return(<Image
			selected={selectAll ? true : false}
			key={key}
			margin={"2px"}
			index={index}
			photo={photo}
			left={left}
			top={top}
			onClick={onClick}
		  />
		  )},
	  );

	return (
		<Layout>
			<Helmet bodyAttributes={{ class: headerStyles.others }} />
			<section className="othersSection">
			<div>
                <h1>Portfolio</h1>
                <p className={portfolioStyles.projectDescription}>
					<strong><FormattedMessage id="portfolio.subtitle"/></strong>
                </p>
            </div>
				<div className={portfolioStyles.timeline}>
					<ul>
						<li className={portfolioStyles.timelineElement}>
							<div className={portfolioStyles.timelineDate}>
								<time className={portfolioStyles.timelineDateText}><FormattedMessage id="portfolio.now.title"/></time>
							</div>
							<div className={portfolioStyles.timelineContent}>
								<h4><FormattedMessage id="portfolio.now.subtitle"/></h4>
							</div>
						</li>
						<li className={portfolioStyles.timelineElement}>
							<div className={portfolioStyles.timelineDate}>
								<span className={portfolioStyles.timelineDateText}>2019</span>
							</div>
							<div className={portfolioStyles.timelineContent}>
								<h2><FormattedMessage id="portfolio.project1.title"/></h2>
								<p className={portfolioStyles.projectDescription}>
									<strong><FormattedMessage id="portfolio.project1.subtitle"/></strong>
								</p>
								<p className={portfolioStyles.projectDescription}>
									<FormattedMessage id="portfolio.project1.paragraph"/>
								</p>
								<Gallery photos={gesinterventi} onClick={console.log} renderImage={imageRenderer}/>
								<ModalGateway>
									{viewerIsOpen ? (
										<Modal onClose={closeLightbox}>
											<Carousel
												currentIndex={currentImage}
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
									<h3><FormattedMessage id="type"/></h3>
									<ul className="tagsContainer">
										<li className="typeTag">#Mobile</li>
										<li className="typeTag">#IOS</li>
										<li className="typeTag">#Backend</li>
									</ul>
								</div>
								<div>
									<h3><FormattedMessage id="technologies"/></h3>
									<ul className="tagsContainer">
										<li className="techTag">#Laravel</li>
										<li className="techTag">#Mysql</li>
										<li className="techTag">#React Native</li>
									</ul>
								</div>
								<div>
									<h3><FormattedMessage id="website"/></h3>
									<a href="https://apps.apple.com/fr/app/gesinterventi/id1474807559?l=en" style={{ padding: 11, backgroundColor: '#2a6592', color: 'white', borderRadius: 10, fontWeight: 500, display: 'inline-block' }}>GesInterventi</a>
								</div>
							</div>
						</li>
						<li className={portfolioStyles.timelineElement}>
							<div className={portfolioStyles.timelineDate}>
								<time className={portfolioStyles.timelineDateText}>2018</time>
							</div>
							<div className={portfolioStyles.timelineContent}>
								<h2>Blue</h2>
								<p className={portfolioStyles.projectDescription}>
									<strong><FormattedMessage id="portfolio.project2.subtitle"/></strong>
								</p>
								<p className={portfolioStyles.projectDescription}>
									<FormattedMessage id="portfolio.project2.paragraph"/>
								</p>
								<Gallery photos={photos} onClick={openLightboxBlue} renderImage={imageRenderer}/>
								<ModalGateway>
									{viewerIsOpenBlue ? (
										<Modal onClose={closeLightboxBlue}>
											<Carousel
												currentIndex={currentImageBlue}
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
									<h3><FormattedMessage id="skills"/></h3>
									<ul className="tagsContainer">
										<li className="typeTag">#Web</li>
										<li className="typeTag">#Mobile</li>
										<li className="typeTag">#Backend</li>
									</ul>
								</div>
								<div>
									<h3><FormattedMessage id="technologies"/></h3>
									<ul className="tagsContainer">
										<li className="techTag">#Django</li>
										<li className="techTag">#Mysql</li>
										<li className="techTag">#AngularJs</li>
										<li className="techTag">#Android</li>
										<li className="techTag">#Kubernetes</li>
									</ul>
								</div>
								<div>
									<h3><FormattedMessage id="website"/></h3>
									<a href="http://tabletautismo.it" style={{ padding: 11, backgroundColor: '#2a6592', color: 'white', borderRadius: 10, fontWeight: 500, display: 'inline-block' }}>Tablet Autismo</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</Layout>
	)
}

export default PortfolioPage
