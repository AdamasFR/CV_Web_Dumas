import React, {Component} from 'react';
import './ProjectCard.scss'

export default class ProjectCard extends Component {

    render() {
      return <div class="tile is-vertical is-4">
              <div class="tile">
                  <div class="tile is-parent">
                      <article class="tile is-child notification is-info">
                          <p class="title">{this.props.title}</p>
                          <a href={this.props.href} rel="noopener">
                              <figure class="image is-4by3">
                                  <img src={this.props.image}
                                      alt={this.props.imgAlt}
                                      title={this.props.imgTitle} />
                              </figure>
                          </a>
                      </article>
                  </div>
              </div>
          </div>;
    }
  }