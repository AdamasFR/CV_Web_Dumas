import './MainCard.scss';

import { FormattedMessage, injectIntl } from 'react-intl';

import React, { Component } from 'react';
import headshotFond from '../../images/headshot_fond.webp';
import headshotMain from '../../images/headshot_main.webp';
import ButtonIcon from '../ButtonIcon/index';
import ExperienceCard from '../ExperienceCard/index';


class MainCard extends Component {
    render() {
        var metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor.setAttribute("content", window.matchMedia('(prefers-color-scheme: dark)').matches ? "#25444b" : "#5c9ead");
        const experienceCardMessage = this.props.intl.messages.experienceCard;
        return <section id="idCard" class="hero is-medium is-info">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-2 is-hidden-touch is-hidden-desktop-only dontPrint"></div>
                        <div id="photosAndButtons" class="column is-3-widescreen is-4-tablet is-success">
                            <div class="card">
                                <div class="card-image">
                                    <figure id="photoProfil" class="image">
                                        <img fetchpriority="high" class="background" src={headshotFond} alt="Anthony Dumas" />
                                        <img fetchpriority="high" class="actor" src={headshotMain} alt="Anthony Dumas" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p id="buttonsUnderPhoto" class="field is-grouped">
                                                <p class="control">
                                                    <ButtonIcon
                                                        icon="logo-github"
                                                        aria-label="Github"
                                                        lien="https://github.com/AdamasFR" />
                                                </p>
                                                <p class="control">
                                                    <ButtonIcon
                                                        icon="logo-linkedin"
                                                        aria-label="Linkedin"
                                                        lien="https://www.linkedin.com/in/anthonyyvondumas/" />
                                                </p>
                                                <p class="control">
                                                    <ButtonIcon
                                                        icon="logo-mastodon"
                                                        aria-label="Mastodon"
                                                        lien="https://imaginair.es/@adamas" />
                                                </p>
                                            </p>
                                            <p id="boutonCV" class="field">
                                                <a rel="noreferrer noopener" target="_blank"
                                                    href="https://files.adm.ink/anthony-dumas-cv.pdf" >
                                                    <button class="button is-fullwidth" aria-label="Bouton Curriculum Vitæ">
                                                        <span class="icon">
                                                            <ion-icon name="document-attach-outline"></ion-icon>
                                                        </span>
                                                        <span><FormattedMessage id="curriculumVitaeLink" /></span>
                                                    </button>
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
                            {experienceCardMessage.experiences.map(function (experience, index) {
                                return <ExperienceCard
                                    data={experience} />;
                            })}
                            <span class="title">{experienceCardMessage.title.education}</span>
                            {experienceCardMessage.education.map(function (education, index) {
                                return <ExperienceCard
                                    data={education} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>;
    }
}


export default injectIntl(MainCard)
