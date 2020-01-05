import React from 'react';
import { Switch } from 'react-router';
import {HashRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import routes from './routes';

ReactDOM.render(<HashRouter><App/>
<Switch>
    {routes}
    </Switch></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
