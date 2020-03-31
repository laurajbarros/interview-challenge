import React from 'react';
import ReactDom from 'react-dom';
import RemoveButton from './../remove-button.component';
import { Provider } from 'react-redux';
import store from './../../../redux/store.js'

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDom.render(<Provider store={store}>
    <RemoveButton></RemoveButton>
    </Provider>, div);
})
