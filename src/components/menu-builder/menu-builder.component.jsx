import React from 'react';
import MenuPreview from '../menu-preview/menu-preview.component';
import ItemPicker from '../item-picker/item-picker.component';
import './menu-builder.styles.scss';

const MenuBuilder = () => {
  return (
    <div className="menu-builder">
      <ItemPicker/>
      <MenuPreview/>
    </div>
  )
}
export default MenuBuilder;
