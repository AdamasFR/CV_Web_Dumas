import React, { PureComponent } from 'react';

import { langFile } from '../../index';


//import { Test } from './ExperiencesComponent.styles';

class ExperiencesComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log("ExperiencesComponent will mount");
  };

  componentDidMount = () => {
    console.log("ExperiencesComponent mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("ExperiencesComponent will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("ExperiencesComponent will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("ExperiencesComponent did update");
  };

  componentWillUnmount = () => {
    console.log("ExperiencesComponent will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    let experiences = langFile.experiences;
    return <div className="ExperiencesComponentWrapper"></div>;
  }
}

ExperiencesComponent.propTypes = {
  // bla: PropTypes.string,
};

ExperiencesComponent.defaultProps = {
  // bla: 'test',
};

export default ExperiencesComponent;
