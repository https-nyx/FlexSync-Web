import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Admin from './views/admin'
import Preview from './views/preview'
import Features from './views/features'
import Success from './views/success'
import Accounts from './views/accounts'
import SignUp from './views/sign-up'
import AdminDashboard from './views/admin-dashboard'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Admin} exact path="/admin" />
        <Route component={Preview} exact path="/preview" />
        <Route component={Features} exact path="/features" />
        <Route component={Success} exact path="/success" />
        <Route component={Accounts} exact path="/accounts" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={AdminDashboard} exact path="/admin-dashboard" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
