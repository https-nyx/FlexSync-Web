import BicerpsCurlStyle from "../../Styles/workout.module.css";
import BicepsCurlPic from "../../assets/images/BicepCurl.jpeg"

const BicepsCurl = () => {
  return (
    <>
       <div className={BicerpsCurlStyle["excercisesContainer"]}>
      <div className={BicerpsCurlStyle["excerciseCard"]}>

      <div className={BicerpsCurlStyle["imageStyle"]}>
      <img src={BicepsCurlPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={BicerpsCurlStyle["excerciseTemplateTitle"]}>Biceps Curl</p>

        <p className={BicerpsCurlStyle["excerciseTemplateExplination"]}>The Bicep Curl is a classic strength training exercise that primarily targets the biceps brachii muscle
        Incorporating the Bicep Curl into your workout routine can provide these advantages, leading to improved bicep strength, muscle development, and overall upper body function. 
        </p>
         <br />
         <p className={BicerpsCurlStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={BicerpsCurlStyle["excerciseTemplateExplination"]}>Starting Position: Stand upright with a dumbbell in each hand, palms facing forward, and arms fully extended down by your sides.
        </p>

         <p className={BicerpsCurlStyle["excerciseTemplateExplination"]}>Engage Core: Tighten your core muscles to stabilize your torso and maintain proper posture throughout the exercise.</p>

         <p className={BicerpsCurlStyle["excerciseTemplateExplination"]}>Top Position: At the top of the movement, your palms should be facing your shoulders, and your elbows should be fully flexed.</p>

         <p className={BicerpsCurlStyle["excerciseTemplateExplination"]}>Lowering Phase: Inhale as you slowly lower the dumbbells back to the starting position, maintaining control and resisting the urge to swing the weights.</p>

         <p className={BicerpsCurlStyle["excerciseTemplateExplination"]}>Repeat: Complete the desired number of repetitions, typically starting with 8-12 reps and gradually increasing as you get stronger.</p>

         <p className={BicerpsCurlStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={BicerpsCurlStyle["excerciseTemplateExplination"]}>Bicep Muscle Development: The primary advantage of the Bicep Curl is its effectiveness in targeting and strengthening the biceps brachii muscle. </p>

          <p  className={BicerpsCurlStyle["excerciseTemplateExplination"]}>Joint Stability: While the Bicep Curl primarily targets the biceps, it also engages the muscles of the forearm, shoulder, and upper back to stabilize the joints involved in the movement.</p>

          <p  className={BicerpsCurlStyle["excerciseTemplateExplination"]}>Functional Strength: Strengthening the biceps through exercises like the Bicep Curl can improve your ability to perform everyday tasks that involve lifting, pulling, or carrying objects. </p>

          <p  className={BicerpsCurlStyle["excerciseTemplateExplination"]}>Variety of Equipment: The Bicep Curl can be performed using various types of equipment, including dumbbells, barbells, resistance bands, or cable machines.</p>

          <p  className={BicerpsCurlStyle["excerciseTemplateExplination"]}></p>

          <p  className={BicerpsCurlStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default BicepsCurl;
