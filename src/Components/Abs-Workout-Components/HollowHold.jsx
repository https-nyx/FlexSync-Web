import HollowStyle from "../../Styles/workout.module.css";
import HollowPic from "../../assets/images/Hollowhold.png"

const HollowHold = () => {
  return (
    <>
      <div className={HollowStyle["excercisesContainer"]}>
      <div className={HollowStyle["excerciseCard"]}>
        
        <div className={HollowStyle["imageStyle"]}>
      <img src={HollowPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        

        <p className={HollowStyle["excerciseTemplateTitle"]}>The Hollow Hold</p>

        <p className={HollowStyle["excerciseTemplateExplination"]}> The Hollow Hold exercise is a core-strengthening exercise that targets multiple muscles in the abdominal region. 
        Here's how to perform it and the muscles it focuses on By incorporating the Hollow Hold into your workout routine, you can effectively strengthen and tone your core muscles,
         improve posture, and enhance overall stability and balance. As with any exercise, it's essential to maintain proper form and gradually progress in intensity to avoid injury 
         and maximize benefits. The muscles targeted the most are the rectus abdominus, and the transverse abdominis</p>
         <br />
         <p className={HollowStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={HollowStyle["excerciseTemplateExplination"]}>Starting Position: Lie flat on your back with your arms extended overhead and your legs straight out.</p>

         <p className={HollowStyle["excerciseTemplateExplination"]}>Engage Core: Press your lower back into the ground by engaging your core muscles. This action should lift your shoulders and legs slightly off the ground.</p>

         <p className={HollowStyle["excerciseTemplateExplination"]}>Raise Legs: Lift your legs off the ground, keeping them straight. Ideally, your legs should be at about a 45-degree angle from the floor.</p>

         <p className={HollowStyle["excerciseTemplateExplination"]}>Raise Shoulders: Simultaneously, lift your shoulders off the ground, keeping your arms straight and reaching towards your toes.</p>

         <p className={HollowStyle["excerciseTemplateExplination"]}>Hold Position: Maintain this position while keeping your core engaged and your lower back pressed into the ground. Imagine creating a slight "hollow" shape with your body, hence the name "Hollow Hold."</p>

         <p className={HollowStyle["excerciseSecondTitle"]}>Advantages:</p>

         <p className={HollowStyle["excerciseTemplateExplination"]}>Minimal Equipment Required: The Hollow Hold can be performed virtually anywhere with minimal equipment, making it a convenient exercise for strengthening the core muscles without the need for a gym or specialized equipment.</p>

         <p className={HollowStyle["excerciseTemplateExplination"]}>Improves Body Awareness: The Hollow Hold requires body awareness and control to maintain proper form throughout the exercise.</p>
         
         <p className={HollowStyle["excerciseTemplateExplination"]}>Reduces Risk of Injury: Weak core muscles can contribute to poor posture, imbalance, and an increased risk of injury, particularly in the lower back and pelvis.</p>

         <p className={HollowStyle["excerciseTemplateExplination"]}></p>

         <p className={HollowStyle["excerciseTemplateExplination"]}></p>

        <p> </p>
      </div>


      </div>
    </>
  );
};

export default HollowHold;
