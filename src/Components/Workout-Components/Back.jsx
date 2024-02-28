import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Back = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back">
          <h2>BACK WORKOUT</h2>
          <p>Workout 1 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back">
          <h2>BACK WORKOUT</h2>
          <p>Workout 2 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back">
          <h2>BACK WORKOUT</h2>
          <p>Workout 3 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back">
          <h2>BACK WORKOUT</h2>
          <p>Workout 4 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back">
          <h2>BACK WORKOUT</h2>
          <p>Workout 5 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back">
          <h2>BACK WORKOUT</h2>
          <p>Workout 6 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back">
          <h2>Most clicked</h2>
          <p>Most clicked description</p>
        </Link>
      </div>
    </div>
  );
};

export default Back;
