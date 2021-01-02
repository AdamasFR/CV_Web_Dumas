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
        var data = this.props.data;
        var imgSrc = data.logo;
      return <div class="card-content">
      <div class="media">
          <div class="media-left">
              <a href={data.url}>
                  <figure class="image is-48x48">
                      <img src={imgSrc} alt="Logo Entreprise"/>
                  </figure>
              </a>
          </div>
          <div class="media-content">
              <p class="title is-4">{data.occupation}</p>
              <p class="subtitle is-6">{data.entreprise} - {data.location} - {data.duration}</p>
              <div class="tags">
                {data.tags.map(function(name, index){
                    return <span key={ index } class="tag">{name}</span>;
                  })}
              </div>
          </div>
      </div>
      <div class="content">
            {data.description}
      </div>
      {data.commentaire ? <div class="comment">
            {data.commentaire}
      </div> : ''}
      
  </div>
    }
  }
// export default connect(
//     ({ MenuComponent }) => ({ ...MenuComponent }),
//     dispatch => bindActionCreators({ ...MenuComponentActions }, dispatch)
//   )( MenuComponent );