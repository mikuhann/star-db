import React, { Component } from 'react';

import './PersonPage.css';

import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicator from "../ErrorIndicator";
import RowContainer from '../RowContainer';

import SwapiService from "../../services/SwapiService";

export default class PersonPage extends Component {
  swapiService = new SwapiService();

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

    const itemList = (
      <ItemList
        onSelectPerson = { this.onSelectPerson }
        receiveData = {this.swapiService.getAllPersons}
        renderItem = {({ personName }) => personName }/>
    );

    const personDetails = (
      <PersonDetails selectedPerson = { selectedPerson } />
    );

    return (
      <RowContainer left={ itemList } rignt={ personDetails } />
    );
  };
};
