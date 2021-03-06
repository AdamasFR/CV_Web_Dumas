import React, {Component} from '../../../node_modules/react';
import { injectIntl } from 'react-intl';

import './FooterCard.scss'

import bulmaLogo from '../../images/made-with-bulma.png';

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
      return <footer class="footer has-text-centered dontPrint">
      <div class="container">
          <div class="columns">
              <div class="column is-8-desktop is-offset-2-desktop">
                  <p>
                      <strong class="has-text-weight-semibold">
                          anthony-dumas.fr
                      </strong>
                  </p>
                  <p>
                      <small class="sosumi">
                          {footerMessage.legalNotice}
                      </small>
                  </p>
                  <p id="footer-credits">
                      <small>powered by</small>
                      <br/>
                      <a rel="noopener" href="http://bulma.io" alt="Framework used on this website">
                          <img src={bulmaLogo} alt="Made with Bulma" width="128" height="24"/>
                      </a>
                      <br/>
                      <a rel="noopener" href="https://www.linode.com/" alt="The Host of the Website" id="linode-logo">
                          <svg viewBox="0 0 230 90" width="115" height="30"><g fill="#FFF"><path d="M93.8 27.8l5.8-1.4v28c0 3.1.9 4.9 2.7 5.5-.9 1.7-2.4 2.6-4.6 2.6-2.6 0-4-1.8-4-5.5V27.8zM108.4 62V41.8h-3.2V37h9.1v25h-5.9zm3-34.6c.9 0 1.7.3 2.4 1s1 1.5 1 2.4c0 .9-.3 1.7-1 2.4s-1.5 1-2.4 1c-.9 0-1.7-.3-2.4-1s-1-1.5-1-2.4c0-.9.3-1.7 1-2.4s1.5-1 2.4-1zM137.1 62V47.6c0-2.1-.4-3.7-1.2-4.6-.8-1-2.1-1.5-4-1.5-.9 0-1.8.2-2.7.7-1 .5-1.7 1.1-2.3 1.8v18h-5.8V37.1h4.2l1.1 2.3c1.6-1.9 3.9-2.8 7-2.8 3 0 5.3.9 7 2.7 1.7 1.8 2.6 4.3 2.6 7.4V62h-5.9zM147.5 49.5c0-3.8 1.1-6.9 3.3-9.3 2.2-2.4 5.1-3.6 8.7-3.6 3.8 0 6.7 1.1 8.8 3.4 2.1 2.3 3.1 5.4 3.1 9.4s-1.1 7.1-3.2 9.5c-2.1 2.3-5 3.5-8.8 3.5-3.8 0-6.7-1.2-8.8-3.5-2-2.4-3.1-5.5-3.1-9.4zm6.1 0c0 5.5 2 8.2 5.9 8.2 1.8 0 3.2-.7 4.3-2.1 1.1-1.4 1.6-3.5 1.6-6.1 0-5.4-2-8.1-5.9-8.1-1.8 0-3.3.7-4.3 2.1-1.1 1.4-1.6 3.4-1.6 6zM192.1 62v-1.5c-.5.5-1.3 1-2.4 1.4-1.1.4-2.3.6-3.6.6-3.5 0-6.2-1.1-8.2-3.3-2-2.2-3-5.3-3-9.2 0-3.9 1.1-7.1 3.4-9.6s5.1-3.7 8.6-3.7c1.9 0 3.6.4 5.2 1.2v-10l5.8-1.4V62h-5.8zm0-19c-1.2-1-2.5-1.5-3.9-1.5-2.3 0-4.1.7-5.4 2.1-1.3 1.4-1.9 3.5-1.9 6.1 0 5.2 2.5 7.8 7.5 7.8.6 0 1.2-.2 2.1-.5.8-.3 1.3-.7 1.6-1V43zM226 51.3h-17.8c.1 2 .8 3.5 2 4.6 1.3 1.1 2.9 1.7 5.1 1.7 2.6 0 4.7-.7 6-2.1l2.3 4.4c-2 1.7-5.1 2.5-9.2 2.5-3.8 0-6.8-1.1-9-3.3-2.2-2.2-3.3-5.3-3.3-9.3 0-3.9 1.2-7.1 3.6-9.5 2.4-2.4 5.3-3.6 8.7-3.6 3.6 0 6.5 1.1 8.7 3.2 2.2 2.2 3.3 4.9 3.3 8.2.1.7-.1 1.7-.4 3.2zm-17.6-4.4h12.2c-.4-3.6-2.4-5.5-6-5.5-3.3.1-5.4 1.9-6.2 5.5z"></path></g><path fill="#004712" d="M65.9 47.4l-1 11.5-3.3-2.3.4-5.8v-.1-.1l-.1-.1-.1-.1-7.1-4.7.1-5.1 11.1 6.8zM48.5 59.9L43.4 56v.9c0 .2-.1.4-.2.5L39.4 60l4.2 3.4.1.1v.2l.2 4 4.7 3.9-.1-11.7zm-32.1 5l2.4 11.5 9.9 10.5L27 75.3 16.4 64.9zm9.3 1.7l-2.4-16.1-12-10 3.2 15.6 11.2 10.5zm-3.8-26l-3.3-22.8L4.8 9.2l4.5 21.5 12.6 9.9z"></path><path fill="#00B259" d="M75.7 41.2l-1.5 10.9-8.2 6.6 1-11.2 8.7-6.3zM49.6 59.9l.1 11.8 10.5-8.4.7-11.5-11.3 8.1zm-6.8 4.8L28 75.3l1.8 12.2 13.4-10.7-.4-12.1zm-.4-8l-.7-16-17.3 9.9 2.4 16.6 15.6-10.5zm-1.1-25.3l-.9-21.6-20.8 8L23 41l18.3-9.6z"></path><path d="M76.9 40c0-.1 0-.1 0 0v-.2s0-.1-.1-.1c0 0-.1 0-.1-.1l-12-6.7c-.2-.1-.4-.1-.5 0L54 39.1h-.1v.6l-.1 5.4-4.1-2.7c-.2-.1-.4-.1-.6 0L43 45.8l-.3-6v-.1-.1-.1-.1-.1h-.1l-6.2-4.1 5.8-3c.2-.1.3-.3.3-.5L41.4 9v-.1s0-.1-.1-.1c0 0 0-.1-.1-.1L25.5 1.1c-.1-.1-.2-.1-.3-.1L3.9 7.6s-.1 0-.1.1c0 0-.1 0-.1.1v.6l4.7 22.9c0 .1.1.2.2.3l6.4 5-4.7 2.2s-.1 0-.1.1c0 0 0 .1-.1.1v.2l3.6 17.2c0 .1.1.2.2.3l4.5 4.2-3 1.8-.1.1s0 .1-.1.1V63.2L18 76.5c0 .1.1.2.1.3l10.9 12h.1s.1 0 .1.1h.5l14.4-11.5c.1-.1.2-.3.2-.4l-.3-7.9 4.8 4s.1 0 .1.1h.5L61 64c.1-.1.2-.2.2-.4l.4-5.8 3.5 2.4h.4s.1 0 .1-.1l9.4-7.5c.1-.1.2-.2.2-.3L76.9 40c0 .1 0 .1 0 0zM66 58.7l1-11.2 8.8-6.3-1.5 10.9-8.3 6.6zm-4.4-2.1l.4-5.8v-.1-.1l-.1-.1-.1-.1-7.1-4.7.1-5.1 11.1 6.9-1 11.5-3.3-2.4zm-1.5 6.7l-10.5 8.4-.1-11.8 11.3-8.1-.7 11.5zM43.3 76.8L29.8 87.5 28 75.3l14.7-10.5.6 12zm-24.6-.4l-2.4-11.5L27 75.3l1.7 11.6-10-10.5zm-.2-58.6l3.3 22.8-12.5-9.9L4.8 9.2l13.7 8.6zm21.9-8l.9 21.6L23 41l-3.4-23.2 20.8-8zm2 46.9L26.8 67.1l-2.4-16.6 17.3-9.9.7 16.1zm-19.1-6.1l2.4 16.1-11.2-10.6-3.2-15.6 12 10.1zm20.5 13.1v-.1-.1l-.1-.1-4.2-3.4 3.8-2.6c.2-.1.2-.3.2-.5V56l5.1 3.9.1 11.8-4.7-3.9-.2-4.1z"></path></svg>
                      </a>
                  </p>
                  <p class="dark-theme-only">
                      <small>
                        {footerMessage.darkThemeNotice}
                      </small>
                  </p>
              </div>
          </div>
      </div>
  </footer>;
    }
  }

  export default injectIntl(FooterCard)