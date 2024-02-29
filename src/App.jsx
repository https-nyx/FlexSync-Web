// Import Pages
import Diet from "./Components/Diet";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Workout from "./Components/Workout";
import WorkoutForm from "./Components/WorkoutForm";
import Legs from "./Components/Workout-Components/Legs";
import MealPlan from "./Components/Mealplan";
import Vegetarian from "./Components/Diet-Components/Vegetarian";
import Pescetarian from "./Components/Diet-Components/Pescetaian";
import Mediterranean from "./Components/Diet-Components/mediterranean";
import HighProteinDiet from "./Components/Diet-Components/HighProteinDiet";

// Import Component
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
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
        <Route exact path="/workoutform">
          <WorkoutForm />
        </Route>
        <Route exact path="/workout/Legs">
          <Legs />
        </Route>
        <Route exact path="/mealplan">
          <MealPlan />
        </Route>
        <Route exact path="/diet/vegetarian">
          <Vegetarian />
        </Route>
        <Route exact path="/diet/pescetarian">
          <Pescetarian />
        </Route>
        <Route exact path="/diet/mediterranean">
          <Mediterranean />
        </Route>
        <Route exact path="/diet/HighProteinDiet">
          <HighProteinDiet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
