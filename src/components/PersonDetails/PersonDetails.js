import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService';

import './PersonDetails.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.selectedPerson !== prevProps.selectedPerson) {
      this.updatePerson();
    }
  };
  updatePerson () {
    const { selectedPerson } = this.props;
    if (!selectedPerson) {
      return;
    }
    this.swapiService.getPerson(selectedPerson)
      .then((person) => {
        this.setState({
          person
        }, () => console.log(this.state));
      });
  };
  render() {
    if (!this.state.person) {
      return <span>Select person from list</span>
    }
    const { pictureId, personName, personGender, personBirthYear, personEyeColor } = this.state.person;
    return (
        <div className="person-details card">
          <img className='person-image'
              src={`https://starwars-visualguide.com/assets/img/characters/${pictureId}.jpg`} alt="person"/>
          <div className="card-body">
            <h4>{ personName }</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className='term'>Gender:</span>
                <span>{ personGender }</span>
              </li>
              <li className="list-group-item">
                <span className='term'>Birth year:</span>
                <span>{ personBirthYear }</span>
              </li>
              <li className="list-group-item">
                <span className='term'>Eye color:</span>
                <span>{ personEyeColor }</span>
              </li>
            </ul>
          </div>
        </div>
    );
  };
}
