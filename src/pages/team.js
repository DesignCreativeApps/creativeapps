import React from "react"
import { Link } from "gatsby";
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import teamStyles from "./team.module.css"
import headerStyles from "../components/header.module.css"


const TeamPage = (props) => (
    <Layout>
        <Helmet bodyAttributes={{ class: headerStyles.others }} />
        <section className="othersSection">
            <div className={teamStyles.companyMissionContainer}>
                <h1>Team</h1>
                <p className={headerStyles.companyMission}>
                    <strong>Dedicated.</strong> We are a small team and we thrive for quality.
                    We will focus exclusively on your project.
                </p>
                <p className={headerStyles.companyMission}>
                    <strong>Client control.</strong> As client you will become part of our team throughout
                    the whole software development lifecycle.
                </p>
                <p className={headerStyles.companyMission}>
                    <strong>Development process.</strong> We have a well organized development process and we adopt
                    agile methodologies.
                </p>
                <p className={headerStyles.companyMission}>
                    <strong>Mobile and Web.</strong> We provide custom development for web and mobile apps and
                    backend systems. We build software tailored to satisfy company's indivudual needs.
                </p>
            </div>
            <div className={teamStyles.media}>
                <div className={teamStyles.mediaFigureContainer}>
                     <Img className={teamStyles.mediaFigureImage} fluid={props.data.luca.childImageSharp.fluid} />
                </div>
                <div className={teamStyles.mediaBody}>
                    <div className={teamStyles.mediaTitleContainer}>
                        <h3 className={teamStyles.mediaTitle}>Luca Cimonetti</h3>
                        <span>Full Stack Developer</span>
                    </div>
                    <div className={teamStyles.contactContainer}>
                        <img
                            className={teamStyles.contactImage}
                            src="/images/linkedin.svg"
                        />
                        <img
                            className={teamStyles.contactImage}
                            src="/images/github.svg"
                        />
                        <img
                            className={teamStyles.contactImage}
                            src="/images/envelope.svg"
                        />
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
                    <div>
                        <h3>Tech Talks</h3>
                        <ul className={teamStyles.talksList}>
                            <li>
                                <p>“-When Tech Meets Culture: Perpectives from Africa.”</p>
                                <a
                                    className={teamStyles.slidesLink}
                                    href="https://www.slideshare.net/LucaCimonetti/when-tech-meets-cuture-perspectives-from-africa"
                                >
                                    #Slides
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={teamStyles.media}>
                {/* <img
                    className={teamStyles.mediaFigureImage}
                    src="/images/elia.jpg"
                    alt=""
                /> */}
                  <div className={teamStyles.mediaFigureContainer}>
                     <Img className={teamStyles.mediaFigureImage} fluid={props.data.elia.childImageSharp.fluid} />
                </div>
                <div className={teamStyles.mediaBody}>
                    <div className={teamStyles.mediaTitleContainer}>
                        <h3 className={teamStyles.mediaTitle}>Elia Rigo</h3>
                        <span>Backend Developer</span>
                    </div>

                    <div className={teamStyles.contactContainer}>
                        <img
                            className={teamStyles.contactImage}
                            src="/images/linkedin.svg"
                        />
                        <img
                            className={teamStyles.contactImage}
                            src="/images/github.svg"
                        />
                        <img
                            className={teamStyles.contactImage}
                            src="/images/envelope.svg"
                        />
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
                    <div>
                        <h3>Tech Talks</h3>
                        <ul className={teamStyles.talksList}>
                            <li>
                                <p>
                                    “-AWS DeepRacer - A workshop about ReInforcement Learning.”
                                </p>
                                <a className={teamStyles.slidesLink}>
                                    #Slides
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
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

