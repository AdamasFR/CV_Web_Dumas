import React, {Component} from '../../../node_modules/react';
import './ExperienceCard.scss'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as MenuComponentActions from "../../store/MenuComponent/actions";

export default class ExperienceCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div class="card-content">
      <div class="media">
          <div class="media-left">
              <a href={this.props.lienLogo}>
                  <figure class="image is-48x48">
                      <img src={this.props.logo} alt="Logo Entreprise"/>
                  </figure>
              </a>
          </div>
          <div class="media-content">
              <p class="title is-4">{this.props.title}</p>
              <p class="subtitle is-6">{this.props.nomEntreprise} - {this.props.lieuEntreprise} - ({this.props.date})</p>
              <div class="tags">
                {this.props.tags.map(function(name, index){
                    return <span key={ index } class="tag">{name}</span>;
                  })}
              </div>
          </div>
      </div>
      <div class="content">
            {this.props.descriptionEmploi}
      </div>
  </div>
    }
  }
// export default connect(
//     ({ MenuComponent }) => ({ ...MenuComponent }),
//     dispatch => bindActionCreators({ ...MenuComponentActions }, dispatch)
//   )( MenuComponent );