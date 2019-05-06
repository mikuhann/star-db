import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className='header d-flex'>
      <h3>
          <a href="#">
              Star DB
          </a>
      </h3>
        <ul className='d-flex'>
            <li><a href="#">Persons</a></li>
            <li><a href="#">Planets</a></li>
            <li><a href="#">Starship</a></li>
        </ul>
    </div>
  );
};

export default Header;
