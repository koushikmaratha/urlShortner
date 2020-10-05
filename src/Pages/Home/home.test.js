import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../Home';

import store from '../../store';
import { isUndefined } from 'lodash';


describe('Testing Home Page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Home.WrappedComponent store={store} shortUrl={''} />);
    });

    it('Should check for H1 Tag in the component', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('Should check for no section', () => {
        expect(wrapper.find('section')).toHaveLength(1);
    });


});

describe('test the Conditional State rendering', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Home.WrappedComponent store={store} shortUrl={''} />);
        wrapper.setState({ shortUrl: 'crazy' });
    })
    it('Should check for no section', () => {
        expect(wrapper.find('section')).toHaveLength(2);
    });
    it('should check for the State Variable', () => {

        expect(wrapper.state('shortUrl')).toEqual('crazy');
    })
    it('should check for the p Tags Count', () => {
        expect(wrapper.find('p').length).toBe(2);
    })
    it('should check for the H2 tag value', () => {
        expect(wrapper.find('h2').text()).toBe('http://localhost/crazy');
    })
})