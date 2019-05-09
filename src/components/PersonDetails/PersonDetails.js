import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import PersonView from './PersonView';

import './PersonDetails.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.selectedPerson !== prevProps.selectedPerson) {
      this.onLoading();
      this.updatePerson();
    }
  };
  onLoading = () => {
    this.setState({
      loading: true
    });
  };
  onPersonLoad = (person) => {
    this.setState({
      person,
      loading: false
    });
  };
  updatePerson () {
    const { selectedPerson } = this.props;
    if (!selectedPerson) {
      return;
    }
    this.swapiService.getPerson(selectedPerson)
      .then(this.onPersonLoad);
  };
  render() {
    const { person, loading } = this.state;
    if (!person) {
      return <span>Select person from list</span>
    }
    const spinner = loading ? <Spinner/> : null;
    const personView = !loading ? <PersonView person={ person }/> : null;
    return (
      <div className="person-details card">
      { spinner }
      { personView }
      </div>
    );
  };
}
