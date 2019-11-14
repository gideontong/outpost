import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import homePage from './components/homePage';
import textingSystem from './components/textInterface';
import aboutPage from './components/aboutPage'
//import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route>
    <Route path = "/home" component = {homePage}/>
    <Route path = "/about" component={aboutPage} />
    <Route path="/comm/texting" component={textingSystem} />
  </Route>
);