import React from 'react';
import './menu-preview.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';


const MenuPreview = ({selected_items_list}) => {
  return (
    <ul className="menu-preview">
      {
        selected_items_list
        .map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            showRemoveButton
          />
        ))
      }
    </ul>
  )
}

const mapStateToProps = ({menu}) => ({
  selected_items_list: menu.selected_items_list
});

export default connect(mapStateToProps)(MenuPreview);
