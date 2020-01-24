import React from 'react';
import Language from '../components/language';
import footerStyles from "./footer.module.css"

const Footer = () => (
    <div className={footerStyles.container}>
        <section>
            <div className={footerStyles.footerContainer}>
                <div className={footerStyles.infoContainer}>
                    <div className={footerStyles.languageContainer}>
                        <Language />
                    </div>
                    <div className={footerStyles.footerItem}>
                        <a href="https://github.com">
                            <img src='/images/github.svg' width="20" className={footerStyles.image} />
                            <span>Github</span>
                        </a>
                    </div>
                    <div className={footerStyles.footerItem}>
                        <a href="https://bitbucket.com">
                            <img src='/images/bitbucket.svg' width="20" className={footerStyles.image} />
                            <span>Bitbucket</span>
                        </a>
                    </div>
                </div>
                <div className={footerStyles.infoContainer}>
                    <div className={footerStyles.footerItem}>
                        <a href="mailto:info@creativeapps.design">
                            <img src='/images/envelope.svg' width="20" className={footerStyles.image} />
                            <span>info@creativeapps.design</span>
                        </a>
                    </div>
                    <div className={footerStyles.footerItem}>
                        <img src='/images/logo.svg' className={footerStyles.image} />
                        <span>CREATIVE APPS</span>
                    </div>
                    <div className={footerStyles.footerItem}>
                        <span>Trento (TN), Italy</span>
                    </div>
                    {/* <div className={footerStyles.footerItem}>
                        <span>Partita Iva IT20XXXXXX</span>
                    </div> */}
                </div>
            </div>
            <p className={footerStyles.copyright}>
                <span>© 2019 Creative Apps</span>
            </p>
        </section>
    </div>
)

export default Footer;