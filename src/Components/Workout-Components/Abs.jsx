import WorkoutStyle from "../../Styles/workout.module.css"
import { Link } from "react-router-dom";
const Abs = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/hollowhold">
          <h2>Hollow Hold</h2>
          <p>Workout 1 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/legraise">
          <h2>Leg Raise</h2>
          <p>Workout 2 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/plank">
          <h2>Plank</h2>
          <p>Workout 3 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/reversecrunch">
          <h2>Reverse Crunch</h2>
          <p>Workout 4 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/workout">
          <h2>Most clicked</h2>
          <p>Most clicked description</p>
        </Link>
      </div>
    </div>
  );
};

export default Abs;


