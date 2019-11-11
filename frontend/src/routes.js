import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import homePage from './components/homePage';
import textingSystem from './components/textInterface';
//import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path = "/home" component={homePage} />
    <Route path="/texting" component={textingSystem} />
  </Route>
);