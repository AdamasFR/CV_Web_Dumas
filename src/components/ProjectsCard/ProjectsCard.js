import React, {Component} from '../../../node_modules/react';
import { injectIntl } from 'react-intl';

import './ProjectsCard.scss'

import ProjectCard from '../ProjectCard/index';

class ProjectsCard extends Component {
    render() {
      const projectCardsMessage = this.props.intl.messages.projectCard;
      return <section id="projets" class="hero is-primary">
      <div class="hero-body">
          <div class="container">
              <div class="tile is-ancestor">
                    {projectCardsMessage.projects.map(function(projects, index){
                    return <ProjectCard
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