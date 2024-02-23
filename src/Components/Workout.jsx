import WorkoutStyle from "../Styles/workout.module.css";

const Workout = () => {
  return (
    <>
      <div className={WorkoutStyle["workoutContainer"]}>
        <div className={WorkoutStyle["workoutCard"]}>
          <h2>Workout 1</h2>
          <p>Workout 1 Description</p>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <h2>Workout 2</h2>
          <p>Workout 2 Description</p>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <h2>Workout 3</h2>
          <p>Workout 3 Description</p>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <h2>Workout 4</h2>
          <p>Workout 4 Description</p>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <h2>Workout 5</h2>
          <p>Workout 5 Description</p>
        </div>
        <div className={WorkoutStyle["workoutCard"]}>
          <h2>Workout 6</h2>
          <p>Workout 6 Description</p>
        </div>
      </div>
    </>
  );
};

export default Workout;
