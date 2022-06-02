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
        <img
          width="20"
          src={this.props.experience.logo}
          alt={"logo " + this.props.experience.entreprise}
        />
        <span id="occupation">{this.props.experience.occupation}</span>
        <span id="occupation">{this.props.experience.entreprise}</span>
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
