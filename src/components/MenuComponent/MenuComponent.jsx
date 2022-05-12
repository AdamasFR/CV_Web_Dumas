import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { urlAddParameter } from "./../../services/utils.service";
import { langFile } from "../../index";

import "./MenuComponent.scss";

export default class MenuComponent extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  changeLanguage(lang) {
    window.location.href = urlAddParameter(window.location.href, "lang", lang);
  }

  render() {
    let experienceActuelle = langFile.experiences[0];
    return (
      <header>
        <div className="row">
          <div className="title">
            <FormattedMessage id="title" />
          </div>
          <div id="langButtons">
            <button
              className="button is-light fr"
              onClick={() => this.changeLanguage("fr")}
            ></button>
            <button
              className="button is-light ie"
              onClick={() => this.changeLanguage("en")}
            ></button>
          </div>
        </div>
        <div className="row">
          <div className="subtitle">
            <FormattedMessage
              id="subtitle"
              values={{
                role: experienceActuelle.occupation,
                entreprise: experienceActuelle.entreprise,
              }}
            />
          </div>
        </div>
      </header>
    );
  }
}
