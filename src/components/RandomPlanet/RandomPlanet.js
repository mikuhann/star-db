import React, {Component} from 'react'

import Spinner from '../Spinner';
import PlanetView from './PlanetView';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };
  constructor() {
    super();
    this.getRandomPlanet()
  }
  onPlanetLoad = (planet) => {
    this.setState({
      planet,
      loading: false});
  };
  getRandomPlanet() {
    const id = Math.floor(Math.random() * 20) + 1;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoad)
  }

  render() {
    const { planet, loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const planetView = !loading ? <PlanetView planet = { planet }/> : null;
    return (
        <div className='random-planet jumbotron rounded'>
          { spinner }
          { planetView }
        </div>
    );
  };
}
