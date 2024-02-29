import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Chest = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/chest/dip">
          <h2 className={WorkoutStyle["workoutText"]}>DIP</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/chest/dumbellbenchpress">
          <h2 className={WorkoutStyle["workoutText"]}>DUMBELL BENCH PRESS</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/chest/floorpress">
          <h2 className={WorkoutStyle["workoutText"]}>FLOOR PRESS</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/chest/inclinebenchpress">
          <h2 className={WorkoutStyle["workoutText"]}>INCLINE BENCH PRESS</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
        </Link>
      </div>
      
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/:id">
          <h2>Most clicked</h2>
          <p>Most clicked description</p>
        </Link>
      </div>
    </div>
  );
};

export default Chest;
