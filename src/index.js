import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import AdminLoginPage from "./views/admin-login-page";
import PreviewPage from "./views/preview-page";
import FeaturesPage from "./views/features-page";
import SuccessSignup from "./views/success-signup";
import SignUpPage from "./views/sign-up-page";
import AdminPage from "./views/admin-page";
import LandingPage from "./views/landing-page";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={AdminLoginPage} exact path="/admin-login-page" />
        <Route component={PreviewPage} exact path="/preview-page" />
        <Route component={FeaturesPage} exact path="/features-page" />
        <Route component={SuccessSignup} exact path="/success-signup" />
        <Route component={SignUpPage} exact path="/sign-up-page" />
        <Route component={AdminPage} exact path="/admin-page" />
        <Route component={LandingPage} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
