import React from 'react';
import './menu-summary-left.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MenuItemsCount = ({menuCount}) => {
  return (
    <div className="menu-summary-left">
      <span>{menuCount} items</span>
    </div>
  );
};

const mapStateToProps = ({menu}) => ({
  menuCount: menu.selected_items_list.length
});

MenuItemsCount.propTypes = {
  menuCount: PropTypes.number
};

export default connect(mapStateToProps)(MenuItemsCount);
