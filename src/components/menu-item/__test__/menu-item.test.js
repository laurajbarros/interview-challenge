import React from 'react';
import ReactDom from 'react-dom';
import MenuItem from './../menu-item.component';
import { Provider } from 'react-redux';
import store from './../../../redux/store.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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

it('renders', () => {
  const div = shallow(<Provider store={store}><MenuItem /></Provider>);
  expect(div).toMatchSnapshot();
});
