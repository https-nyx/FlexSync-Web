import BridgeStyle from "../../Styles/workout.module.css";
import BridgePic from "../../assets/images/bridge.png"

const Bridge = () => {
  return (
    <>
       <div className={BridgeStyle["excercisesContainer"]}>
      <div className={BridgeStyle["excerciseCard"]}>

      <div className={BridgeStyle["imageStyle"]}>
      <img src={BridgePic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={BridgeStyle["excerciseTemplateTitle"]}>The Bridge</p>

        <p className={BridgeStyle["excerciseTemplateExplination"]}>The Bridge is a bodyweight exercise that primarily targets the muscles of the lower back, glutes, and hamstrings, while also engaging the core muscles.
        Incorporating the Bridge workout into your routine can provide these advantages, leading to improved lower back strength, glute activation, hamstring engagement, core stability, and hip mobility.  </p>
         <br />
         <p className={BridgeStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={BridgeStyle["excerciseTemplateExplination"]}>Starting Position: Begin by lying flat on your back with your knees bent and feet flat on the floor, hip-width apart. Keep your arms by your sides, palms facing down.
        </p>

         <p className={BridgeStyle["excerciseTemplateExplination"]}>Engage Core: Tighten your abdominal muscles to stabilize your spine and pelvis. Press your lower back into the floor to maintain a neutral spine position throughout the exercise.</p>

         <p className={BridgeStyle["excerciseTemplateExplination"]}> Lift Hips: Exhale as you lift your hips off the ground by pushing through your heels and engaging your glutes and hamstrings. Keep your shoulders, hips, and knees in a straight line. </p>

         <p className={BridgeStyle["excerciseTemplateExplination"]}>Hold Position: Hold the bridge position at the top for a few seconds, focusing on squeezing your glutes and maintaining a stable core. </p>

         <p className={BridgeStyle["excerciseTemplateExplination"]}>Lower Hips: Inhale as you slowly lower your hips back down to the starting position, maintaining control and keeping your core engaged throughout the movement. and repeat the process</p>
         <p className={BridgeStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={BridgeStyle["excerciseTemplateExplination"]}>Lower Back Strength: The Bridge exercise targets the muscles of the lower back, including the erector spinae, which helps improve lower back strength and stability</p>

          <p  className={BridgeStyle["excerciseTemplateExplination"]}>Glute Activation: The Bridge effectively activates the gluteus maximus, the largest muscle in the buttocks, which is important for hip extension and overall lower body strength. </p>

          <p  className={BridgeStyle["excerciseTemplateExplination"]}>Hamstring Engagement: As you lift your hips off the ground, the Bridge engages the hamstrings, the muscles located on the back of the thighs, promoting hamstring strength and flexibility.</p>

          <p  className={BridgeStyle["excerciseTemplateExplination"]}>Improves Hip Mobility: Performing the Bridge exercise can help improve hip mobility and flexibility, which is beneficial for activities that involve hip extension and range of motion</p>

          <p  className={BridgeStyle["excerciseTemplateExplination"]}> </p>

          <p  className={BridgeStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default Bridge;
