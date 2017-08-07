// Developer TODO: Load in App component and render to the DOM
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import routes from './config/routes'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>, document.getElementById('root'));
registerServiceWorker();
