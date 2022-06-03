import React, { PureComponent } from 'react';

import EducationsComponent from '../EducationsComponents/EducationsComponents';
import JobsComponent from '../JobsComponent/JobsComponent';


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
        <JobsComponent />
        <EducationsComponent />
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
