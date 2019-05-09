import React, { Component } from 'react';

import './PersonPage.css';
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicator from "../ErrorIndicator";

export default class PersonPage extends Component {
  state = {
    selectedPerson: null,
    error: false
  };
  onSelectPerson = (id) => {
    this.setState({
      selectedPerson: id
    });
  };
  componentDidCatch() {
    this.setState({
      error: true
    });
  };

  render() {
    const { selectedPerson, error } = this.state;
    if (error) {
      return <ErrorIndicator />
    }
    return (
      <div>
        <div className='row mb-2'>
          <div className='col-md-6'>
            <ItemList onSelectPerson = { this.onSelectPerson } />
          </div>
          <div className='col-md-6'>
            <PersonDetails selectedPerson = { selectedPerson } />
          </div>
        </div>
      </div>
    );
  };
};
