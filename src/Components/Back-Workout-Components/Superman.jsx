import SupermanStyle from "../../Styles/workout.module.css";
import SupermanPic from "../../assets/images/superman.png";

const Superman = () => {
  return (
    <>
      <div className={SupermanStyle["excercisesContainer"]}>
      <div className={SupermanStyle["excerciseCard"]}>

      <div className={SupermanStyle["imageStyle"]}>
      <img src={SupermanPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={SupermanStyle["excerciseTemplateTitle"]}>The Superman</p>

        <p className={SupermanStyle["excerciseTemplateExplination"]}> The Superman exercise is a bodyweight exercise that targets the muscles of the lower back, glutes, and hamstrings, while also engaging the muscles of the upper back, shoulders, and core.
         It's named after the superhero's flying pose, as it mimics the action of flying through the air with arms and legs extended. Here's how to perform the Superman exercise:</p>
         <br />
         <p className={SupermanStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={SupermanStyle["excerciseTemplateExplination"]}>Starting Position: Begin by lying face down on a mat or the floor with your arms extended overhead and your legs straight behind you. Your body should be fully extended, with your palms facing down and your toes pointed.</p>

         <p className={SupermanStyle["excerciseTemplateExplination"]}>Engage Core: Engage your core muscles by gently drawing your belly button towards your spine. This helps stabilize your lower back and pelvis throughout the exercise.</p>

         <p className={SupermanStyle["excerciseTemplateExplination"]}>Lift Arms and Legs: Inhale deeply as you simultaneously lift your arms, chest, and legs off the ground, using the muscles of your lower back, glutes, and upper back. Keep your neck in a neutral position by looking towards the floor. </p>

         <p className={SupermanStyle["excerciseTemplateExplination"]}>Squeeze Glutes: At the top of the movement, focus on squeezing your glutes to lift your legs higher off the ground and engage the muscles of the lower back and hamstrings. </p>

         <p className={SupermanStyle["excerciseTemplateExplination"]}>Exhale and Lower: Exhale slowly as you lower your arms, chest, and legs back down to the starting position, maintaining control and resisting the urge to let gravity take over.</p>
         
         <p className={SupermanStyle["excerciseTemplateExplination"]}>Repeat: Repeat the Superman exercise for several repetitions, gradually increasing the duration of the hold and the height of the lift as you become more comfortable with the movement.</p>
         
         <p className={SupermanStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={SupermanStyle["excerciseTemplateExplination"]}>Lower Back Strength: The Superman exercise targets the muscles of the lower back, including the erector spinae muscles that run along the length of the spine. </p>

          <p  className={SupermanStyle["excerciseTemplateExplination"]}>Glute Activation: Squeezing the glutes at the top of the Superman exercise helps engage the muscles of the buttocks, including the gluteus maximus.  </p>

          <p  className={SupermanStyle["excerciseTemplateExplination"]}>Upper Back Activation: The Superman exercise engages the muscles of the upper back, including the rhomboids and trapezius muscles, as you lift your arms and chest off the ground. </p>

          <p  className={SupermanStyle["excerciseTemplateExplination"]}>Core Stability: Engaging the core muscles throughout the Superman exercise helps stabilize the spine and pelvis, promoting better alignment and supporting the lower back.</p>

          <p  className={SupermanStyle["excerciseTemplateExplination"]}> </p>

          <p  className={SupermanStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default Superman;
