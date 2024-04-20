import './ExperienceCard.scss';

import React, { Component } from 'react';


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
        return <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <a href={data.url} target="_blank" rel="noreferrer">
                        <figure className="image is-48x48">
                            <img src={imgSrc} alt="Logo Entreprise" />
                        </figure>
                    </a>
                </div>
                <div className="media-content">
                    <p className="title is-4">{data.occupation}</p>
                    <p className="subtitle is-6"><strong>{data.entreprise}</strong> - {data.location} - {data.duration}</p>
                    <div className="tags">
                        {data.tags.map(function (name, index) {
                            return <span key={index} className="tag">{name}</span>;
                        })}
                    </div>
                    <div className='description content'>
                        <div dangerouslySetInnerHTML={{ __html: data.description }} />
                    </div>
                    {data.commentaire ? <div className="comment">
                        {data.commentaire}
                    </div> : ''}
                </div>
            </div>

        </div>
    }
}
// export default connect(
//     ({ MenuComponent }) => ({ ...MenuComponent }),
//     dispatch => bindActionCreators({ ...MenuComponentActions }, dispatch)
//   )( MenuComponent );
