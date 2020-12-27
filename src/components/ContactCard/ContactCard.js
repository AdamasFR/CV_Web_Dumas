import React, {Component} from '../../../node_modules/react';
import './ContactCard.scss'

import ContactButton from '../ContactButton/index';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as contactCardActions from "../../store/contactCard/actions";
export default class ContactCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <section class="hero is-info dontPrint" id="contact">
      <div class="hero-body">
          <div class="container">
              <h1 class="title">
                  Contact
              </h1>
              <h2 class="subtitle">
                  Vous pouvez me contacter de nombreuses façons !
              </h2>
              <div class="columns">
                <ContactButton
                  name="Courriel"
                  title="Contactez moi par mail a anthony arobase dumas point cc !"
                  link="mailto:anthony@dumas.cc"
                  icon="icon-envelope-open"/>

                <ContactButton
                name="LinkedIn"
                title="Page LinkedIn"
                link="https://www.linkedin.com/in/anthonyyvondumas/"
                icon="icon-linke-square"/>

                <ContactButton
                name="Telegram"
                title="Contactez moi via Telegram!"
                link="https://t.me/adamas_FR"
                icon="icon-teleg"/>
              </div>
          </div>
      </div>
  </section>;
    }
  }
// export default connect(
//     ({ ContactCard }) => ({ ...contactCard }),
//     dispatch => bindActionCreators({ ...contactCardActions }, dispatch)
//   )( contactCard );