import PlankStyle from "../../Styles/workout.module.css";
import PlankPic from "../../assets/images/plank.png"

const Plank = () => {
  return (
    <>
        <div className={PlankStyle["excercisesContainer"]}>
      <div className={PlankStyle["excerciseCard"]}>

      <div className={PlankStyle["imageStyle"]}>
      <img src={PlankPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={PlankStyle["excerciseTemplateTitle"]}>The Plank</p>

        <p className={PlankStyle["excerciseTemplateExplination"]}>The Plank exercise is a fundamental core-strengthening exercise that engages multiple abdominal muscle groups simultaneously By incorporating the Plank into your workout routine, 
        you can strengthen your core muscles, improve overall stability and posture, and reduce the risk of lower back pain. It's a versatile exercise that can be modified to suit different fitness levels and goals, 
        making it a valuable addition to any exercise program. As with any exercise, focus on maintaining proper form and gradually increasing the duration or difficulty as you progress. Thye muscles it focuses on are the Gluteus Maximus 
        and the Erector Spinae.
        </p>
         <br />
         <p className={PlankStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={PlankStyle["excerciseTemplateExplination"]}>Starting Position: Begin by getting into a push-up position, with your hands placed directly under your shoulders and your body forming a straight line from head to heels.</p>

         <p className={PlankStyle["excerciseTemplateExplination"]}>Engage Core: Tighten your abdominal muscles and squeeze your glutes to stabilize your spine and pelvis. This action helps maintain a neutral spine position throughout the exercise.</p>

         <p className={PlankStyle["excerciseTemplateExplination"]}>Hold Position: Hold this position, keeping your body in a straight line and avoiding any sagging or arching in the lower back.
          Your head should be in line with your spine, and your gaze should be towards the floor, about a foot in front of your hands.</p>

         <p className={PlankStyle["excerciseTemplateExplination"]}>Breathe: Maintain steady breathing throughout the exercise. Avoid holding your breath.</p>

         <p className={PlankStyle["excerciseTemplateExplination"]}>Hold Time: Aim to hold the Plank position for a certain duration, starting with 20-30 seconds and gradually increasing as you build strength and endurance.</p>

         <p className={PlankStyle["excerciseSecondTitle"]}>Advantages:</p>

         <p  className={PlankStyle["excerciseTemplateExplination"]}>Core Strength: The Plank primarily targets the rectus abdominis, transverse abdominis, obliques, and erector spinae muscles, which are essential for core strength. Strengthening these muscles can improve overall stability and reduce the risk of back pain.</p>

         <p  className={PlankStyle["excerciseTemplateExplination"]}>Postural Improvement: By engaging the core muscles and maintaining a neutral spine position, the Plank helps improve posture. This can alleviate strain on the spine and contribute to a healthier alignment.</p>
         
         <p  className={PlankStyle["excerciseTemplateExplination"]}>Improved Balance and Coordination: Holding the Plank position requires coordination and balance, especially when maintaining proper form. Regular practice can enhance proprioception and overall balance.</p>

         <p  className={PlankStyle["excerciseTemplateExplination"]}>Improved Athletic Performance: Strong core muscles are crucial for athletic performance in various sports and activities. Incorporating the Plank into your workout routine can enhance overall strength, stability, and performance in other activities.</p>

         <p  className={PlankStyle["excerciseTemplateExplination"]}></p>

        <p  className={PlankStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default Plank;
