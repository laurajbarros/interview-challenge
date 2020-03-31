import React from 'react';
import MenuSummary from '../../components/menu-summary/menu-summary.component';
import MenuBuilder from '../../components/menu-builder/menu-builder.component';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='home-page'>
      <MenuSummary/>
      <MenuBuilder/>
    </div>
  );
};

export default HomePage;
