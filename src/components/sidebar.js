import React from "react";
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import Language from './language';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { fallDown as Menu } from "react-burger-menu";

class SideBar extends React.Component {
    state = {
        menuOpen: false
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    openForm = () => {
        this.typeformEmbed.typeform.open();
        this.setState({menuOpen: false})
    }
    render() {
        return (
            <div>
                <Menu
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    width="100%"
                >
                    <Link className="menu-item" to="/">
                        Home
                    </Link>
                    <Link className="menu-item" to="/team">
                        <FormattedMessage id="nav.about" />
                    </Link>

                    <Link className="menu-item" to="/how">
                        <FormattedMessage id="nav.how" />
                    </Link>

                    <Link className="menu-item" to="/portfolio">
                        <FormattedMessage id="nav.portfolio" />
                    </Link>
                    <a onClick={this.openForm}>
                        <FormattedMessage id="nav.contact" />
                    </a>
                    <div>
                        <Language/>
                    </div>
                </Menu>
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
            </div>
        );
    }
};

export default SideBar;
