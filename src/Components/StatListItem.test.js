import React from 'react';
import { shallow } from 'enzyme';
import StatListItem from './StatListItem';


describe('Test the StatListItem Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<StatListItem statData={{}} />)));

    it('Test the Component with no Data', () => {
        expect(wrapper.find('p')[0]).toBe(undefined);
    })

    it('Tests the SnapShot',()=>{
        wrapper.setProps({statData:{long_url:'http://www.google.com',short_url:'kskKSK', count:20, countries:'India, Russia'}});
        expect(wrapper).toMatchSnapshot();
    })
})