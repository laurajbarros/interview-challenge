import React from 'react';
import ReactDom from 'react-dom';
import ItemPicker from './../item-picker.component';
import { Provider } from 'react-redux';
import store from './../../../redux/store.js'

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDom.render(<Provider store={store}>
    <ItemPicker></ItemPicker>
    </Provider>, div);
  ReactDom.unmountComponentAtNode(div);
})
