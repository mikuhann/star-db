import React, {Component} from 'react';

import Spinner from '../Spinner';
import ItemView from './ItemView';

import './ItemDetails.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: false,
    imageUrl: null
  };

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.selectedItem !== prevProps.selectedItem) {
      this.onLoading();
      this.updateItem();
    }
  }

  onLoading = () => {
    this.setState({
      loading: true
    });
  };
  updateItem() {
    const { selectedItem, getItem, getImage } = this.props;
    if (!selectedItem) {
      return;
    }
    getItem(selectedItem)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          imageUrl: getImage(item)
        });
      });
  };
  render() {
    console.log(this.state);
    const { item, loading, imageUrl } = this.state;
    if (!item) {
      return <span>Please, select person from list</span>;
    }
    const spinner = loading ? <Spinner /> : null;
    const itemView = !loading ? <ItemView item = { item } imageUrl = { imageUrl }/> : null;
    return (
      <div className="item-details card">
        { spinner }
        { itemView }
      </div>
    );
  };
};
