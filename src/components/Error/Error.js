import React, {Component} from 'react';

import './Error.css';
import ErrorIndicator from "../ErrorIndicator";

export default class Error extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  };

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />
    }
    return (
      this.props.children
    );
  }
}
