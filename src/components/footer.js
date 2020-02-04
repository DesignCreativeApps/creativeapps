import React from 'react';
import Language from '../components/language';
import { FormattedMessage } from "gatsby-plugin-intl";
import footerStyles from "./footer.module.css"

const Footer = () => (
    <div className={footerStyles.container}>
          <div className={footerStyles.languageContainer}>
            <Language />
        </div>
        <div className={footerStyles.footerContainer}>
            <div className={footerStyles.infoContainer}>
                <div className={footerStyles.footerItem}>
                    <div style={{ textAlign: 'center' }}> <strong><FormattedMessage id="call" /></strong></div>
                </div>
                <div className={footerStyles.footerItem}>
                    <a href="mailto:info@creativeapps.design">
                        <img alt="envelope" src='/images/envelope.svg' width="20" className={footerStyles.image} />
                        <span>info@creativeapps.design</span>
                    </a>
                </div>
            </div>
            <div className={footerStyles.infoContainer}>
                <div className={footerStyles.footerItem}>
                    <a href="https://creativeapps.design">
                        <img alt="github" src='/images/logo.svg' className={footerStyles.image} />
                        <span>CREATIVE APPS</span>
                    </a>
                </div>
                <div className={footerStyles.footerItem}>
                    <a href="https://github.com/DesignCreativeApps">
                        <img alt="github" src='/images/github.svg' width="20" className={footerStyles.image} />
                        <span>Github</span>
                    </a>
                </div>
            </div>
        </div>
        <div className={footerStyles.copyright}>
            © 2020 Creative Apps
        </div>
    </div>
)

export default Footer;
