import CalfRaiseStyle from "../../Styles/workout.module.css";
import CalfRaisePic from "../../assets/images/calfraise.png";

const CalfRaise = () => {
  return (
    <>
       <div className={CalfRaiseStyle["excercisesContainer"]}>
      <div className={CalfRaiseStyle["excerciseCard"]}>

      <div className={CalfRaiseStyle["imageStyle"]}>
      <img src={CalfRaisePic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={CalfRaiseStyle["excerciseTemplateTitle"]}>Calf Raise</p>

        <p className={CalfRaiseStyle["excerciseTemplateExplination"]}>The Calf Raise is a simple yet effective exercise that primarily targets the calf muscles, specifically the gastrocnemius and soleus muscles, which are located on the back of the lower leg. It's commonly performed using bodyweight or with additional resistance such as dumbbells or a calf raise machine. </p>
         <br />
         <p className={CalfRaiseStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={CalfRaiseStyle["excerciseTemplateExplination"]}>Starting Position: Begin by standing upright with your feet hip-width apart on a flat surface. Keep your posture tall, shoulders relaxed, and core engaged throughout the exercise.</p>

         <p className={CalfRaiseStyle["excerciseTemplateExplination"]}>Engage Core: Engage your core muscles by gently drawing your belly button towards your spine. This helps stabilize your torso and maintain proper alignment throughout the exercise.</p>

         <p className={CalfRaiseStyle["excerciseTemplateExplination"]}>Raising Phase: Slowly rise up onto the balls of your feet by lifting your heels off the ground. Focus on pressing through the balls of your feet and squeezing your calf muscles at the top of the movement. </p>

         <p className={CalfRaiseStyle["excerciseTemplateExplination"]}>Hold Position: Hold the raised position for a brief moment at the top of the movement to maximize muscle contraction and engagement in the calf muscles.</p>

         <p className={CalfRaiseStyle["excerciseTemplateExplination"]}>Repeat: Complete the desired number of repetitions, typically starting with 8-12 reps and gradually increasing as you get stronger.</p>
         <p className={CalfRaiseStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={CalfRaiseStyle["excerciseTemplateExplination"]}>Calf Strength and Size: The primary advantage of the Calf Raise exercise is its ability to strengthen and develop the calf muscles, specifically the gastrocnemius and soleus.</p>

          <p  className={CalfRaiseStyle["excerciseTemplateExplination"]}>Ankle Stability: Performing calf raises helps improve ankle stability and proprioception, as it requires balance and control throughout the movement.  </p>

          <p  className={CalfRaiseStyle["excerciseTemplateExplination"]}>Functional Movement: Strong calf muscles are essential for various functional movements and activities, such as walking, running, jumping, and climbing stairs.</p>

          <p  className={CalfRaiseStyle["excerciseTemplateExplination"]}>Aesthetic Benefits: Developing well-defined calf muscles can contribute to a balanced and aesthetically pleasing physique, particularly when wearing shorts or skirts.</p>

          <p  className={CalfRaiseStyle["excerciseTemplateExplination"]}>Injury Prevention: Strengthening the calf muscles through calf raises can help prevent injuries related to the lower leg, such as Achilles tendonitis, shin splints, and calf strains. </p>

          <p  className={CalfRaiseStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default CalfRaise;
