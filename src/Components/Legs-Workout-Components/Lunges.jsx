import LungesStyle from "../../Styles/workout.module.css";
import LungesPic from "../../assets/images/lunge.png";

const Lunges = () => {
  return (
    <>
 <div className={LungesStyle["excercisesContainer"]}>
      <div className={LungesStyle["excerciseCard"]}>

      <div className={LungesStyle["imageStyle"]}>
      <img src={LungesPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={LungesStyle["excerciseTemplateTitle"]}>Lunges</p>

        <p className={LungesStyle["excerciseTemplateExplination"]}>Lunges are a versatile lower body exercise that target multiple muscle groups, including the quadriceps, hamstrings, glutes, and calves. They're effective for building lower body strength, improving balance and coordination, and enhancing functional movement patterns. Lunges can be performed in various directions (forward, reverse, lateral) and with or without added resistance, making them suitable for individuals of all fitness levels. </p>
         <br />
         <p className={LungesStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={LungesStyle["excerciseTemplateExplination"]}>Starting Position: Stand tall with your feet hip-width apart and your arms relaxed at your sides. Engage your core muscles by drawing your belly button towards your spine to stabilize your torso.</p>

         <p className={LungesStyle["excerciseTemplateExplination"]}>Step Forward: Take a controlled step forward with your right foot, landing with your heel first and then lowering your body down towards the ground.</p>

         <p className={LungesStyle["excerciseTemplateExplination"]}>Lowering Phase: Bend both knees to lower your body straight down towards the ground, keeping your torso upright and your chest lifted.</p>

         <p className={LungesStyle["excerciseTemplateExplination"]}>Pressing Phase: Push through your front heel to drive yourself back up to the starting position, straightening your front leg and returning to a standing position. </p>

         <p className={LungesStyle["excerciseTemplateExplination"]}>Repeat: Complete the desired number of repetitions on one leg before switching to the other leg. Aim for 8-12 repetitions per leg for beginners, gradually increasing as you get stronger.</p>
         <p className={LungesStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={LungesStyle["excerciseTemplateExplination"]}>Lower Body Strength: Lunges target the muscles of the lower body, including the quadriceps, hamstrings, glutes, and calves. </p>

          <p  className={LungesStyle["excerciseTemplateExplination"]}>Balance and Coordination: Lunges require balance and coordination to perform correctly, especially when performing variations like walking lunges or lateral lunges. </p>

          <p  className={LungesStyle["excerciseTemplateExplination"]}>Flexibility: Lunges help improve lower body flexibility, particularly in the hip flexors, quadriceps, and hamstrings.</p>

          <p  className={LungesStyle["excerciseTemplateExplination"]}>Versatility: Lunges can be easily modified to suit different fitness levels and goals by adjusting factors such as range of motion, stepping distance, and added resistance. This versatility makes lunges a valuable exercise for individuals of all fitness levels.</p>

          <p  className={LungesStyle["excerciseTemplateExplination"]}> </p>

          <p  className={LungesStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>    </>
  );
};

export default Lunges;
