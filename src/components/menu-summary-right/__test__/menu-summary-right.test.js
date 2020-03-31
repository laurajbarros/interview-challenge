import React from 'react';
import ReactDom from 'react-dom';
import MenuSummaryRight from './../menu-summary-right.component';
import { Provider } from 'react-redux';
import store from './../../../redux/store.js'

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDom.render(<Provider store={store}>
    <MenuSummaryRight></MenuSummaryRight>
    </Provider>, div);
    ReactDom.unmountComponentAtNode(div);
})
