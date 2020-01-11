import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './Team.css';

const TeamPage = () => (
    <Layout>
        <section className="portfolio-app">
            <h1>Team</h1>
            <div className="Media">
                <img className="Media-figure Image" src="/images/luca-cimonetti.jpg" alt="" />
                <div className="Media-body">
                    <div className="Media-titleContainer">
                        <h3 className="Media-title">Luca Cimonetti</h3>
                        <span>Full Stack Developer</span>
                    </div>
                    <div className="contactContainer">
                        <img src='/images/envelope.svg' width="20" style={{ marginRight: 10 }} />
                        <span>luca@creativeapps.design</span>
                    </div>
                    <div className="bioContainer">
                        <h3>Bio</h3>
                        <p>
                            Enthusiast, passionate and competent software engineer with 8+ years of experience designing, coding and testing software across different platforms. Self learner with a quality oriented attitude I always keep high quality standards in my coding. I regularly refresh my skills to ensure I keep up with ongoing developments.
                        </p>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <ul className="skillsContainer">
                            <li className="skillItem">Html</li>
                            <li className="skillItem">CSS</li>
                            <li className="skillItem">Javascript</li>
                            <li className="skillItem">Python</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Technologies</h3>
                        <ul className="skillsContainer">
                            <li className="techItem">Django</li>
                            <li className="techItem">Flask</li>
                            <li className="techItem">React</li>
                            <li className="techItem">React Native</li>
                        </ul>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3>Tech Talks</h3>
                        <ul style={{ paddingLeft: '1.4rem' }}>
                            <li>
                                <p>“When Tech Meets Culture: Perpectives from Africa.”</p>
                                <a href="https://www.slideshare.net/LucaCimonetti/when-tech-meets-cuture-perspectives-from-africa" style={{ padding: 11, background: '#0099ff', color: 'white', marginLeft: '-1.4rem', fontWeight: 500, borderRadius: 10 }}>Slides</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Media">
                <img className="Media-figure Image" src="/images/elia.jpg" alt="" />
                <div className="Media-body">
                    <div className="Media-titleContainer">
                        <h3 className="Media-title">Elia Rigo</h3>
                        <span>Backend Developer</span>
                    </div>
                    <div className="contactContainer">
                        <img src='/images/envelope.svg' width="20" style={{ marginRight: 10 }} />
                        <span>elia@creativeapps.design</span>
                    </div>
                    <div className="bioContainer">
                        <h3>Bio</h3>
                        <p>
                            I was born in 1994. I’ve always been interested in IT since I was a child. I’m currently a student at the University of Trento attending a Master in Computer Sciences. Simultaneously, in 2011, I set up my own business and from 2017 to 2019 I collaborated with the Bruno Kessler Foundation in the Embedded System division.
                        </p>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <ul className="skillsContainer">
                            <li className="skillItem">Php</li>
                            <li className="skillItem">Python</li>
                            <li className="skillItem">Mysql</li>
                            <li className="skillItem">Postgresql</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Technologies</h3>
                        <ul className="skillsContainer">
                            <li className="techItem">Django</li>
                            <li className="techItem">Flask</li>
                            <li className="techItem">Laravel</li>
                        </ul>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3>Tech Talks</h3>
                        <ul style={{ paddingLeft: '1.4rem' }}>
                            <li>
                                <p>“AWS DeepRacer - A workshop about ReInforcement Learning.”</p>
                                <a style={{ padding: 11, borderRadius: 10, background: '#0099ff', color: 'white', marginLeft: '-1.4rem', fontWeight: 500 }}>Slides</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default TeamPage
