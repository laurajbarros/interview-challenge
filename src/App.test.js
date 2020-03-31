import React from 'react';
import ReactDom from 'react-dom';
import {App} from './App';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDom.render(<Provider store={store}>
    <App></App>
    </Provider>, div);
  ReactDom.unmountComponentAtNode(div);
});


it('renders', () => {
  const div = shallow(<App />);
  expect(div).toMatchSnapshot();
});
