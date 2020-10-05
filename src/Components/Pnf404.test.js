import React from 'react';
import { shallow } from 'enzyme';
import Pnf404 from './Pnf404';

describe('Testing Pnf404 Component',()=>{
    let wrapper;
    beforeEach(()=>(wrapper=shallow(<Pnf404 />)));

    it('Should check the snapShot',()=>{
        expect(wrapper).toMatchSnapshot();
    })
});