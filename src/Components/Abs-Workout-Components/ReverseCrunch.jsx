import ReverseCrunchStyle from "../../Styles/workout.module.css";
import ReverseCrunchPic from "../../assets/images/reversecurl.png"

const ReverseCrunch = () => {
  return (
    <>
      <div className={ReverseCrunchStyle["excercisesContainer"]}>
      <div className={ReverseCrunchStyle["excerciseCard"]}>

      <div className={ReverseCrunchStyle["imageStyle"]}>
      <img src={ReverseCrunchPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={ReverseCrunchStyle["excerciseTemplateTitle"]}>The Reverse Crunch</p>

        <p className={ReverseCrunchStyle["excerciseTemplateExplination"]}>The Reverse Crunch is a core-strengthening exercise that targets the lower abdominal muscles with a focus on lifting the hips off the ground. 
        Incorporating Reverse Crunches into your workout routine can help strengthen your lower abdominal muscles, improve core stability, and enhance overall abdominal strength. As with any exercise, 
        it's important to focus on proper form, control, and gradual progression to maximize benefits and minimize the risk of injury.
        </p>
         <br />
         <p className={ReverseCrunchStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={ReverseCrunchStyle["excerciseTemplateExplination"]}>Starting Position: Lie flat on your back with your arms resting by your sides, palms facing down. Bend your knees and lift your legs off the ground, 
         bringing them towards your chest so that your thighs are perpendicular to the ground and your shins are parallel to the ground. 
        </p>

         <p className={ReverseCrunchStyle["excerciseTemplateExplination"]}>Engage Core: Tighten your abdominal muscles to stabilize your spine and pelvis. Press your lower back into the ground to maintain a neutral spine position throughout the exercise.</p>

         <p className={ReverseCrunchStyle["excerciseTemplateExplination"]}>Lift Hips: With your core engaged, exhale as you lift your hips off the ground by curling your pelvis upwards towards your ribcage. 
         At the top of the movement, your knees should move towards your chest while your lower back remains in contact with the ground.</p>

         <p className={ReverseCrunchStyle["excerciseTemplateExplination"]}>Lower Hips: Inhale as you slowly lower your hips back down to the starting position, maintaining control and keeping your core engaged throughout the movement.</p>

         <p className={ReverseCrunchStyle["excerciseTemplateExplination"]}>Repeat: Complete the desired number of repetitions, typically starting with 8-12 reps and gradually increasing as you get stronger.</p>

         <p className={ReverseCrunchStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={ReverseCrunchStyle["excerciseTemplateExplination"]}>Targeted Lower Abdominals: The Reverse Crunch specifically targets the lower portion of the rectus abdominis, which is often a challenging area to strengthen. By focusing on this area, you can improve definition and strength in the lower abdomen.</p>

          <p  className={ReverseCrunchStyle["excerciseTemplateExplination"]}>Core Stability: This exercise requires significant engagement of the core muscles to lift the hips off the ground and maintain control throughout the movement. Strengthening the core muscles can improve overall stability and reduce the risk of injury in daily activities and other exercises.</p>

          <p  className={ReverseCrunchStyle["excerciseTemplateExplination"]}>Low Back Support: Pressing the lower back into the ground throughout the exercise helps maintain a neutral spine position and supports the lumbar spine. This can be beneficial for individuals with low back issues or those looking to prevent back pain.</p>

          <p  className={ReverseCrunchStyle["excerciseTemplateExplination"]}>Versatility: The Reverse Crunch can be easily modified to suit different fitness levels and goals. You can adjust the intensity by varying the speed of the movement, the angle of the legs, or incorporating additional resistance.</p>

          <p  className={ReverseCrunchStyle["excerciseTemplateExplination"]}></p>

          <p  className={ReverseCrunchStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default ReverseCrunch;
