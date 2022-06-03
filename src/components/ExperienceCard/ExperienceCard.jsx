import './ExperienceCard.scss';

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';


//import { Test } from './ExperienceCard.styles';

class ExperienceCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="ExperienceCardWrapper">
        <div className="logo-div">
          <img
            className="logo"
            src={this.props.experience.logo}
            alt={"logo " + this.props.experience.entreprise}
          />
        </div>
        <div className="info-div">
          <span className="occupation">{this.props.experience.occupation}</span>
          <div className="info-bar">
            <span className="entreprise">
              {this.props.experience.entreprise}
            </span>
            <span className="separateur">-</span>
            <span className="duration">{this.props.experience.duration}</span>
            <span className="separateur">-</span>
            <span className="location">{this.props.experience.location}</span>
          </div>
        </div>
      </div>
    );
  }
}

ExperienceCard.propTypes = {
  experience: PropTypes.object,
};

ExperienceCard.defaultProps = {
  // bla: 'test',
};

export default ExperienceCard;
