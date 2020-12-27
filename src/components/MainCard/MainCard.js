import React, {Component} from '../../../node_modules/react';
import ExperienceCard from '../ExperienceCard/index';
import ButtonIcon from '../ButtonIcon/index';

import './MainCard.scss'
import photoProfil from '../../images/profile_opt.png';
import michelinLogo from '../../images/logos/michelin.png';
import iutClermontLogo from '../../images/logos/www.iut-clermont.png';
import harvestLogo from '../../images/logos/harvest.fr.png';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as mainCardActions from "../../store/mainCard/actions";
export default class MainCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <section id="idCard" class="hero is-medium is-primary-inverted is-bold">
        <div class="hero-body">
          <div class="container">
              <div class="columns">
                  <div class="column is-2 is-hidden-touch is-hidden-desktop-only dontPrint"></div>
                  <div id="photosAndButtons" class="column is-3-widescreen is-3-tablet">
                      <div class="card">
                          <div class="card-image">
                              <figure id="photoProfil" class="image">
                                  <img src={photoProfil} alt="Anthony Dumas"/>
                              </figure>
                          </div>
                          <div class="card-content">
                              <div class="media">
                                  <div class="media-content">
                                      <p id="buttonsUnderPhoto" class="buttons are-large ">
                                          <ButtonIcon 
                                          icon="fab icon-github-alt"
                                          lien="https://github.com/AdamasFR"/>

                                          <ButtonIcon
                                          icon="fab icon-linke-square"
                                          lien="https://www.linkedin.com/in/anthonyyvondumas/"/>

                                          <ButtonIcon
                                          icon="fab icon-twit"
                                          lien="https://www.twitter.com/anthony__dumas"/>
                                      </p>
                                      <p id="boutonCV" class="buttons are-large">
                                          <a class="button is-fullwidth" rel="noopener"
                                              href="./asset/anthony-dumas-cv.pdf" >
                                              <span class="icon">
                                                  <i class="fab icon-file-pdf-o"></i>
                                              </span>
                                              <span>Mon CV</span>
                                          </a>
                                      </p>
                                  </div>
                              </div>

                              <div class="content">

                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="column is-7" id="experiences">
                      <span class="title">Experience</span>
                      <ExperienceCard 
                      nomEntreprise="Harvest"
                      lieuEntreprise="Clermont-Ferrand"
                      descriptionEmploi="Développement de simulateurs bancaires responsives."
                      title="Développeur Full Stack"
                      date="depuis 2016"
                      lienLogo="https://www.harvest.fr"
                      logo={harvestLogo}
                      tags={["Java EE","Angular","OpenAPI","jQuery","Spring"]}/>
                      
                      <ExperienceCard 
                      nomEntreprise="Michelin"
                      lieuEntreprise="Clermont-Ferrand"
                      descriptionEmploi="Stage de fin d'étude DUT, etude du marché des objets connectés, création d'un prototype embarqué."
                      title="Développeur Internet des Objets"
                      date="2015"
                      lienLogo="https://www.michelin.fr"
                      logo={michelinLogo}
                      tags={["MongoDB","Node.js","Word","Powerpoint"]}/>

                      <span class="title">Education</span>

                      <ExperienceCard 
                      nomEntreprise="IUT du Puy en Velay"
                      lieuEntreprise="Le Puy en Velay"
                      descriptionEmploi="Programmation 3D temps réel, Web, infographie 3D, retouche d'image."
                      title="DUT Informatique - Imagerie Numérique"
                      date="Promotion 2015"
                      lienLogo="https://www.iut-clermont.fr"
                      logo={iutClermontLogo}
                      tags={["Unity","3DSMax","Photoshop","C++","Python","Web Design"]}/>
                  </div>
              </div>
          </div>
          </div>
  </section>;
    }
  }
// export default connect(
//     ({ mainCard }) => ({ ...mainCard }),
//     dispatch => bindActionCreators({ ...mainCardActions }, dispatch)
//   )( mainCard );