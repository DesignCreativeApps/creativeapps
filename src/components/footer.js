import React from 'react';
import "./Footer.css"

const Footer = () => (
    <div style={{ background: '#F6F6F6'}}>
        <section>
            <div className="footerContainer">
                <div className="infoContainer">
                    <div className="test">
                        <img src='/images/envelope.svg' width="20" className="image" />
                        <span>info@creativeapps.design</span>
                    </div>
                    <div className="test">
                        <img src='/images/github.svg' width="20" className="image" />
                        <span>Github</span>
                    </div>
                    <div className="test">
                        <img src='/images/bitbucket.svg' width="20" className="image" />
                        <span>Bitbucket</span>
                    </div>
                </div>
                <div className="infoContainer">
                    <div className="footerLogo">
                        <img src='/images/logo-designcode.svg' width="20" className="image" />
                        <span>CREATIVE APPS</span>
                    </div>
                    <div className="test">
                        <span>Trento (TN), Italy</span>
                    </div>
                    <div className="test">
                        <span>Partita Iva IT20XXXXXX</span>
                    </div>
                </div>
            </div>
            <p className="copyright">© 2019 Creative Apps</p>
        </section>
    </div>
)

export default Footer;