import Armstyle from "../Styles/Arms.module.css";
import WorkoutStyle from "../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Abs = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:Arms">
          <h2>Bicep curl</h2>
          <p>Workout 1 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:Arms">
          <h2>Workout 2</h2>
          <p>Workout 2 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:Arms">
          <h2>Workout 3</h2>
          <p>Workout 3 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:Arms">
          <h2>Workout 4</h2>
          <p>Workout 4 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:Arms">
          <h2>Workout 5</h2>
          <p>Workout 5 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:Arms">
          <h2>Workout 6</h2>
          <p>Workout 6 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:Arms">
          <h2>Most clicked</h2>
          <p>Most clicked description</p>
        </Link>
      </div>
    </div>
  );
};