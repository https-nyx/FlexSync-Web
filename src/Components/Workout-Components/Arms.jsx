import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Arms = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
          <Link to="/workout/abs/bicepcurl">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Bicep curl</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
      </div>
          </Link>
          <Link to="/workout/abs/hammercurl">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Hammer Curl</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
      </div>
          </Link>
          <Link to="/workout/abs/overheadpress">
      <div className={WorkoutStyle["workoutCard"]}>
        <h2 className={WorkoutStyle["workoutText"]}>Overhead Press</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
      </div>
          </Link>
          <Link to="/workout/abs/pushup">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Pushup</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
      </div>
          </Link>
          <Link to="/workout/abs/armworkout">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2>Most clicked</h2>
          <p>Most clicked description</p>
      </div>
          </Link>
    </div>
  );
};

export default Arms;
