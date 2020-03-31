import React from 'react';
import ReactDom from 'react-dom';
import MenuItem from './../menu-item.component';
import { Provider } from 'react-redux';
import store from './../../../redux/store.js'

it('renders without crashing', () =>{
  const item = {
    name:'test',
    dietaries: ['ve','v','a']
  }
  const div = document.createElement('div');
  ReactDom.render(<Provider store={store}>
    <MenuItem item={item} ></MenuItem>
    </Provider>, div);
  ReactDom.unmountComponentAtNode(div);
})
