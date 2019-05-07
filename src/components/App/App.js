import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './App.css';

export default class App extends Component {
  state = {
    selectedPerson: null
  };
  onSelectPerson = (id) => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    const { selectedPerson } = this.state;
    return (
      <div className='container'>
        <Header />
        <RandomPlanet />
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
  }
};
