import PushupStyle from "../../Styles/workout.module.css";
import PushupPic from "../../assets/images/pushup.png"

const Pushup = () => {
  return (
    <>
      <div className={PushupStyle["excercisesContainer"]}>
      <div className={PushupStyle["excerciseCard"]}>

      <div className={PushupStyle["imageStyle"]}>
      <img src={PushupPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={PushupStyle["excerciseTemplateTitle"]}>Pushups</p>

        <p className={PushupStyle["excerciseTemplateExplination"]}>The Pushup is a classic bodyweight exercise that primarily targets the muscles of the chest, shoulders, and triceps, 
        while also engaging the core and other stabilizing muscles. </p>
         <br />
         <p className={PushupStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={PushupStyle["excerciseTemplateExplination"]}>Starting Position: Begin in a prone position on the floor with your hands placed slightly wider than shoulder-width apart and your arms fully extended. 
        </p>

         <p className={PushupStyle["excerciseTemplateExplination"]}>Engage Core: Tighten your abdominal muscles and glutes to maintain a straight line from your head to your heels. Avoid sagging or arching your lower back.</p>

         <p className={PushupStyle["excerciseTemplateExplination"]}>Lowering Phase: Inhale as you slowly lower your body towards the floor by bending your elbows. Keep your elbows close to your body and your chest lowered until it nearly touches the ground. </p>

         <p className={PushupStyle["excerciseTemplateExplination"]}>Pushing Phase: Exhale as you push yourself back up to the starting position by straightening your arms. </p>

         <p className={PushupStyle["excerciseTemplateExplination"]}>Repeat: Complete the desired number of repetitions, typically starting with 8-12 reps and gradually increasing as you get stronger.</p>
         <p className={PushupStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={PushupStyle["excerciseTemplateExplination"]}>Upper Body Strength: The Pushup primarily targets the muscles of the chest (pectoralis major), shoulders (deltoids), and triceps.</p>

          <p  className={PushupStyle["excerciseTemplateExplination"]}>Core Stability: The Pushup requires significant core stabilization to maintain proper posture and alignment throughout the movement. </p>

          <p  className={PushupStyle["excerciseTemplateExplination"]}>Scapular Stabilization: Pushups also engage the muscles around the shoulder blades (scapulae), including the serratus anterior and rhomboids, to stabilize the shoulder blades and maintain proper shoulder alignment. </p>

          <p  className={PushupStyle["excerciseTemplateExplination"]}></p>

          <p  className={PushupStyle["excerciseTemplateExplination"]}> </p>

          <p  className={PushupStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default Pushup;
