import React from 'react';

const ItemView = ({ item, imageUrl }) => {
  const { pictureId, personName, personGender, personBirthYear, personEyeColor } = item;
  return (
    <React.Fragment>
      <img className='item-image'
           src={imageUrl} alt="person"/>
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
    </React.Fragment>
  );
};

export default ItemView;