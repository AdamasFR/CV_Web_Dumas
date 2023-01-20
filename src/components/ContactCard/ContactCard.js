import React, {Component} from 'react';
import { injectIntl } from 'react-intl';

import './ContactCard.scss'

import ContactButton from '../ContactButton/index';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as contactCardActions from "../../store/contactCard/actions";
class ContactCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      const contactCardMessage = this.props.intl.messages.contactCard;
      return <section class="hero is-info dontPrint" id="contact">
      <div class="hero-body">
          <div class="container">
              <h1 class="title">
                {contactCardMessage.title}
              </h1>
              <h2 class="subtitle">
                {contactCardMessage.subtitle}
              </h2>
              <div class="columns">
              {contactCardMessage.ways.map(function(button, index){
                    return <ContactButton
                    data={button}/>;
                  })}
              </div>
          </div>
      </div>
  </section>;
    }
  }

  export default injectIntl(ContactCard)