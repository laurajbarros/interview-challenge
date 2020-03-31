import React from 'react';
import './item-picker.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ItemPicker = ({allMenuItems}) => {
  return (
    <ul data-testid='item-picker' className="item-picker">
      {
        allMenuItems
        .map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            addToMenu
          />
        ))
      }
    </ul>
  )
};

const mapStateToProps = ({menu}) => ({
  allMenuItems: menu.all_menu_items
});

ItemPicker.propTypes = {
  allMenuItems: PropTypes.array
};

export default connect(mapStateToProps)(ItemPicker);
