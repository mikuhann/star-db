import React from 'react';

const RowContainer = ({ left, rignt}) => {
  return (
    <div>
      <div className='row mb-2'>
        <div className='col-md-6'>
          { left }
        </div>
        <div className='col-md-6'>
          { rignt }
        </div>
      </div>
    </div>
  );
};
export default RowContainer;
