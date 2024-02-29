import LateralLungsStyle from "../../Styles/workout.module.css";
import LateralLungePic from "../../assets/images/laterallungs.png";

const LateralLunge = () => {
  return (
    <>
 <div className={LateralLungsStyle["excercisesContainer"]}>
      <div className={LateralLungsStyle["excerciseCard"]}>

      <div className={LateralLungsStyle["imageStyle"]}>
      <img src={LateralLungePic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={LateralLungsStyle["excerciseTemplateTitle"]}>Lateral Lunge</p>

        <p className={LateralLungsStyle["excerciseTemplateExplination"]}>The Lateral Lunge is a lower body exercise that primarily targets the muscles of the hips, thighs, and glutes, while also engaging the muscles of the core for stability. It's a functional movement pattern that mimics activities such as side-stepping or moving laterally, making it beneficial for improving lower body strength, stability, and mobility in different planes of motion.</p>
         <br />
         <p className={LateralLungsStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={LateralLungsStyle["excerciseTemplateExplination"]}>Starting Position: Begin by standing with your feet hip-width apart and your arms relaxed at your sides. Maintain an upright posture with your chest lifted, shoulders back, and core engaged throughout the exercise.</p>

         <p className={LateralLungsStyle["excerciseTemplateExplination"]}>Lunge Position: As you step to the side, bend your right knee and lower your body down into a lunge position, keeping your right knee aligned with your right ankle. Your left leg should remain straight with your left foot flat on the ground.</p>

         <p className={LateralLungsStyle["excerciseTemplateExplination"]}>Hip Hinge: Hinge forward slightly at the hips as you lower your body down into the lunge, keeping your back straight and your chest lifted.</p>

         <p className={LateralLungsStyle["excerciseTemplateExplination"]}>Press Back Up: Push through your right heel to press yourself back up to the starting position, straightening your right leg and returning to standing. Keep your chest lifted and your core engaged as you rise back up. </p>

         <p className={LateralLungsStyle["excerciseTemplateExplination"]}>Switch Sides: Repeat the movement on the opposite side by stepping to the left with your left foot and lunging down on the left side. Alternate between right and left sides for the desired number of repetitions.</p>
         <p className={LateralLungsStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={LateralLungsStyle["excerciseTemplateExplination"]}>Hip and Thigh Strength: The Lateral Lunge targets the muscles of the hips, thighs, and glutes, including the quadriceps, hamstrings, adductors, and gluteus medius. </p>

          <p  className={LateralLungsStyle["excerciseTemplateExplination"]}>Hip Mobility: Performing the Lateral Lunge helps improve hip mobility and flexibility by moving the hips through a wide range of motion in the frontal plane (side-to-side) </p>

          <p  className={LateralLungsStyle["excerciseTemplateExplination"]}>Balance and Coordination: The Lateral Lunge requires balance and coordination to execute the movement smoothly and maintain stability throughout the exercise.</p>

          <p  className={LateralLungsStyle["excerciseTemplateExplination"]}>Core Stability: Engaging the core muscles throughout the Lateral Lunge helps stabilize the torso and maintain proper posture and alignment.</p>

          <p  className={LateralLungsStyle["excerciseTemplateExplination"]}> </p>

          <p  className={LateralLungsStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>    </>
  );
};

export default LateralLunge;
