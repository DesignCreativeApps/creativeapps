import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './Portfolio.css'

const PortfolioPage = () => (
	<Layout>
		<section style={{ maxWidth: 900, marginRight: 'auto', marginLeft: 'auto' }}>
			<h1 style={{ fontSize: 60 }}>Portfolio</h1>
			<div className="timeline">
				<ul>
					<li className="timelineElement">
						<div className="timelineDate">
							<time className="timelineDateText">Now</time>
						</div>
						<div className="timelineContent" style={{ borderTop: 'none' }}>
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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare
								suspendisse sed nisi. Libero nunc consequat interdum varius
							</p>
							<div className="projectImages">
								<img src='/images/gesinterventi.png' width='100%' height="auto" />
								<img src='/images/gesinterventi.png' width='100%' height="auto" />
								<img src='/images/gesinterventi.png' width='100%' height="auto" />
								<img src='/images/gesinterventi.png' width='100%' height="auto" />
							</div>
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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare
								suspendisse sed nisi. Libero nunc consequat interdum varius
							</p>
							<div className="projectImages">
								<img src='/images/blue.png' width='100%' height="auto" />
								<img src='/images/blue.png' width='100%' height="auto" />
								<img src='/images/blue.png' width='100%' height="auto" />
								<img src='/images/blue.png' width='100%' height="auto" />
							</div>
							<div>
								<h3>Technologies</h3>
								<ul style={{ display: 'flex' }}>
									<li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10}}>Django</li>
									<li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10}}>Mysql</li>
									<li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10}}>Angular</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</Layout>
)

export default PortfolioPage
