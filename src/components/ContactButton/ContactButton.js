import './ContactButton.scss';

import React, { Component } from '../../../node_modules/react';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as contactButtonActions from "../../store/contactButton/actions";
export default class ContactButton extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    const data = this.props.data;
    return <div class="column is-3">
      <a target="_blank" rel="noreferrer noopener" href={data.url} class="hide button is-large is-fullw-mobile"
        title={`Go to ${data.title}`}>
        <span class="icon">
          <ion-icon name={data.icon}></ion-icon>
        </span>
        <span>{data.title}</span>
      </a>
    </div>;
  }
}
// export default connect(
//     ({ contactButton }) => ({ ...contactButton }),
//     dispatch => bindActionCreators({ ...contactButtonActions }, dispatch)
//   )( contactButton );