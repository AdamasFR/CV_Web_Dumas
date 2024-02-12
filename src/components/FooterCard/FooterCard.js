import './FooterCard.scss';

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import bulmaLogo from '../../images/made-with-bulma.webp';
import scalewayLogo from '../../images/scaleway_logo.webp';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as FooterCardActions from "../../store/FooterCard/actions";
class FooterCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
        const footerMessage = this.props.intl.messages.footer;
        return <footer className="footer has-text-centered dontPrint">
            <div className="container">
                <div className="columns">
                    <div className="column is-8-desktop is-offset-2-desktop">
                        <p>
                            <strong className="has-text-weight-semibold">
                                anthony-dumas.fr
                            </strong>
                        </p>
                        <p>
                            <small className="sosumi">
                                {footerMessage.legalNotice}
                            </small>
                        </p>
                        <p id="footer-credits">
                            <small>powered by</small>
                            <br />
                            <a rel="noopener noreferrer" href="http://bulma.io" alt="Framework used on this website" target="_blank">
                                <img src={bulmaLogo} alt="Made with Bulma" width="128" height="24" />
                            </a>
                            <br />
                            <a rel="noopener noreferrer" href="https://www.scaleway.com/fr/" aria-label="Link to scaleway.com" id="scaleway-logo" target="_blank">
                                <img src={scalewayLogo} alt="Powered by Scaleway" width="128" height="24" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>;
    }
}

export default injectIntl(FooterCard)