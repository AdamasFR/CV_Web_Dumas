import React, {Component} from '../../../node_modules/react';
import './ButtonIcon.scss'

export default class ButtonIcon extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <a class="button" rel="noopener" href={this.props.lien} target="_blank"
            aria-label="Profil {this.props.icon}">
          <span class="icon is-large">
              <ion-icon name={this.props.icon}></ion-icon>
          </span>
      </a>;
    }
  }