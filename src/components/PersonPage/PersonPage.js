import React, { Component } from 'react';

import './PersonPage.css';

import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicator from "../ErrorIndicator";
import RowContainer from '../RowContainer';
import Error from '../Error';

import SwapiService from "../../services/SwapiService";

export default class PersonPage extends Component {
  swapiService = new SwapiService();

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

    const itemList = (
      <ItemList
        onSelectPerson = { this.onSelectPerson }
        receiveData = {this.swapiService.getAllPersons}>
        {
          (item) => item.personName
        }
      </ItemList>
    );

    const personDetails = (
      <PersonDetails selectedPerson = { selectedPerson } />
    );

    return (
      <Error>
        <RowContainer left={ itemList } rignt={ personDetails } />
      </Error>
    );
  };
};
