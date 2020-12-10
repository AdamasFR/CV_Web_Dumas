import React, {Component} from '../../../node_modules/react';
import './ButtonIcon.scss'

export default class ButtonIcon extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <a class="button" rel="noopener" href={this.props.lien}
            aria-label="Profil {this.props.icon}">
          <span class="icon is-large">
              <i class={this.props.icon}></i>
          </span>
      </a>;
    }
  }