import './MenuComponent.scss';

import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

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
    const currentJob = this.props.intl.messages.experienceCard.experiences[0];
    return <section id="menu" className="hero is-primary dontPrint">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title">
                <FormattedMessage id="title" />
              </h1>
              <h2 className="subtitle">
                {currentJob.occupation} @ {currentJob.entreprise}
              </h2>
            </div>
            <div className="column is-hidden-touch">
              <div id="langButtons">
                <div className="buttons">
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