import WorkoutStyle from "../Styles/workout.module.css";
import { Link } from "react-router-dom";

const Workout = () => {
  return (
    <>
      <div className={WorkoutStyle["workoutContainer"]}>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/chest">
            <h2 className={WorkoutStyle["workoutText"]}>Chest</h2>
            <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/arms">
            <h2 className={WorkoutStyle["workoutText"]}>Arms</h2>
            <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/back">
            <h2 className={WorkoutStyle["workoutText"]}>Back</h2>
            <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/legs">
            <h2 className={WorkoutStyle["workoutText"]}>Legs</h2>
            <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/abs">
            <h2 className={WorkoutStyle["workoutText"]}>Abs</h2>
            <p className={WorkoutStyle["workoutText"]}>Workout 5 Description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workout/mostclicked">
            <h2 className={WorkoutStyle["workoutText"]}>Most clicked</h2>
            <p className={WorkoutStyle["workoutText"]}>Most clicked description</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/yourworkouts">
            <h2 className={WorkoutStyle["workoutText"]}>Your workouts!</h2>
            <p className={WorkoutStyle["workoutText"]}>Acess your workouts here!</p>
          </Link>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <Link to="/workoutform">
            <h2 className={WorkoutStyle["workoutText"]}>Create your own workout!</h2>
            <p className={WorkoutStyle["workoutText"]}>Create your own workout here!</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Workout;
