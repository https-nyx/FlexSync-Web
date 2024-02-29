import LegCurlStyle from "../../Styles/workout.module.css";
import LegCurlPic from "../../assets/images/legcurl.png";

const LegCurl = () => {
  return (
    <>
 <div className={LegCurlStyle["excercisesContainer"]}>
      <div className={LegCurlStyle["excerciseCard"]}>

      <div className={LegCurlStyle["imageStyle"]}>
      <img src={LegCurlPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={LegCurlStyle["excerciseTemplateTitle"]}>Leg Curl</p>

        <p className={LegCurlStyle["excerciseTemplateExplination"]}>The Leg Curl exercise is a popular isolation exercise that primarily targets the muscles of the hamstrings, specifically the biceps femoris, semitendinosus, and semimembranosus. It's commonly performed using a leg curl machine, but variations can also be done with resistance bands or a stability ball. The Leg Curl is effective for strengthening the hamstrings, improving knee stability, and enhancing athletic performance. </p>
         <br />
         <p className={LegCurlStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={LegCurlStyle["excerciseTemplateExplination"]}>Starting Position: Position your legs straight and fully extend your knees, keeping your toes pointed forward and your hips in line with your torso.</p>

         <p className={LegCurlStyle["excerciseTemplateExplination"]}>Engage Core: Engage your core muscles by gently drawing your belly button towards your spine. This helps stabilize your torso and maintain proper alignment throughout the exercise.</p>

         <p className={LegCurlStyle["excerciseTemplateExplination"]}>Curling Phase: Exhale as you flex your knees and curl your heels towards your glutes, contracting your hamstrings. Keep your upper body flat on the bench and avoid arching your lower back. </p>

         <p className={LegCurlStyle["excerciseTemplateExplination"]}>Hold Contraction: Hold the contracted position for a brief moment to maximize muscle engagement in the hamstrings. </p>

         <p className={LegCurlStyle["excerciseTemplateExplination"]}>Repeat: Complete the desired number of repetitions, typically starting with 8-12 reps and gradually increasing as you get stronger.</p>

         <p className={LegCurlStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={LegCurlStyle["excerciseTemplateExplination"]}>Hamstring Strength: The Leg Curl exercise primarily targets the muscles of the hamstrings, which are important for knee flexion and hip extension.</p>

          <p  className={LegCurlStyle["excerciseTemplateExplination"]}> Knee Stability: The Leg Curl exercise strengthens the muscles around the knee joint, including the hamstrings and stabilizing muscles.</p>

          <p  className={LegCurlStyle["excerciseTemplateExplination"]}>Muscle Balance: Incorporating hamstring exercises like the Leg Curl into your workout routine helps maintain muscle balance between the quadriceps and hamstrings.</p>

          <p  className={LegCurlStyle["excerciseTemplateExplination"]}>Isolation: The Leg Curl exercise isolates the hamstrings, allowing for targeted muscle engagement and development.</p>

          <p  className={LegCurlStyle["excerciseTemplateExplination"]}> </p>

          <p  className={LegCurlStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>    </>
  );
};

export default LegCurl;
