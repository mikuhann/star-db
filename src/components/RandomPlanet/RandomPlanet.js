import React, {Component} from 'react'

import Spinner from '../Spinner';
import PlanetView from './PlanetView';
import ErrorIndicator from '../ErrorIndicator';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };
  componentDidMount() {
    this.getRandomPlanet();
    setInterval(this.getRandomPlanet, 5000);
  }

  onPlanetLoad = (planet) => {
    this.setState({
      planet,
      loading: false});
  };
  onError = (err) => {
    this.setState({
      loading: false,
      error: true
    });
  };
  getRandomPlanet = () => {
    const id = Math.floor(Math.random() * 20) + 3;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoad)
      .catch(this.onError)
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorBlock = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const planetView = hasData ? <PlanetView planet = { planet }/> : null;
    return (
      <React.Fragment>
        { errorBlock }
        { spinner }
        { planetView }
      </React.Fragment>
    );
  };
}
