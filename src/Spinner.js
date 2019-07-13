import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="lds-css">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
      <span>Waiting search</span>
    </div>
  );
};

export default Spinner;