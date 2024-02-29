import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Back = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
          <Link to="/workout/back/bridge">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Bridge</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
      </div>
          </Link>
          <Link to="/workout/back/catstretch">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Cat stretch</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
      </div>
          </Link>
          <Link to="/workout/back/cobrastretch">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Cobra stretch</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
      </div>
          </Link>
          <Link to="/workout/back/superman">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Superman</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
      </div>
          </Link>
          <Link to="/workout/back">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Most clicked</h2>
          <p className={WorkoutStyle["workoutText"]}>Most clicked description</p>
      </div>
          </Link>
    </div>
  );
};

export default Back;
