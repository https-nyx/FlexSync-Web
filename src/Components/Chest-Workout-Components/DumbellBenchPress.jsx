import DumbBellStyle from "../../Styles/workout.module.css";
import DumbellStylePic from "../../assets/images/dumbellbenchpress.png";

const DumbBellPress = () => {
  return (
    <>
       <div className={DumbBellStyle["excercisesContainer"]}>
      <div className={DumbBellStyle["excerciseCard"]}>

      <div className={DumbBellStyle["imageStyle"]}>
      <img src={DumbellStylePic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={DumbBellStyle["excerciseTemplateTitle"]}>Dumbell Bench Press</p>

        <p className={DumbBellStyle["excerciseTemplateExplination"]}>The Dumbbell Bench Press is a compound strength training exercise that primarily targets the muscles of the chest (pectoralis major), shoulders (anterior deltoids), and triceps, while also engaging the muscles of the upper back and core to provide stability. It's a popular variation of the traditional barbell bench press and offers several advantages, including improved muscle balance and stability.  </p>
         <br />
         <p className={DumbBellStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={DumbBellStyle["excerciseTemplateExplination"]}>Setup: Begin by sitting on the edge of a bench with a dumbbell in each hand, resting on your thighs. Ensure the bench is set to a flat or incline position, depending on your preference and training goals.</p>

         <p className={DumbBellStyle["excerciseTemplateExplination"]}>Grip: Grasp the dumbbells with an overhand grip (palms facing forward) and lift them one at a time to bring them to shoulder height. Position the dumbbells directly above your chest with your arms fully extended and palms facing forward.</p>

         <p className={DumbBellStyle["excerciseTemplateExplination"]}>Engage Core: Engage your core muscles by gently drawing your belly button towards your spine. This helps stabilize your torso throughout the exercise. </p>

         <p className={DumbBellStyle["excerciseTemplateExplination"]}>Pressing Phase: Exhale as you press the dumbbells upward, extending your arms fully and bringing the dumbbells together at the top of the movement. Keep your wrists straight and maintain control as you press the weights upward. </p>

         <p className={DumbBellStyle["excerciseTemplateExplination"]}>Repeat: Complete the desired number of repetitions, typically starting with 8-12 reps and gradually increasing as you get stronger.</p>
         <p className={DumbBellStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={DumbBellStyle["excerciseTemplateExplination"]}>Muscle Balance: The Dumbbell Bench Press allows for a greater range of motion compared to the barbell bench press, which can help improve muscle balance and symmetry. </p>

          <p  className={DumbBellStyle["excerciseTemplateExplination"]}>Stability and Control: Performing the Dumbbell Bench Press requires greater stability and control compared to the barbell bench press, as you must stabilize and control two separate weights.  </p>

          <p  className={DumbBellStyle["excerciseTemplateExplination"]}>Reduced Risk of Shoulder Injury: Dumbbells allow for a more natural movement pattern compared to a barbell, which can reduce strain on the shoulders and decrease the risk of shoulder injury.</p>

          <p  className={DumbBellStyle["excerciseTemplateExplination"]}>Increased Range of Motion: Dumbbells allow for a greater range of motion compared to a barbell, as each arm can move independently. </p>

          <p  className={DumbBellStyle["excerciseTemplateExplination"]}> </p>

          <p  className={DumbBellStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default DumbBellPress;
