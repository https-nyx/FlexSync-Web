import LegStyle from "../../Styles/legs.module.css";
import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Legs = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/legs/squat">
          <h2>Squat</h2>
          <p>Workout 1 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:id">
          <h2>LEG WORKOUT 1</h2>
          <p>Workout 2 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:id">
          <h2>LEG WORKOUT 2</h2>
          <p>Workout 3 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:id">
          <h2>LEG WORKOUT 3</h2>
          <p>Workout 4 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:id">
          <h2>LEG WORKOUT</h2>
          <p>Workout 5 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:id">
          <h2>LEG WORKOUT</h2>
          <p>Workout 6 Description</p>
        </Link>
      </div>
    
    </div>
  );
};

export default Legs;
