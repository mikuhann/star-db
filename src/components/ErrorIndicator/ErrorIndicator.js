import React from 'react';

import './ErrorIndicator.css';
import death from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img className='death'
        src={death} alt="death"/>
      <span className='boom'>
        BOOM!
      </span>
      <span>
        Something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;