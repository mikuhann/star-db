import React, {Component} from 'react';

import './ItemList.css';

export default class ItemList extends Component {
  render() {
    return (
        <ul className="item-list list-group">
          <li className="list-group-item">Luke</li>
          <li className="list-group-item">Darth</li>
          <li className="list-group-item">R2-D2</li>
        </ul>
    );
  };
}
