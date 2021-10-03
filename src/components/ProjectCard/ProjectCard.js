import React, {Component} from 'react';
import './ProjectCard.scss'

export default class ProjectCard extends Component {

    render() {
        const data = this.props.data;
      return <div class="tile is-vertical is-4">
              <div class="tile">
                  <div class="tile is-parent">
                      <article class="tile is-child notification is-info">
                          <p class="title">{data.title}</p>
                          <a href={data.url} rel="noopener noreferrer" target="_blank">
                              <figure class="image is-4by3">
                                  <img src={data.image}
                                      alt={data.imgAlt}
                                      title={data.imgTitle} />
                              </figure>
                          </a>
                      </article>
                  </div>
              </div>
          </div>;
    }
  }