import React, {Component} from '../../../node_modules/react';
import {FormattedMessage} from 'react-intl';
import './MenuComponent.scss'

const URL_add_parameter = function(url, param, value){
  var hash       = {};
  var parser     = document.createElement('a');

  parser.href    = url;

  var parameters = parser.search.split(/\?|&/);

  for(var i=0; i < parameters.length; i++) {
      if(!parameters[i])
          continue;

      var ary      = parameters[i].split('=');
      hash[ary[0]] = ary[1];
  }

  hash[param] = value;

  var list = [];  
  Object.keys(hash).forEach(function (key) {
      list.push(key + '=' + hash[key]);
  });

  parser.search = '?' + list.join('&');
  return parser.href;
}
export default class MenuComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    honhonhon() {
      window.location.href=URL_add_parameter(window.location.href, "lang", "fr");
    }

    heygovna() {
      window.location.href=URL_add_parameter(window.location.href, "lang", "en");
    }


    render() {
      return <section id="menu" class="hero is-primary dontPrint is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    <FormattedMessage id="title"/>
                </h1>
                <h2 class="subtitle">
                    <FormattedMessage id="subtitle"/>
                </h2>
            </div>
            <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light" onClick={this.honhonhon}>
            🇫🇷
          </a>
          <a class="button is-light" onClick={this.heygovna}>
            🇮🇪
          </a>
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
