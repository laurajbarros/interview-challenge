import React from 'react';
import './item-picker.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';

const ItemPicker = (props) => {
  return (
    <ul className="item-picker">
      {
        props.allMenuItems
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

export default connect(mapStateToProps)(ItemPicker);
