import React from 'react';
import ReactDom from 'react-dom';
import MenuSummary from './../menu-summary.component';
import { Provider } from 'react-redux';
import store from './../../../redux/store.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDom.render(<Provider store={store}>
    <MenuSummary></MenuSummary>
    </Provider>, div);
  ReactDom.unmountComponentAtNode(div);
});

it('renders', () => {
  const div = shallow(<Provider store={store}><MenuSummary /></Provider>);
  expect(div).toMatchSnapshot();
});
