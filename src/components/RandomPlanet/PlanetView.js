import React from 'react';

const PlanetView = ({ planet }) => {
  const { pictureId, planetName, planetPopulation, planetRotationPeriod, planetDiameter } = planet;
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default PlanetView;
