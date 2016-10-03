import React, { Component } from 'react'
const { Router, Route, browserHistory } = require('react-router')

// component
import Home from './Home'

// routes
const myRoutes = () => (
  <Route path='/' component={Home} />
)

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        {myRoutes()}
      </Router>
    )
  }
}

App.Routes = myRoutes

module.exports = App
