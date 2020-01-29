import React from 'react';
import { globalHistory } from "@reach/router";
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import headerStyles from './header.module.css'


class Header extends React.Component {
	state = {
		hasScrolled: false,
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	openForm = () => {
		this.typeformEmbed.typeform.open();
	}

	handleScroll = (event) => {
		const scrollTop = window.pageYOffset

		if (scrollTop > 50) {
			this.setState({ hasScrolled: true })
		} else {
			this.setState({ hasScrolled: false })
		}
	}

	render() {
		const isHome = globalHistory.location.pathname === '/en/' || globalHistory.location.pathname === '/it/'
		let headerClasses = this.state.hasScrolled && isHome ? `${headerStyles.header} ${headerStyles.headerScrolled}` : headerStyles.header;
		return (
			<nav className={headerClasses}>
				<div className={headerStyles.headerContainer}>
					<div className={headerStyles.headerGroup}>
						<Link to="/"><img alt="logo" className={headerStyles.headerLogo} src='/images/logo.svg' /></Link>
						<ul className={headerStyles.navLinks}>
							<li>
								<Link to="/team"><FormattedMessage id="nav.about" /></Link>
							</li>
							<li>
								<Link to="/team"><FormattedMessage id="nav.how" /></Link>
							</li>
							<li>
								<Link to="/portfolio"><FormattedMessage id="nav.portfolio" /></Link>
							</li>
							<li>
								<button className="button" onClick={this.openForm}><FormattedMessage id="nav.contact" /></button>
							</li>
						</ul>

					</div>
				</div>
				<ReactTypeformEmbed
					popup
					autoOpen={false}
					url="https://lucacimonetti.typeform.com/to/mezdZ7"
					hideHeaders
					hideFooter
					buttonText="Go!"
					style={{ top: 100 }}
					ref={tf => {
						this.typeformEmbed = tf;
					}}
				/>
			</nav>
		)
	}
}

export default Header
