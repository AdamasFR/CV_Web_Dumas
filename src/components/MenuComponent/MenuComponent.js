import './MenuComponent.scss';

import { FormattedMessage, injectIntl } from 'react-intl';

import React, { Component } from '../../../node_modules/react';
import { URL_add_parameter } from '../../services/parameters.service';


class MenuComponent extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  honhonhon() {
    window.location.href = URL_add_parameter(window.location.href, "lang", "fr");
  }

  heygovna() {
    window.location.href = URL_add_parameter(window.location.href, "lang", "en");
  }


  render() {
    const buttonsLanguagesMessage = this.props.intl.messages.global.buttons.languages;
    return <section id="menu" class="hero is-primary dontPrint">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title">
                <FormattedMessage id="title" />
              </h1>
              <h2 class="subtitle">
                <FormattedMessage id="subtitle" />
              </h2>
            </div>
            <div class="column is-hidden-touch">
              <div id="langButtons">
                <div class="buttons">
                  <span className="button is-light" onClick={this.honhonhon} aria-label="Visiter le site en Français">
                    {buttonsLanguagesMessage.fr}
                  </span>
                  <span className="button is-light" onClick={this.heygovna} aria-label="Visit the website in English">
                    {buttonsLanguagesMessage.en}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>;
  }
}
// export default connect(
//     ({ MenuComponent }) => ({ ...MenuComponent }),
//     dispatch => bindActionCreators({ ...MenuComponentActions }, dispatch)
//   )( MenuComponent );

export default injectIntl(MenuComponent)