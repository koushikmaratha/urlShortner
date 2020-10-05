import React from "react";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";
import Routes from "./Router";
import Home from './Pages/Home';
import Stats from './Pages/Stats';
import ShortRedirect from './Pages/ShortRedirect';

describe('Testing the Routes of the app', () => {
    it('Check it renders correct routes', () => {
        const wrapper = shallow(<Routes />);
        const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});

        expect(pathMap['/']).toBe(Home);
        expect(pathMap['/stats']).toBe(Stats);
        expect(pathMap['/:id']).toBe(ShortRedirect);
    });
})