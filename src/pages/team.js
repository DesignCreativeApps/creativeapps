import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './Team.css';

const TeamPage = () => (
    <Layout>
        <section style={{ maxWidth: 900, marginRight: 'auto', marginLeft: 'auto' }}>
            <h1 style={{ fontSize: 60 }}>Team</h1>
            <div className="Media">
                <img className="Media-figure Image" src="/images/luca-cimonetti.jpg" alt="" />
                <div className="Media-body">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <h3 className="Media-title">Luca Cimonetti</h3>
                        <span>Full Stack Developer</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/images/envelope.svg' width="20" style={{ marginRight: 15 }} />
                        <span>luca@creativeapps.design</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Ornare quam viverra orci sagittis eu volutpat. Sodales ut etiam sit amet nisl purus.
                    </p>
                    <div>
                        <h3>Skills</h3>
                        <ul style={{ display: 'flex', margin: 0, padding: 0, listStyleType: 'none'}}>
                            <li style={{ padding: 10, marginRight: 10, background: '#2a6592', color: 'white', borderRadius: 10 }}>Html</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#2a6592', color: 'white', borderRadius: 10  }}>CSS</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#2a6592', color: 'white', borderRadius: 10  }}>Javascript</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#2a6592', color: 'white', borderRadius: 10 }}>Python</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Technologies</h3>
                        <ul style={{ display: 'flex', margin: 0, padding: 0, listStyleType: 'none'}}>
                            <li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10}}>Django</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10}}>Flask</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10}}>React</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10}}>React Native</li>
                        </ul>
                    </div>
                    <div style={{marginBottom: '1.5rem'}}>
                        <h3>Tech Talks</h3>
                        <ul style={{paddingLeft: '1.4rem'}}>
                            <li>
                                <p>“When Tech Meets Culture: Perpectives from Africa.”</p>  
                                <a href="https://www.slideshare.net/LucaCimonetti/when-tech-meets-cuture-perspectives-from-africa" style={{ padding: 11, background: '#0099ff', color: 'white', marginLeft: '-1.4rem', fontWeight: 500, borderRadius: 10}}>Slides</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Media">
                <img className="Media-figure Image" src="/images/elia.jpg" alt="" />
                <div className="Media-body">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <h3 className="Media-title">Elia Rigo</h3>
                        <span>Backend Developer</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/images/envelope.svg' width="20" style={{ marginRight: 15 }} />
                        <span>elia@creativeapps.design</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Ornare quam viverra orci sagittis eu volutpat. Sodales ut etiam sit amet nisl purus.
                    </p>
                    <div>
                        <h3>Skills</h3>
                        <ul style={{ display: 'flex', margin: 0, padding: 0, listStyleType: 'none'}}>
                            <li style={{ padding: 10, marginRight: 10, background: '#2a6592', color: 'white', borderRadius: 10 }}>Php</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#2a6592', color: 'white', borderRadius: 10 }}>Python</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#2a6592', color: 'white', borderRadius: 10 }}>Mysql</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#2a6592', color: 'white', borderRadius: 10 }}>Postgresql</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Technologies</h3>
                        <ul style={{ display: 'flex', margin: 0, padding: 0, listStyleType: 'none'}}>
                            <li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10 }}>Django</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10 }}>Flask</li>
                            <li style={{ padding: 10, marginRight: 10, background: '#6BB1F1', color: 'white', borderRadius: 10 }}>Laravel</li>
                        </ul>
                    </div>
                    <div style={{marginBottom: '1.5rem'}}>
                        <h3>Tech Talks</h3>
                        <ul style={{paddingLeft: '1.4rem'}}>
                            <li>
                                <p>“AWS DeepRacer - A workshop about ReInforcement Learning.”</p>  
                                <a style={{ padding: 11, borderRadius: 10, background: '#0099ff', color: 'white', marginLeft: '-1.4rem', fontWeight: 500}}>Slides</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default TeamPage
