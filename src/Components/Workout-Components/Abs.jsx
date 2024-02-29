import WorkoutStyle from "../../Styles/workout.module.css"
import { Link } from "react-router-dom";
const Abs = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
        <Link to="/workout/abs/hollowhold">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Hollow Hold</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
      </div>
        </Link>
        <Link to="/workout/abs/legraise">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Leg Raise</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
      </div>
        </Link>
        <Link to="/workout/abs/plank">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Plank</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
      </div>
        </Link>
        <Link to="/workout/abs/reversecrunch">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Reverse Crunch</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
      </div>
      </Link>
      <Link to="/workout/abs/workout">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Most clicked</h2>
          <p className={WorkoutStyle["workoutText"]}>Most clicked description</p>
      </div>
      </Link>
    </div>
  );
};

export default Abs;


