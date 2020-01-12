import React from 'react';
import Link from 'gatsby-link';
import { globalHistory } from "@reach/router";
import { ReactTypeformEmbed } from 'react-typeform-embed';
import './Header.css'

class Header extends React.Component {
	state = {
		hasScrolled: false
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
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
		let headerClasses;
		console.log(globalHistory.location)
		if(globalHistory.location.pathname != '/') {
			headerClasses = "Header HeaderNormal";
			console.log('normal header');
		}
		else {
			headerClasses = this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header';
			console.log('other header');
		}

		return (
			<nav className={headerClasses}>
				<div className="HeaderGroup">
					<Link to="/"><img src='/images/logo-designcode.svg' width="30" /></Link>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/team">Team</Link>
					<Link to="/blog">Blog</Link>

					<button onClick={this.openForm}>Contact Us</button>
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
