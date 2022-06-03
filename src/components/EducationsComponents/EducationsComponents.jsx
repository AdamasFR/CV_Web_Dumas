import React, { PureComponent } from 'react';

import { langFile } from '../../index';
import ExperienceCard from '../ExperienceCard/ExperienceCard';


//import { Test } from './OccupationsComponent.styles';

class EducationsComponents extends PureComponent {
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

    let education = langFile.education;

    return (
      <div className="JobsComponentWrapper">
        {education.map((element, i) => {
          console.log(element);
          return <ExperienceCard key={i} experience={element} />;
        })}
      </div>
    );
  }
}

EducationsComponents.propTypes = {
  // bla: PropTypes.string,
};

EducationsComponents.defaultProps = {
  // bla: 'test',
};

export default EducationsComponents;
