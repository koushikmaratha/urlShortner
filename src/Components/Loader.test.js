import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('render Loader Component',()=>{
    let wrapper;
    beforeEach(()=>(shallow(<Loader />)));

    it('Tests the SnapShot',()=>{
        expect(wrapper).toMatchSnapshot();
    })
})