import React, { Component } from 'react';

import Spinner from '../Spinner';

import './ItemList.css';

export default class ItemList extends Component {

  state = {
    itemList: null,
    error: false
  };

  componentDidMount() {
    const { receiveData } = this.props;
    receiveData()
      .then((itemList) => {
        this.setState({
          itemList
        }, () => console.log(this.state))
      })
      .catch(this.onError)
  }
  onError = (err) => {
    this.setState({
      error: true
    });
  };
  renderItems(arr) {
    return arr.map((item) => {
      const { pictureId } = item;
      const label = this.props.renderItem(item);
      return (
        <li className='list-group-item'
            key={ pictureId }
            onClick={() => this.props.onSelectPerson(pictureId)}>
          { label }
        </li>
      )
    })
  };
  render() {
    console.log(this.props);
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />
    }
    const items = this.renderItems(itemList);
    return (
        <ul className="item-list list-group">
          { items }
        </ul>
    );
  };
}
