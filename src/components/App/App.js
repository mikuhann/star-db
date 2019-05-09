import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PersonPage from '../PersonPage';
import './App.css';
import SwapiService from "../../services/SwapiService";

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <RandomPlanet />
        <PersonPage />
      </div>
    );
  }
};
