import React from 'react';
import ReactDom from 'react-dom';
import Dietary from './../dietary.component';
import { Provider } from 'react-redux';
import store from './../../../redux/store.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDom.render(<Provider store={store}>
    <Dietary></Dietary>
    </Provider>, div);
  ReactDom.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const {getByTestId} = render(<Dietary tag='ve'></Dietary>);
  expect(getByTestId('dietary')).toHaveTextContent('ve')
});

it('renders', () => {
  const div = shallow(<Dietary />);
  expect(div).toMatchSnapshot();
});
