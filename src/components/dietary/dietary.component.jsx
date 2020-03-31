import React from 'react';
import './dietary.styles.scss';

const Dietary = (props) => {
  return(
    <span className="dietary">{props.tag}</span>
  );
};

export default Dietary;
