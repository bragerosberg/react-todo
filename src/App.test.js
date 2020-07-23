import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('The App Component', () => {
  test('renders the todoList component', () => {
    const app = shallow(<App />);
    expect(app.children().length).toEqual(1);
  });
});

