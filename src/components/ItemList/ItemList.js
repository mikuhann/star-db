import React, { Component } from 'react';

import Spinner from '../Spinner';

import SwapiService from '../../services/SwapiService';

import './ItemList.css';
import ErrorIndicator from "../ErrorIndicator";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    personsList: null,
    error: false
  };

  componentDidMount() {
    this.swapiService
      .getAllPersons()
      .then((persons) => {
        this.setState({
          personsList: persons
        }, () => console.log(this.state))
      })
      .catch(this.onError)
  }
  onError = (err) => {
    this.setState({
      error: true
    });
  };
  renderItems(arr, id) {
    return arr.map((item) => {
      return (
        <li className='list-group-item'
            key={item.pictureId}
            onClick={() => this.props.onSelectPerson(item.pictureId)}>
          { item.personName }
        </li>
      )
    })
  };
  render() {
    const { personsList } = this.state;
    if (!personsList) {
      return <Spinner />
    }
    const items = this.renderItems(personsList);
    return (
        <ul className="item-list list-group">
          { items }
        </ul>
    );
  };
}
