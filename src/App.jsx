// Import Pages
import Diet from "./Components/Diet";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Workout from "./Components/Workout";

// Import Components
import Navbar from "./Components/Navbar";
import WorkoutForm from "./Components/WorkoutForm";
import Legs from "./Components/Workout-Components/Legs";
import MealPlan from "./Components/Mealplan";
import Abs from "./Components/Workout-Components/Abs";
import Arms from "./Components/Workout-Components/Arms";
import Back from "./Components/Workout-Components/Back";
import Chest from "./Components/Workout-Components/Chest";
import HollowHold from "./Components/Abs-Workout-Components/HollowHold";
import LegRaise from "./Components/Abs-Workout-Components/LegRaise";
import Plank from "./Components/Abs-Workout-Components/Plank";
import ReverseCrunch from "./Components/Abs-Workout-Components/ReverseCrunch";
import BicepsCurl from "./Components/Arms-Workout-Components/BicepsCurl";
import HammerCurl from "./Components/Arms-Workout-Components/HammerCurl";
import OverheadPress from "./Components/Arms-Workout-Components/OverheadPres";
import Pushup from "./Components/Arms-Workout-Components/Pushup";
import Bridge from "./Components/Back-Workout-Components/Bridge";
import CatStretch from "./Components/Back-Workout-Components/CatStretch";
import CobraStretch from "./Components/Back-Workout-Components/CobraStretch";
import Superman from "./Components/Back-Workout-Components/Superman";
import Dip from "./Components/Chest-Workout-Components/Dip";
import DumbBellPress from "./Components/Chest-Workout-Components/DumbellBenchPress";
import FloorPress from "./Components/Chest-Workout-Components/FloorPress";
import InclineBenchPress from "./Components/Chest-Workout-Components/InclineBenchPress";
import CalfRaise from "./Components/Legs-Workout-Components/CalfRaise";
import LateralLunge from "./Components/Legs-Workout-Components/LateralLunge";
import LegCurl from "./Components/Legs-Workout-Components/LegCurl";
import Lunges from "./Components/Legs-Workout-Components/Lunges";


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
        <Route exact path="/workout/abs">
          <Abs />
        </Route>
        <Route exact path="/workout/arms">
          <Arms />
        </Route>
        <Route exact path="/workout/back">
          <Back />
        </Route>
        <Route exact path="/workout/chest">
          <Chest />
        </Route>
        <Route exact path="/workout/abs/hollowhold">
          <HollowHold />
        </Route>
        <Route exact path="/workout/abs/legraise">
          <LegRaise />
        </Route>
        <Route exact path="/workout/abs/plank">
          <Plank />
        </Route>
        <Route exact path="/workout/abs/reversecrunch">
          <ReverseCrunch />
        </Route>
        <Route exact path="/workout/abs/bicepcurl">
          <BicepsCurl />
        </Route>
        <Route exact path="/workout/abs/hammercurl">
          <HammerCurl />
        </Route>
        <Route exact path="/workout/abs/overheadpress">
          <OverheadPress />
        </Route>
        <Route exact path="/workout/abs/pushup">
          <Pushup />
        </Route>
        <Route exact path="/workout/back/bridge">
          <Bridge />
        </Route>
        <Route exact path="/workout/back/catstretch">
          <CatStretch />
        </Route>
        <Route exact path="/workout/back/cobrastretch">
          <CobraStretch />
        </Route>
        <Route exact path="/workout/back/superman">
          <Superman />
        </Route>
        <Route exact path="/workout/chest/dip">
          <Dip />
        </Route>
        <Route exact path="/workout/chest/dumbellbenchpress">
          <DumbBellPress />
        </Route>
        <Route exact path="/workout/chest/floorpress">
          <FloorPress />
        </Route>
        <Route exact path="/workout/chest/inclinebenchpress">
          <InclineBenchPress />
        </Route>
        <Route exact path="/workout/legs/calfraise">
          <CalfRaise />
        </Route>
        <Route exact path="/workout/legs/lateralunge">
          <LateralLunge />
        </Route>
        <Route exact path="/workout/legs/legcurl">
          <LegCurl />
        </Route>
        <Route exact path="/workout/legs/lunges">
          <Lunges />
        </Route>

        
        
       
      </Switch>
    </Router>
  );
}

export default App;
