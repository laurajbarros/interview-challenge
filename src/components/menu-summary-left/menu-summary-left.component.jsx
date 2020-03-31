import React from 'react';
import './menu-summary-left.styles.scss';
import { connect } from 'react-redux';

const MenuItemsCount = (props) => {
  return (
    <div className="menu-summary-left">
      <span>{props.menuCount} items</span>
    </div>
  );
};

const mapStateToProps = ({menu}) => ({
  menuCount: menu.selected_items_list.length
});

export default connect(mapStateToProps)(MenuItemsCount);
