import React from "react"
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import { FormattedMessage } from "gatsby-plugin-intl"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import teamStyles from "./team.module.css"
import headerStyles from "../components/header.module.css"


const TeamPage = (props) => (
    <Layout>
        <div className="container">
            <SEO title="About" />
            <Helmet bodyAttributes={{ class: headerStyles.others }} />
            <section className="othersSection">
                <div className="othersContainer">
                    <h1><FormattedMessage id="about.title" /></h1>
                    <div className={teamStyles.companyMissionContainer}>
                        <p className={teamStyles.companyMission}>
                            <strong><FormattedMessage id="about.dedicated.title" /></strong> <FormattedMessage id="about.dedicated.paragraph" />
                        </p>
                        <p className={teamStyles.companyMission}>
                            <strong><FormattedMessage id="about.client.title" /></strong> <FormattedMessage id="about.client.paragraph" />
                        </p>
                        <p className={teamStyles.companyMission}>
                            <strong><FormattedMessage id="about.process.title" /></strong> <FormattedMessage id="about.process.paragraph" />
                        </p>
                        <p className={teamStyles.companyMission}>
                            <strong><FormattedMessage id="about.development.title" /></strong> <FormattedMessage id="about.development.paragraph" />
                        </p>
                    </div>
                </div>
            </section>
            <section className="otherSection">
                <div className={teamStyles.mediaContainer}>
                    <div className={teamStyles.media} id={teamStyles.card1}>
                        <div className={teamStyles.mediaFigureContainer}>
                            <Img className={teamStyles.mediaFigureImage} fluid={props.data.luca.childImageSharp.fluid} />
                        </div>
                        <div className={teamStyles.mediaBody}>
                            <div className={teamStyles.mediaTitleContainer}>
                                <h3 className={teamStyles.mediaTitle}>Luca Cimonetti</h3>
                                <span>Full Stack Developer</span>
                            </div>
                            <div className={teamStyles.contactContainer}>
                                <a href="https://www.linkedin.com/in/luca-cimonetti/">
                                    <img
                                        alt="linkedin"
                                        className={teamStyles.contactImage}
                                        src="/images/linkedin.svg"
                                    />
                                </a>
                                <a href="https://github.com/lucacimo">
                                    <img
                                        alt="github"
                                        className={teamStyles.contactImage}
                                        src="/images/github.svg"
                                    />
                                </a>
                                <a href="mailto:luca@creativeapps.design">
                                    <img
                                        alt="envelope"
                                        className={teamStyles.contactImage}
                                        src="/images/envelope.svg"
                                    />
                                </a>
                            </div>
                            <div className={teamStyles.bioContainer}>
                                <h3>Bio</h3>
                                <p><FormattedMessage id="about.luca" /></p>
                            </div>
                            <div>
                                <h3><FormattedMessage id="skills" /></h3>
                                <ul className="tagsContainer">
                                    <li className="skillTag">#Html</li>
                                    <li className="skillTag">#CSS</li>
                                    <li className="skillTag">#Javascript</li>
                                    <li className="skillTag">#Python</li>
                                </ul>
                            </div>
                            <div>
                                <h3><FormattedMessage id="technologies" /></h3>
                                <ul className="tagsContainer">
                                    <li className="techTag">#Django</li>
                                    <li className="techTag">#Flask</li>
                                    <li className="techTag">#React</li>
                                    <li className="techTag">#GatsbyJs</li>
                                    <li className="techTag">#React Native</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Tech Talks</h3>
                                <ul className={teamStyles.talksList}>
                                    <li>
                                        <p style={{ marginTop: 0 }}>“-When Tech Meets Culture: Perpectives from Africa.”</p>
                                        <a
                                            className={teamStyles.slidesLink}
                                            href="https://www.slideshare.net/LucaCimonetti/when-tech-meets-cuture-perspectives-from-africa"
                                        >
                                            Slides
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={teamStyles.media}>
                        <div className={teamStyles.mediaFigureContainer}>
                            <Img className={teamStyles.mediaFigureImage} fluid={props.data.elia.childImageSharp.fluid} />
                        </div>
                        <div className={teamStyles.mediaBody}>
                            <div className={teamStyles.mediaTitleContainer}>
                                <h3 className={teamStyles.mediaTitle}>Elia Rigo</h3>
                                <span>Backend Developer</span>
                            </div>

                            <div className={teamStyles.contactContainer}>
                                <a href="https://www.linkedin.com/in/elia-rigo/">
                                    <img
                                        alt="linkedin"
                                        className={teamStyles.contactImage}
                                        src="/images/linkedin.svg"
                                    />
                                </a>
                                <a href="https://github.com/EliaRigo">
                                    <img
                                        alt="github"
                                        className={teamStyles.contactImage}
                                        src="/images/github.svg"
                                    />
                                </a>
                                <a href="mailto:elia@creativeapps.design">
                                    <img
                                        alt="envelope"
                                        className={teamStyles.contactImage}
                                        src="/images/envelope.svg"
                                    />
                                </a>
                            </div>

                            <div className={teamStyles.bioContainer}>
                                <h3>Bio</h3>
                                <p><FormattedMessage id="about.elia" /></p>
                            </div>
                            <div>
                                <h3><FormattedMessage id="skills" /></h3>
                                <ul className="tagsContainer">
                                    <li className="skillTag">#Php</li>
                                    <li className="skillTag">#Python</li>
                                    <li className="skillTag">#Mysql</li>
                                    <li className="skillTag">#Postgresql</li>
                                </ul>
                            </div>
                            <div>
                                <h3><FormattedMessage id="technologies" /></h3>
                                <ul className="tagsContainer">
                                    <li className="techTag">#Django</li>
                                    <li className="techTag">#Flask</li>
                                    <li className="techTag">#Laravel</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Tech Talks</h3>
                                <ul className={teamStyles.talksList}>
                                    <li>
                                        <p style={{ marginTop: -5 }}>
                                            “-AWS DeepRacer - A workshop about ReInforcement Learning.”
                                        </p>
                                        <a href="https://drive.google.com/open?id=1HJLFA5NfnRw-i2Vb_0m4xoabCtuOs83H" className={teamStyles.slidesLink}>
                                            Slides
                                        </a>
                                    </li>
                                    <li>
                                        <p>
                                            “-Image Recognition with TensorFlow using Deep Learning”
                                        </p>
                                        <a href="https://drive.google.com/open?id=1HbnMWIpNuG5TLNDd-UmTnaDRMDhZhxZy" className={teamStyles.slidesLink}>
                                            Slides
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </Layout >
)

export default TeamPage;

export const query = graphql`
  query {
    luca: file(relativePath: { eq: "luca.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    elia: file(relativePath: { eq: "elia.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  }
`

