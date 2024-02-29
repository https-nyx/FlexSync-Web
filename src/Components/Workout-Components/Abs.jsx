import WorkoutStyle from "../../Styles/workout.module.css"
import { Link } from "react-router-dom";
const Abs = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/hollowhold">
          <h2 className={WorkoutStyle["workoutText"]}>Hollow Hold</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/legraise">
          <h2 className={WorkoutStyle["workoutText"]}>Leg Raise</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/plank">
          <h2 className={WorkoutStyle["workoutText"]}>Plank</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/reversecrunch">
          <h2 className={WorkoutStyle["workoutText"]}>Reverse Crunch</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/workout">
          <h2 className={WorkoutStyle["workoutText"]}>Most clicked</h2>
          <p className={WorkoutStyle["workoutText"]}>Most clicked description</p>
        </Link>
      </div>
    </div>
  );
};

export default Abs;


