import React from 'react';
import { shallow, mount } from 'enzyme';
import Stats from './index';
import StatListItem from '../../Components/StatListItem';
import store from '../../store';


describe('Home Page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Stats.WrappedComponent store={store} statsData={{}} getAllUrls={jest.fn()} />);
    });

    it('Should render Page Properly', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('Should not render StatListItem Component', () => {
        expect(wrapper.find(StatListItem)).toHaveLength(0);
    })

    it('Should render one StatListItem with Udpated Stats', () => {
        wrapper.setState({ statsData: [{ long_url: 'https://www.google.com', short_url: 'kskKSK', count: 3, countries: 'India, USA' }] });
        expect(wrapper.find(StatListItem)).toHaveLength(1);
    })
});