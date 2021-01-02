import React, {Component} from '../../../node_modules/react';
import { injectIntl } from 'react-intl'

import ExperienceCard from '../ExperienceCard/index';
import ButtonIcon from '../ButtonIcon/index';

import './MainCard.scss'
import photoProfil from '../../images/profile_opt.png';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as mainCardActions from "../../store/mainCard/actions";
class MainCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
        const experienceCardMessage = this.props.intl.messages.experienceCard;
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
                                          <a class="button is-fullwidth" rel="noopener" target="_blank"
                                              href="https://files.adm.ink/anthony-dumas-cv.pdf" >
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
                      <span class="title">{experienceCardMessage.title}</span>
                      {experienceCardMessage.experiences.map(function(experience, index){
                    return <ExperienceCard 
                    nomEntreprise={experienceCardMessage.experiences[index].entreprise}
                    lieuEntreprise={experienceCardMessage.experiences[index].location}
                    descriptionEmploi={experienceCardMessage.experiences[index].description}
                    title={experienceCardMessage.experiences[index].ocupation}
                    date={experienceCardMessage.experiences[index].duration}
                    lienLogo={experienceCardMessage.experiences[index].url}
                    logo={experienceCardMessage.experiences[index].logo}
                    tags={experienceCardMessage.experiences[index].tags}/>;
                  })}
                    <span class="title">Education</span>
                    {experienceCardMessage.education.map(function(experience, index){
                    return <ExperienceCard 
                    nomEntreprise={experienceCardMessage.education[index].entreprise}
                    lieuEntreprise={experienceCardMessage.education[index].location}
                    descriptionEmploi={experienceCardMessage.education[index].description}
                    title={experienceCardMessage.education[index].ocupation}
                    date={experienceCardMessage.education[index].duration}
                    lienLogo={experienceCardMessage.education[index].url}
                    logo={experienceCardMessage.education[index].logo}
                    tags={experienceCardMessage.education[index].tags}
                    commentaire={experienceCardMessage.education[index].commentaire}/>;
                  })}
                  </div>

                  
              </div>
          </div>
          </div>
  </section>;
    }
  }


export default injectIntl(MainCard)
// export default connect(
//     ({ mainCard }) => ({ ...mainCard }),
//     dispatch => bindActionCreators({ ...mainCardActions }, dispatch)
//   )( mainCard );