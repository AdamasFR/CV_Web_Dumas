import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./MenuComponent.scss";
import { utils } from "../../services/utils.service";

export default class MenuComponent extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  honhonhon() {
    window.location.href = utils.URL_add_parameter(
      window.location.href,
      "lang",
      "fr"
    );
  }

  heygovna() {
    window.location.href = utils.URL_add_parameter(
      window.location.href,
      "lang",
      "en"
    );
  }

  render() {
    return (
      <header>
        <div className="row">
          <div className="title">
            <FormattedMessage id="title" />
          </div>
          <div id="langButtons">
            <button
              className="button is-light fr"
              onClick={this.honhonhon}
            ></button>
            <button
              className="button is-light ie"
              onClick={this.heygovna}
            ></button>
          </div>
        </div>
        <div className="row">
          <div className="subtitle">
            <FormattedMessage
              id="subtitle"
              values={{
                role: "Software",
                entreprise: "Harvest",
              }}
            />
          </div>
        </div>
      </header>
    );
  }
}
// export default connect(
//     ({ MenuComponent }) => ({ ...MenuComponent }),
//     dispatch => bindActionCreators({ ...MenuComponentActions }, dispatch)
//   )( MenuComponent );
