import FloorPressStyle from "../../Styles/workout.module.css";
import FloorPressPic from "../../assets/images/floorpress.jpg";

const FloorPress = () => {
  return (
    <>
       <div className={FloorPressStyle["excercisesContainer"]}>
      <div className={FloorPressStyle["excerciseCard"]}>

      <div className={FloorPressStyle["imageStyle"]}>
      <img src={FloorPressPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={FloorPressStyle["excerciseTemplateTitle"]}>FloorPress</p>

        <p className={FloorPressStyle["excerciseTemplateExplination"]}>The Floor Press is a strength training exercise that primarily targets the muscles of the chest (pectoralis major), shoulders (anterior deltoids), and triceps. It's a variation of the traditional bench press that is performed lying on the floor rather than on a bench. The Floor Press is particularly beneficial for individuals who may have shoulder issues or limited range of motion, as it reduces strain on the shoulders and allows for a shorter range of motion compared to the bench press.  </p>
         <br />
         <p className={FloorPressStyle["excerciseSecondTitle"]}>Technique:</p>

         <p className={FloorPressStyle["excerciseTemplateExplination"]}>Grip: Grasp the barbell or dumbbells with an overhand grip (palms facing away from you) slightly wider than shoulder-width apart. If using a barbell, lift it from the floor and hold it directly above your chest with your arms fully extended.</p>

         <p className={FloorPressStyle["excerciseTemplateExplination"]}>Engage Core: Engage your core muscles by gently drawing your belly button towards your spine. This helps stabilize your torso throughout the exercise.</p>

         <p className={FloorPressStyle["excerciseTemplateExplination"]}>Lowering Phase: Inhale as you slowly lower the barbell or dumbbells towards your chest, keeping your elbows close to your body and your upper arms parallel to the floor. </p>

         <p className={FloorPressStyle["excerciseTemplateExplination"]}>Pressing Phase: Exhale as you press the barbell or dumbbells back up to the starting position, extending your arms fully and pushing through your palms.</p>

         <p className={FloorPressStyle["excerciseTemplateExplination"]}>Repeat: Complete the desired number of repetitions, typically starting with 8-12 reps and gradually increasing as you get stronger.</p>
         <p className={FloorPressStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={FloorPressStyle["excerciseTemplateExplination"]}>Reduced Shoulder Strain: The Floor Press reduces strain on the shoulders compared to the traditional bench press, as it limits the range of motion and prevents the shoulders from going into excessive internal rotation.</p>

          <p  className={FloorPressStyle["excerciseTemplateExplination"]}>Improved Stability: Performing the Floor Press on the floor provides a stable base of support, allowing for greater stability and control throughout the exercise.</p>

          <p  className={FloorPressStyle["excerciseTemplateExplination"]}>Triceps Emphasis: The Floor Press places greater emphasis on the triceps muscles, as the movement starts and ends with the arms in a bent position.</p>

          <p  className={FloorPressStyle["excerciseTemplateExplination"]}>Convenience: The Floor Press can be performed with minimal equipment and space, making it a convenient exercise for home workouts or in crowded gyms where benches may not be available.</p>

          <p  className={FloorPressStyle["excerciseTemplateExplination"]}> </p>

          <p  className={FloorPressStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default FloorPress;
