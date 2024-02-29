import LegRaiseStyle from "../../Styles/workout.module.css";
import LegRaisePic from "../../assets/images/legraise.png"

const LegRaise = () => {
  return (
    <>
       <div className={LegRaiseStyle["excercisesContainer"]}>
      <div className={LegRaiseStyle["excerciseCard"]}>

      <div className={LegRaiseStyle["imageStyle"]}>
      <img src={LegRaisePic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>
      

        <p className={LegRaiseStyle["excerciseTemplateTitle"]}>The Leg Raise</p>

        <p className={LegRaiseStyle["excerciseTemplateExplination"]}> The Leg Raise exercise is another effective core-strengthening 
        exercise that primarily targets the lower abdominal muscles and hip flexors. By incorporating Leg Raises into your workout
         routine, you can strengthen your lower abdominal muscles, improve hip flexor flexibility and strength,
          and enhance overall core stability. As with any exercise, focus on maintaining proper form, breathing rhythmically, 
          and gradually progressing in intensity to avoid strain and maximize benefits.
          The excercise mostly focuses on the Obliques and the lower abdominals
          Here's how to perform it and the muscles it focuses on:</p>
         <br />
         <p className={LegRaiseStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={LegRaiseStyle["excerciseTemplateExplination"]}>Starting Position: Lie flat on your back with your legs extended and your arms resting by your sides, palms facing down.</p>

         <p className={LegRaiseStyle["excerciseTemplateExplination"]}>Engage Core:  Press your lower back into the ground by engaging your core muscles. This action should create a slight arch in your lower back.</p>

         <p className={LegRaiseStyle["excerciseTemplateExplination"]}>Lift Legs: While keeping your core engaged, slowly lift both legs off the ground simultaneously. Your legs should be straight, and ideally, they should reach towards the ceiling.</p>

         <p className={LegRaiseStyle["excerciseTemplateExplination"]}>Controlled Movement: Lift your legs using your abdominal muscles rather than swinging them or using momentum. Focus on a slow and controlled movement.</p>

         <p className={LegRaiseStyle["excerciseTemplateExplination"]}>Repeat: Complete the desired number of repetitions, typically starting with 8-12 reps and gradually increasing as you get stronger.</p>

         <p className={LegRaiseStyle["excerciseSecondTitle"]}>Advantages:</p>

         <p className={LegRaiseStyle["excerciseTemplateExplination"]}>Lower Abdominal Targeting: Leg Raises primarily target the lower abdominal muscles, including the lower portion of the rectus abdominis. Strengthening these muscles can improve definition and strength in the lower abdomen.</p>

         <p className={LegRaiseStyle["excerciseTemplateExplination"]}>Functional Strength: The strength gained from Leg Raises translates to improved performance in daily activities that involve lifting and moving the legs, such as climbing stairs, getting out of a chair, or bending over to pick up objects.</p>
         
         <p className={LegRaiseStyle["excerciseTemplateExplination"]}>Enhances Flexibility: Leg Raises require flexibility in the hip flexors and hamstrings to lift the legs towards the torso.</p>

         <p className={LegRaiseStyle["excerciseTemplateExplination"]}>Improves Posture: Strong lower abdominal muscles contribute to better posture by providing support to the lower back and pelvis.</p>

         <p className={LegRaiseStyle["excerciseTemplateExplination"]}></p>

        <p> </p>
      </div>


      </div>
    </>
  );
};

export default LegRaise;
