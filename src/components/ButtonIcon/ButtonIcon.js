import './ButtonIcon.scss';

import React, { Component } from '../../../node_modules/react';


export default class ButtonIcon extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return <a rel="noopener noreferrer" href={this.props.lien} target="_blank">
      <button className="button" aria-label="Bouton {this.props.aria-label}">
        <span class="icon">
          <ion-icon name={this.props.icon}></ion-icon>
        </span>
      </button>
    </a>;

  }
}