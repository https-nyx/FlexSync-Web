import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Legs = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
        <Link to="/workout/legs/calfraise">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>Calfraise</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
      </div>
        </Link>
        <Link to="/workout/legs/lateralunge">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>lateral lunge</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
      </div>
        </Link>
        <Link to="/workout/legs/legcurl">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>leg curl</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
      </div>
        </Link>
        <Link to="/workout/legs/lunges">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>lunges</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
      </div>
        </Link>
        <Link to="/workout/legs/mostclicked">
      <div className={WorkoutStyle["workoutCard"]}>
          <h2 className={WorkoutStyle["workoutText"]}>most clicked</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 6 Description</p>
      </div>
        </Link>
    
    </div>
  );
};

export default Legs;
