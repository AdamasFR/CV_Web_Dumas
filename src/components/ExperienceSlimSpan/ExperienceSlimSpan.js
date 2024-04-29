import React, { Component } from 'react';


export default class ExperienceSlimSpan extends Component {
   render() {
      var data = this.props.data;
      var imgSrc = data.logo;
      return <div className="mission card-content">
         <div className="media">
            <div className="media-left">
               <a href={data.url} target="_blank" rel="noreferrer">
                  <figure className="image is-24x24">
                     <img src={imgSrc} alt="Logo Entreprise" />
                  </figure>
               </a>
            </div>
            <div className="media-content">
               <p className="subtitle is-6">{data.occupation} {data.situation} <strong>{data.entreprise}</strong> - {data.duration}</p>
            </div>
         </div>
      </div>
   }
};
