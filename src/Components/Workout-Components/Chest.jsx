import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Chest = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
          <Link to="/workout/chest/dip">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>DIP</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
      </div>
          </Link>
          <Link to="/workout/chest/dip">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>DUMBELL BENCH PRESS</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
      </div>
          </Link>
          <Link to="/workout/chest/floorpress">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>FLOOR PRESS</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
      </div>
          </Link>
          <Link to="/workout/chest/inclinebenchpress">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>INCLINE BENCH PRESS</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
      </div>
          </Link>
          <Link to="/workout/:id">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2>Most clicked</h2>
          <p>Most clicked description</p>
      </div>
          </Link>
    </div>
  );
};

export default Chest;
