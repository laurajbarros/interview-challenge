import React from 'react';
import ReactDom from 'react-dom';
import ItemPicker from './../item-picker.component';
import { Provider } from 'react-redux';
import store from './../../../redux/store.js'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDom.render(<Provider store={store}>
    <ItemPicker></ItemPicker>
    </Provider>, div);
  ReactDom.unmountComponentAtNode(div);
})

it('renders', () => {
  const div = shallow(<Provider store={store}><ItemPicker /></Provider>);
  expect(div).toMatchSnapshot();
});
