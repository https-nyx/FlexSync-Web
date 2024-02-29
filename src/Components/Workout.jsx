import WorkoutStyle from "../Styles/workout.module.css";
import BicepPic from "../assets/bicep.png";
import ChestPic from "../assets/chest.png";
import AbsPic from "../assets/abs.png";
import BodyBuildPic from "../assets/bodybuilder.png";
import LegPic from "../assets/leg.png";


import { Link } from "react-router-dom";

const Workout = () => {
  return (
    <>
      <div className={WorkoutStyle["workoutContainer"]}>
      <Link to="/workout/chest">
        <div className={WorkoutStyle["workoutCard"]}>
            <h2 className={WorkoutStyle["workoutText"]}>Chest Workouts</h2>
            <img src={ChestPic} alt="exercisepic" class="exercise-pic" className={WorkoutStyle.workoutImage}> 
            </img>
        </div>
      </Link>
      <Link to="/workout/arms">
        <div className={WorkoutStyle["workoutCard"]}>
            <h2 className={WorkoutStyle["workoutText"]}>Arm Workouts</h2>
            <img src={BicepPic} alt="exercisepic" class="exercise-pic" className={WorkoutStyle.workoutImage}></img>
        </div>
      </Link>
      <Link to="/workout/back">
        <div className={WorkoutStyle["workoutCard"]}>
            <h2 className={WorkoutStyle["workoutText"]}>Back Workouts</h2>
            <img src={BodyBuildPic} alt="exercisepic" class="exercise-pic" className={WorkoutStyle.workoutImage}></img>
        </div>
      </Link>
      <Link to="/workout/legs">
        <div className={WorkoutStyle["workoutCard"]}>
            <h2 className={WorkoutStyle["workoutText"]}>Leg Workouts</h2>
            <img src={LegPic} alt="exercisepic" class="exercise-pic" className={WorkoutStyle.workoutImage}></img>
        </div>
      </Link>
      <Link to="/workout/abs">
        <div className={WorkoutStyle["workoutCard"]}>
            <h2 className={WorkoutStyle["workoutText"]}>Abs Workouts</h2>
            <img src={AbsPic} alt="exercisepic" class="exercise-pic" className={WorkoutStyle.workoutImage}></img>
        </div>
      </Link>
      <Link to="/workout/mostclicked">
        <div className={WorkoutStyle["workoutCard"]}>
            <h2 className={WorkoutStyle["workoutText"]}>Most clicked Workouts</h2>
            <p className={WorkoutStyle["workoutText"]}>Most clicked description</p>
        </div>
      </Link>
      <Link to="/yourworkouts">
        <div className={WorkoutStyle["workoutCard"]}>
            <h2 className={WorkoutStyle["workoutText"]}>Your workouts!</h2>
            <p className={WorkoutStyle["workoutText"]}>Acess your workouts here!</p>
        </div>
      </Link>
      <Link to="/workoutform">
        <div className={WorkoutStyle["workoutCard"]}>
            <h2 className={WorkoutStyle["workoutText"]}>Create your own workout!</h2>
            <p className={WorkoutStyle["workoutText"]}>Create your own workout here!</p>
        </div>
      </Link>
      </div>
    </>
  );
};

export default Workout;
