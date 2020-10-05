import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import '@testing-library/jest-dom/extend-expect'
describe('App', () => {
  it('should return 0 <div />', () => {
    const container = shallow(<App />);
    //expected 0 divs as there is not dev element available
    expect(container.find('div').length).toEqual(0);
  });
});