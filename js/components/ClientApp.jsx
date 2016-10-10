import React, { Component } from 'react'
const { Router, Route, browserHistory } = require('react-router')

import store from '../store'
import { Provider } from 'react-redux'

// component
import Home from './Home'

// routes
const myRoutes = () => (
  <Route path='/' component={Home} />
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
}

App.Routes = myRoutes

module.exports = App
