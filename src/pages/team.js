import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import teamStyles from "./team.module.css"
import headerStyles from "../components/header.module.css"


const TeamPage = () => (
    <Layout>
        <Helmet bodyAttributes={{ class: headerStyles.others }} />
        <section className="othersSection">
            <div>
                <h1>Team</h1>
                {/* <p style={{ fontWeight: 700, lineHeight: 1.636363, fontSize: '1rem', marginBottom:'1rem'}}>
                    Lorem Ipsum è un testo segnaposto utilizzato nel settore della
                    tipografia e della stampa. Lorem Ipsum è considerato il testo
                    segnaposto standard sin dal sedicesimo secolo, quando un anonimo
                    tipografo prese una cassetta di caratteri e li assemblò per preparare
                    un testo campione.
                </p> */}
            </div>
            <div className={teamStyles.media}>
                <img
                    className={teamStyles.mediaFigureImage}
                    src="/images/luca-cimonetti.jpg"
                    alt=""
                />
                <div className={teamStyles.mediaBody}>
                    <div className={teamStyles.mediaTitleContainer}>
                        <h3 className={teamStyles.mediaTitle}>Luca Cimonetti</h3>
                        <span>Full Stack Developer</span>
                    </div>
                    <div className={teamStyles.contactContainer}>
                        <img
                            className={teamStyles.contactImage}
                            src="/images/envelope.svg"
                        />
                        <span>luca@creativeapps.design</span>
                    </div>
                    <div className={teamStyles.bioContainer}>
                        <h3>Bio</h3>
                        <p>
                            Enthusiast, passionate and competent software engineer with 8+
                            years of experience designing, coding and testing software across
                            different platforms. Self learner with a quality oriented attitude
                            I always keep high quality standards in my coding. I regularly
                            refresh my skills to ensure I keep up with ongoing developments.
                        </p>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <ul className="tagsContainer">
                            <li className="skillTag">#Html</li>
                            <li className="skillTag">#CSS</li>
                            <li className="skillTag">#Javascript</li>
                            <li className="skillTag">#Python</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Technologies</h3>
                        <ul className="tagsContainer">
                            <li className="techTag">#Django</li>
                            <li className="techTag">#Flask</li>
                            <li className="techTag">#React</li>
                            <li className="techTag">#React Native</li>
                        </ul>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3>Tech Talks</h3>
                        <ul style={{ paddingLeft: "1.4rem" }}>
                            <li>
                                <p>“When Tech Meets Culture: Perpectives from Africa.”</p>
                                <a
                                    href="https://www.slideshare.net/LucaCimonetti/when-tech-meets-cuture-perspectives-from-africa"
                                    style={{
                                        padding: 11,
                                        background: "#0099ff",
                                        color: "white",
                                        marginLeft: "-1.4rem",
                                        fontWeight: 500,
                                        borderRadius: 10,
                                    }}
                                >
                                    Slides
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={teamStyles.media}>
                <img
                    className={teamStyles.mediaFigureImage}
                    src="/images/elia.jpg"
                    alt=""
                />
                <div className={teamStyles.mediaBody}>
                    <div className={teamStyles.mediaTitleContainer}>
                        <h3 className={teamStyles.mediaTitle}>Elia Rigo</h3>
                        <span>Backend Developer</span>
                    </div>
                    <div className={teamStyles.contactContainer}>
                        <img
                            src="/images/envelope.svg"
                            width="20"
                            style={{ marginRight: 10 }}
                        />
                        <span>elia@creativeapps.design</span>
                    </div>
                    <div className={teamStyles.bioContainer}>
                        <h3>Bio</h3>
                        <p>
                            I was born in 1994. I’ve always been interested in IT since I was
                            a child. I’m currently a student at the University of Trento
                            attending a Master in Computer Sciences. Simultaneously, in 2011,
                            I set up my own business and from 2017 to 2019 I collaborated with
                            the Bruno Kessler Foundation in the Embedded System division.
                        </p>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <ul className="tagsContainer">
                            <li className="skillTag">#Php</li>
                            <li className="skillTag">#Python</li>
                            <li className="skillTag">#Mysql</li>
                            <li className="skillTag">#Postgresql</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Technologies</h3>
                        <ul className="tagsContainer">
                            <li className="techTag">#Django</li>
                            <li className="techTag">#Flask</li>
                            <li className="techTag">#Laravel</li>
                        </ul>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3>Tech Talks</h3>
                        <ul style={{ paddingLeft: "1.4rem", margin: 0 }}>
                            <li>
                                <p>
                                    “AWS DeepRacer - A workshop about ReInforcement Learning.”
                                </p>
                                <a
                                    style={{
                                        padding: 11,
                                        borderRadius: 10,
                                        background: "#0099ff",
                                        color: "white",
                                        marginLeft: "-1.4rem",
                                        fontWeight: 500,
                                    }}
                                >
                                    Slides
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default TeamPage
