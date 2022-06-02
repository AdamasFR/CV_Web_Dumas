import React, { PureComponent } from 'react';

import ExperiencesComponent from '../ExperiencesComponent/ExperiencesComponent';


//import { Test } from './MainBoardComponent.styles';

class MainBoardComponent extends PureComponent {
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
      <div className="MainBoardComponentWrapper row">
        <ExperiencesComponent />
      </div>
    );
  }
}

MainBoardComponent.propTypes = {
  // bla: PropTypes.string,
};

MainBoardComponent.defaultProps = {
  // bla: 'test',
};

export default MainBoardComponent;
