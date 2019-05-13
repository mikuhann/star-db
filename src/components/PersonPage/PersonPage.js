import React, { Component } from 'react';

import './PersonPage.css';

import ItemList from "../ItemList";
import RowContainer from '../RowContainer';
import Error from '../Error';
import ItemDetails from '../ItemDetails';

import SwapiService from "../../services/SwapiService";

export default class PersonPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null
  };
  onSelectPerson = (id) => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const { selectedItem } = this.state;

    const itemList = (
      <ItemList
        onSelectPerson = { this.onSelectPerson }
        receiveData =  {this.swapiService.getAllPersons }>
        {
          (item) => item.personName
        }
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails
        selectedItem = { selectedItem }
        getItem = { this.swapiService.getPerson }
        getImage = { this.swapiService.getPersonImage }/>
    );

    return (
      <Error>
        <RowContainer left={ itemList } rignt={ itemDetails } />
      </Error>
    );
  };
};
