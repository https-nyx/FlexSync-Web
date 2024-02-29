import WorkoutStyle from "../../Styles/workout.module.css";
import { Link } from "react-router-dom";
const Legs = () => {
  return (
    <div className={WorkoutStyle["workoutContainer"]}>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/legs/calfraise">
          <h2 className={WorkoutStyle["workoutText"]}>Calfraise</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 1 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/legs/lateralunge">
          <h2 className={WorkoutStyle["workoutText"]}>lateral lunge</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 2 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/legs/legcurl">
          <h2 className={WorkoutStyle["workoutText"]}>leg curl</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 3 Description</p>
        </Link>
      </div>
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/legs/lunges">
          <h2 className={WorkoutStyle["workoutText"]}>lunges</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 4 Description</p>
        </Link>
      </div>
    
      <div className={WorkoutStyle["workoutCard"]}>
        <Link to="/workout/legs/mostclicked">
          <h2 className={WorkoutStyle["workoutText"]}>most clicked</h2>
          <p className={WorkoutStyle["workoutText"]}>Workout 6 Description</p>
        </Link>
      </div>
    
    </div>
  );
};

export default Legs;
