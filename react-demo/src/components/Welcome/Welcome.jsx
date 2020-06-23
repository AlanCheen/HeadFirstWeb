import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Welcome.styles';
import './style.css'

class Welcome extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Welcome will mount');
  }

  componentDidMount = () => {
    console.log('Welcome mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Welcome will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Welcome will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Welcome did update');
  }

  componentWillUnmount = () => {
    console.log('Welcome will unmount');
  }

  render () {

    // const styles = {
    //   width : 12,
    //   color : '#0f0',
    // }

    return (
      <div className="WelcomeWrapper">
        Test content
      </div>
    );
  }
}

Welcome.propTypes = {
  // bla: PropTypes.string,
};

Welcome.defaultProps = {
  // bla: 'test',
};

export default Welcome;
