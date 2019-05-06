import React, {Component} from 'react'

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {}
  };
  constructor() {
    super();
    this.getRandomPlanet()
  }
  onPlaneLoad = (planet) => {
    this.setState({ ...planet });
  };
  getRandomPlanet() {
    const id = Math.floor(Math.random() * 20) + 1;
    this.swapiService.getPlanet(id)
      .then(this.onPlaneLoad);
  }

  render() {
    const { pictureId, planetName, planetPopulation, planetDiameter, planetRotationPeriod } = this.state;
    return (
        <div className='random-planet jumbotron rounded'>
          <img className='planet-image'
               src={`https://starwars-visualguide.com/assets/img/planets/${pictureId}.jpg`} alt="planet" />
          <div>
            <h4>{ planetName }</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className='term'>Population</span>
                <span>{ planetPopulation }</span>
              </li>
              <li className="list-group-item">
                <span className='term'>Rotation period</span>
                <span>{ planetRotationPeriod }</span>
              </li>
              <li className="list-group-item">
                <span className='term'>Diameter</span>
                <span>{ planetDiameter }</span>
              </li>
            </ul>
          </div>
        </div>
    );
  };
}
