// Import Components
import Diet from "./Components/Diet";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Workout from "./Components/Workout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/diet">
          <Diet />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/workout">
          <Workout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
