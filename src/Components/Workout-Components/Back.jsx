import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Back = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back/bridge">
          <h2 className={WorkoutStyle["workoutText"]}>Bridge</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back/catstretch">
          <h2 className={WorkoutStyle["workoutText"]}>Cat stretch</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back/cobrastretch">
          <h2 className={WorkoutStyle["workoutText"]}>Cobra stretch</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back/superman">
          <h2 className={WorkoutStyle["workoutText"]}>Superman</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/back">
          <h2 className={WorkoutStyle["workoutText"]}>Most clicked</h2>
          <p className={WorkoutStyle["workoutText"]}>Most clicked description</p>
        </Link>
      </div>
    </div>
  );
};

export default Back;
