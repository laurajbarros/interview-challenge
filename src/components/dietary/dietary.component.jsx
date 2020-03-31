import React from 'react';
import './dietary.styles.scss';

const Dietary = ({tag}) => {
  return(
    <span data-testid='dietary' className="dietary">{tag}</span>
  );
};

export default Dietary;
