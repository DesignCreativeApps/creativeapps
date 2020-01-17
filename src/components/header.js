import React from 'react';
import Link from 'gatsby-link';
import { globalHistory } from "@reach/router";
import { ReactTypeformEmbed } from 'react-typeform-embed';
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
		let headerClasses = this.state.hasScrolled && globalHistory.location.pathname =='/' ? `${headerStyles.header} ${headerStyles.headerScrolled}` : headerStyles.header;
		return (	
			<nav className={headerClasses}>
				<div className={headerStyles.headerGroup}>
					<Link to="/"><img src='/images/logo-designcode.svg' width="30" /></Link>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/team">Team</Link>
					<Link to="/blog">Blog</Link>

					<button className="button" onClick={this.openForm}>Contact Us</button>
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
