import React from 'react';
import { shallow } from 'enzyme';
import ShortRedirect from './index';
import { iteratee } from 'lodash';

describe('Testing ShortRedirect Component', () => {
    let wrapper;
    const oldLocation = window.location
    beforeAll(() => {
        delete window.location

        window.location = Object.defineProperties(
            {},
            {
                ...Object.getOwnPropertyDescriptors(oldLocation),
                assign: {
                    configurable: true,
                    value: jest.fn(),
                },
            },
        )
    })
    afterAll(() => {
        window.location = oldLocation
    })
    beforeEach(() => (wrapper = shallow(<ShortRedirect.WrappedComponent match={{ params: { id: 'kskKsk' } }} getShortUrl={jest.fn()} />)))

    it('Should render the Commponent', () => {
        expect(wrapper.find('div').length).toBe(2);
    });

    it('Should check for the Page Redirection', () => {
        wrapper.setState({ redirectToUrl: true, shortUrlData: { long_url: 'http://www.google.com' } });
        expect(window.location).toBe('http://www.google.com')
    })
})