import React from 'react';
import './menu-summary.styles.scss';
import MenuSummaryLeft from '../menu-summary-left/menu-summary-left.component';
import MenuSummaryRight from '../menu-summary-right/menu-summary-right.component';

const MenuSummary = () => {
  return (
    <div className="menu-summary">
      <MenuSummaryLeft/>
      <MenuSummaryRight/>
    </div>
  );
};

export default MenuSummary;
