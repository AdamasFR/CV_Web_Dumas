import React, {Component} from '../../../node_modules/react';
import './ProjectsCard.scss'

import ProjectCard from '../ProjectCard/index';

import imagePortfolioDev from '../../images/portfolio/vinyls.jpg';
import imageMichelin from '../../images/portfolio/computerNonSense.jpg';
import imagePortfolioPhoto from '../../images/portfolio/admPhotos.jpg';

export default class ProjectsCard extends Component {

    render() {
      return <section id="projets" class="hero is-primary">
      <div class="hero-body">
          <div class="container">
              <div class="tile is-ancestor">
                  <ProjectCard
                    title="Portfolio Developpeur"
                    href="//dev.dumas.cc"
                    imgAlt="Des mains parcourant des vinyles sur un étalage"
                    imgTitle="Photo by Florencia Viadana on Unsplash"
                    image={imagePortfolioDev}
                    />

                    <ProjectCard
                    title="IOT@Michelin"
                    href="https://prezi.com/m/o8ey8mmpnkvp/"
                    imgAlt="Une photo d'un micro ordinateur dans ma main"
                    imgTitle="Une photo d'un micro ordinateur dans ma main"
                    image={imageMichelin}
                    />

                    <ProjectCard
                    title="adm.photos"
                    href="//adm.photos"
                    imgAlt="Une photo du village de mon enfance"
                    imgTitle="Une photo du village de mon enfance"
                    image={imagePortfolioPhoto}
                    />
              </div>
          </div>
      </div>
  </section>;
    }
  }