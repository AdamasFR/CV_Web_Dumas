import './ContactCard.scss';

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

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
    return <section className="hero is-info dontPrint" id="contact">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            {contactCardMessage.title}
          </h1>
          <h2 className="subtitle">
            {contactCardMessage.subtitle}
          </h2>
          <div className="columns">
            {contactCardMessage.ways.map(function (button, index) {
              return <ContactButton key={index}
                data={button} />;
            })}
          </div>
        </div>
      </div>
    </section>;
  }
}

export default injectIntl(ContactCard)