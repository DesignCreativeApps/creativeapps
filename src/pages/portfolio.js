import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './Portfolio.css'

const photos = [
	{
		src: "/images/mockup-blue-copia-768x576.png",
		width: 4,
		height: 3
	},
	{
		src: "/images/ezgif.com-video-to-gif1.gif",
		width: 4,
		height: 3
	},
	{
		src: "/images/ezgif.com-video-to-gif2.gif",
		width: 4,
		height: 3
	},
	{
		src: "/images/ezgif.com-video-to-gif.gif",
		width: 4,
		height: 3
	}
];

const gesinterventi = [
	{
		src: "/images/0x0ss-P3.jpg",
		width: 1,
		height: 2
	},
	{
		src: "/images/0x0ss-P3 (1).jpg",
		width: 1,
		height: 2
	},
	{
		src: "/images/0x0ss-P3 (2).jpg",
		width: 1,
		height: 2
	},
	{
		src: "/images/0x0ss-P3 (3).jpg",
		width: 1,
		height: 2
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
	return (
		<Layout>
			<section className="portfolio-app">
				<h1>Portfolio</h1>
				<div className="timeline">
					<ul>
						<li className="timelineElement">
							<div className="timelineDate">
								<time className="timelineDateText">Now</time>
							</div>
							<div className="timelineContent">
								<h4>We are currently open for collaborations on new and existing projects. Contact us!</h4>
							</div>
						</li>
						<li className="timelineElement">
							<div className="timelineDate">
								<span className="timelineDateText">2019</span>
							</div>
							<div className="timelineContent">
								<h2>Gestione Interventi</h2>
								<p className="projectDescription">
									<strong>Project management application that allows to plan and organise maintenance and consultancy activities keeping a complete history.</strong>
								</p>
								<p className="projectDescription">
								From the mobile application the user can create new activities, add trips, goods delivered to the client, log executed tasks and eventually add attachments. The user can generate a pdf report regarding the performed activities and the client can sign it directly on the app. The app has full offline capabilities.
							</p>
								<Gallery photos={gesinterventi} onClick={openLightbox} />
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
									<h3>Technologies</h3>
									<ul className="skillsContainer">
										<li className="techItem">Laravel</li>
										<li className="techItem">Mysql</li>
										<li className="techItem">React Native</li>
									</ul>
								</div>
								<div>
									<h3>Website</h3>
									<a href="https://apps.apple.com/fr/app/gesinterventi/id1474807559?l=en" style={{ padding: 11, backgroundColor: '#2a6592', color: 'white', borderRadius: 10, fontWeight: 500, display:'inline-block' }}>GesInterventi</a>
								</div>
							</div>
						</li>
						<li className="timelineElement">
							<div className="timelineDate">
								<time className="timelineDateText">2018</time>
							</div>
							<div className="timelineContent">
								<h2>Blue</h2>
								<p className="projectDescription">
									<strong>Blue 2 is an Android application for Samsung tablets designed to facilitate the learning process for kids with special needs like autism.</strong>
								</p>
								<p className="projectDescription">
									Responsible for the migration of the backend from <strong>Red Hat Openshift</strong> v.2 to v.3 and the release of the <strong>Android</strong> application. Platform maintenance and bug fixing.
								</p>
								<Gallery photos={photos} onClick={openLightboxBlue} />
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
									<h3>Technologies</h3>
									<ul className="skillsContainer">
										<li className="techItem">Django</li>
										<li className="techItem">Mysql</li>
										<li className="techItem">AngularJs</li>
										<li className="techItem">Android</li>
										<li className="techItem">Kubernetes</li>
									</ul>
								</div>
								<div>
									<h3>Website</h3>
										<a href="http://tabletautismo.it" style={{ padding: 11, backgroundColor: '#2a6592', color: 'white', borderRadius: 10, fontWeight: 500, display:'inline-block' }}>Tablet Autismo</a>
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
