import { PureComponent, React } from 'react';

import { langFile } from '../../index';
import ExperienceCard from '../ExperienceCard/ExperienceCard';


//import { Test } from './JobsComponent.styles';

class JobsComponent extends PureComponent {
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

    let experiences = langFile.experiences;

    return (
      <div className="JobsComponentWrapper">
        {experiences.map((element, i) => {
          console.log(element);
          return <ExperienceCard key={i} experience={element} />;
        })}
      </div>
    );
  }
}

JobsComponent.propTypes = {
  // bla: PropTypes.string,
};

JobsComponent.defaultProps = {
  // bla: 'test',
};

export default JobsComponent;
