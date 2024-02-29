import OverHeadPressStyle from "../../Styles/workout.module.css";
import OverheadPressPic from "../../assets/images/overheadpress.png";

const OverheadPress = () => {
  return (
    <>
        <div className={OverHeadPressStyle["excercisesContainer"]}>
      <div className={OverHeadPressStyle["excerciseCard"]}>

      <div className={OverHeadPressStyle["imageStyle"]}>
      <img src={OverheadPressPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={OverHeadPressStyle["excerciseTemplateTitle"]}>Overhead Press</p>

        <p className={OverHeadPressStyle["excerciseTemplateExplination"]}>The Overhead Press, also known as the Shoulder Press, is a compound strength training exercise that primarily targets the deltoid muscles of the shoulders,
         as well as several other muscles in the upper body and core. Incorporating the Overhead Press into your workout routine can provide these advantages, 
         leading to improved shoulder strength, muscle development, core stability, and overall upper body function.</p>
         <br />
         <p className={OverHeadPressStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={OverHeadPressStyle["excerciseTemplateExplination"]}>Starting Position: Stand upright with your feet shoulder-width apart and hold a barbell or dumbbells at shoulder height with an overhand grip
          (palms facing forward) or a neutral grip (palms facing each other).
        </p>

         <p className={OverHeadPressStyle["excerciseTemplateExplination"]}>Engage Core: Tighten your core muscles to stabilize your torso and maintain proper posture throughout the exercise.</p>

         <p className={OverHeadPressStyle["excerciseTemplateExplination"]}>Press Motion: Exhale as you extend your arms and push the weight overhead until your arms are fully extended and the weight is directly above your head. </p>

         <p className={OverHeadPressStyle["excerciseTemplateExplination"]}>Top Position: At the top of the movement, your arms should be fully extended, and the weight should be directly above your head.</p>

         <p className={OverHeadPressStyle["excerciseTemplateExplination"]}>Lowering Phase: Inhale as you slowly lower the weight back to the starting position, maintaining control and resisting the urge to let the weight drop.</p>

         <p className={OverHeadPressStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={OverHeadPressStyle["excerciseTemplateExplination"]}>Shoulder Muscle Development: The Overhead Press primarily targets the deltoid muscles of the shoulders, including the anterior (front), medial (middle), and to some extent, the posterior (rear) deltoids.</p>

          <p  className={OverHeadPressStyle["excerciseTemplateExplination"]}>Upper Body Strength: In addition to the deltoids, the Overhead Press also engages several other muscles in the upper body, including the triceps, upper chest, and upper back muscles. </p>

          <p  className={OverHeadPressStyle["excerciseTemplateExplination"]}>Bone Health: Weight-bearing exercises like the Overhead Press can help improve bone density and reduce the risk of osteoporosis and bone-related injuries, particularly in the upper body and spine. </p>

          <p  className={OverHeadPressStyle["excerciseTemplateExplination"]}></p>

          <p  className={OverHeadPressStyle["excerciseTemplateExplination"]}> </p>

          <p  className={OverHeadPressStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default OverheadPress;
