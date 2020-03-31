import React from 'react';
import ReactDom from 'react-dom';
import MenuSummary from './../menu-summary.component';
import { Provider } from 'react-redux';
import store from './../../../redux/store.js'

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDom.render(<Provider store={store}>
    <MenuSummary></MenuSummary>
    </Provider>, div);
  ReactDom.unmountComponentAtNode(div);
})
