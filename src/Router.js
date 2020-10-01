import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Stats from './Pages/Stats';
import ShortRedirect from './Pages/ShortRedirect';

function Router() {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/stats" component={Stats} />
            <Route path="/:id" component={ShortRedirect} />
        </>
    )
}

export default Router;