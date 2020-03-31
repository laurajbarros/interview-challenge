import React from 'react';
import './menu-preview.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

MenuPreview.propTypes = {
  selected_items_list: PropTypes.array
};

export default connect(mapStateToProps)(MenuPreview);
