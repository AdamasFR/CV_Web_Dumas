import './ProjectsCard.scss';

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import ProjectCard from '../ProjectCard/index';


class ProjectsCard extends Component {
  render() {
    const projectCardsMessage = this.props.intl.messages.projectCard;
    return <section id="projets" className="hero is-success">
      <div className="hero-body">
        <div className="container">
          <div className="grid">
            {projectCardsMessage.projects.map(function (projects, index) {
              return <ProjectCard key={index}
                data={projects}
              />;
            })}
          </div>
        </div>
      </div>
    </section>;
  }
}

export default injectIntl(ProjectsCard)