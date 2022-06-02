import { PureComponent, React } from 'react';

import { langFile } from '../../index';
import ExperienceCard from '../ExperienceCard/ExperienceCard';


//import { Test } from './ExperiencesComponent.styles';

class ExperiencesComponent extends PureComponent {
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
      <div className="ExperiencesComponentWrapper">
        {experiences.map((element, i) => {
          console.log(element);
          return <ExperienceCard key={i} experience={element} />;
        })}
      </div>
    );
  }
}

ExperiencesComponent.propTypes = {
  // bla: PropTypes.string,
};

ExperiencesComponent.defaultProps = {
  // bla: 'test',
};

export default ExperiencesComponent;
