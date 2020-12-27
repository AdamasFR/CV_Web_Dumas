import React, {Component} from '../../../node_modules/react';
import './ContactButton.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as contactButtonActions from "../../store/contactButton/actions";
export default class ContactButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div class="column is-3">
              <a target="_blank" rel="noreferrer noopener" href={this.props.link} class="hide button is-large is-fullw-mobile"
                  title={this.props.title}>
                  <span class="icon">
                      <i class={"fab " + this.props.icon}></i>
                  </span>
                  <span>{this.props.name}</span>
              </a>
          </div>;
    }
  }
// export default connect(
//     ({ contactButton }) => ({ ...contactButton }),
//     dispatch => bindActionCreators({ ...contactButtonActions }, dispatch)
//   )( contactButton );