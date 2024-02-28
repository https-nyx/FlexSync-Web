import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Arms = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/bicepcurl">
          <h2>Bicep curl</h2>
          <p>Workout 1 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/hammercurl">
          <h2>hammer curl</h2>
          <p>Workout 2 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/overheadpress">
        <h2>overhead press</h2>
          <p>Workout 3 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/pushup">
          <h2>pushup</h2>
          <p>Workout 4 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/abs/armworkout">
          <h2>Most clicked</h2>
          <p>Most clicked description</p>
        </Link>
      </div>
    </div>
  );
};

export default Arms;
