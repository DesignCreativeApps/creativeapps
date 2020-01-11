import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './Portfolio.css'

const photos = [
	{
		src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
		width: 1,
		height: 1
	},
	{
		src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
		width: 3,
		height: 4
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
									<strong>L' applicazione permette di organizzare e pianificare gli interventi di assistenza e consulenza, mantenendo uno storico completo.</strong>
								</p>
								<p className="projectDescription">
									Dalla applicazione mobile e dalla applicazione web sarà possibile creare gli interventi, inserire viaggi, materiali consegnati, ore di lavoro dei tecnici, attività eseguite, file allegati e foto. Inoltre dall'applicazione mobile sarà possibile generare un rapportino di lavoro con firma del cliente. Il tutto funzionante anche quando il device è offline.
							</p>
								<Gallery photos={photos} onClick={openLightbox} />
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
								<div>
									<h3>Technologies</h3>
									<ul style={{ display: 'flex' }}>
										<li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10 }}>Laravel</li>
										<li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10 }}>Mysql</li>
										<li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10 }}>React Native</li>
									</ul>
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
									<strong>L'applicazione permette di organizzare e pianificare gli interventi di assistenza e consulenza, mantenendo uno storico completo.</strong>
								</p>
								<p className="projectDescription">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare
									suspendisse sed nisi. Libero nunc consequat interdum varius
							</p>
								<Gallery photos={photos} onClick={openLightbox} />
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
								<div>
									<h3>Technologies</h3>
									<ul style={{ display: 'flex' }}>
										<li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10 }}>Django</li>
										<li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10 }}>Mysql</li>
										<li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10 }}>Angular</li>
									</ul>
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
