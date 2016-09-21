import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/App'
import About from  './modules/About'
import Repos from  './modules/Repos'
// render(<App/>, document.getElementById('app'))

import { Router, Route, hashHistory } from 'react-router'



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))
