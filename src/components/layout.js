/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SideBar from './sidebar'
import Header from "./header"
import Footer from "./footer"
import CookieConsent from 'react-cookie-consent';
import { FormattedMessage } from "gatsby-plugin-intl";
import "./layout.css"
import './styles.css'




const Layout = ({ children }) => {
	return (
		<>
			<div id="outer-container">
				<Header />
				<SideBar />
				<main id="page-wrap">{children}</main>
				<CookieConsent
					location="bottom"
					style={{ background: "#373a47", opacity: 0.8 }}
					buttonText={<FormattedMessage id="accept"/>}
					enableDeclineButton
					declineButtonText={<FormattedMessage id="decline"/>}
					cookieName="gatsby-gdpr-google-analytics">
						{<FormattedMessage id="cookies"/>}
				</CookieConsent>
			</div>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
