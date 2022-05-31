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

  componentWillMount = () => {
    console.log("MainBoardComponent will mount");
  };

  componentDidMount = () => {
    console.log("MainBoardComponent mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("MainBoardComponent will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("MainBoardComponent will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("MainBoardComponent did update");
  };

  componentWillUnmount = () => {
    console.log("MainBoardComponent will unmount");
  };

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
