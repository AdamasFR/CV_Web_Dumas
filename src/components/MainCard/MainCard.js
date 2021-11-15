import React, {Component} from '../../../node_modules/react';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl'

import ExperienceCard from '../ExperienceCard/index';
import ButtonIcon from '../ButtonIcon/index';

import './MainCard.scss'
import photoProfil from '../../images/profile_opt.png';

class MainCard extends Component {
    render() {
        var metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor.setAttribute("content", window.matchMedia('(prefers-color-scheme: dark)').matches ?"#25444b" : "#5c9ead");
        const experienceCardMessage = this.props.intl.messages.experienceCard;
      return <section id="idCard" class="hero is-medium is-primary-inverted is-bold">
        <div class="hero-body">
          <div class="container">
              <div class="columns">
                  <div class="column is-2 is-hidden-touch is-hidden-desktop-only dontPrint"></div>
                  <div id="photosAndButtons" class="column is-3-widescreen is-4-tablet">
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
                                          icon="logo-github"
                                          lien="https://github.com/AdamasFR"/>

                                          <ButtonIcon
                                          icon="logo-linkedin"
                                          lien="https://www.linkedin.com/in/anthonyyvondumas/"/>

                                          <ButtonIcon
                                          icon="logo-twitter"
                                          lien="https://www.twitter.com/adamas_fr"/>
                                      </p>
                                      <p id="boutonCV" class="buttons are-large">
                                          <a class="button is-fullwidth" rel="noreferrer noopener" target="_blank"
                                              href="https://files.adm.ink/anthony-dumas-cv.pdf" >
                                              <span class="icon">
                                                  <i class="fab icon-file-pdf-o"></i>
                                              </span>
                                              <span><FormattedMessage id="curriculumVitaeLink"/></span>
                                          </a>
                                      </p>
                                  </div>
                              </div>

                              <div class="content">

                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="column is-9-tablet is-7-widescreen" id="experiences">
                      <span class="title">{experienceCardMessage.title.experience}</span>
                      {experienceCardMessage.experiences.map(function(experience, index){
                    return <ExperienceCard 
                    data={experience}/>;
                  })}
                    <span class="title">{experienceCardMessage.title.education}</span>
                    {experienceCardMessage.education.map(function(education, index){
                    return <ExperienceCard 
                    data={education}/>;
                  })}
                  </div>
              </div>
          </div>
          </div>
  </section>;
    }
  }


export default injectIntl(MainCard)