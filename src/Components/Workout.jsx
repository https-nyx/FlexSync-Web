import WorkoutStyle from "../Styles/workout.module.css";
import { Link } from "react-router-dom";

const Workout = () => {
  return (
    <>
      <div className={WorkoutStyle["workoutContainer"]}>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/chest">
            <h2>Chest</h2>
            <p>Workout 1 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/arms">
            <h2>Arms</h2>
            <p>Workout 2 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/back">
            <h2>Back</h2>
            <p>Workout 3 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/legs">
            <h2>Legs</h2>
            <p>Workout 4 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/abs">
            <h2>Abs</h2>
            <p>Workout 5 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/mostclicked">
            <h2>Most clicked</h2>
            <p>Most clicked description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/yourworkouts">
            <h2>Your workouts!</h2>
            <p>Acess your workouts here!</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workoutform">
            <h2>Create your own workout!</h2>
            <p>Create your own workout here!</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Workout;
