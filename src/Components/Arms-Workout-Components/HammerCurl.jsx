import HammerCurlStyle from "../../Styles/workout.module.css";
import HammerCurlPic from "../../assets/images/hammercurl.png"

const HammerCurl = () => {
  return (
    <>
       <div className={HammerCurlStyle["excercisesContainer"]}>
      <div className={HammerCurlStyle["excerciseCard"]}>

      <div className={HammerCurlStyle["imageStyle"]}>
      <img src={HammerCurlPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={HammerCurlStyle["excerciseTemplateTitle"]}>Hammer Curl</p>

        <p className={HammerCurlStyle["excerciseTemplateExplination"]}>The Hammer Curl is a variation of the traditional bicep curl exercise that targets the biceps brachii muscle as well as the brachialis and brachioradialis muscles in the forearm.
        Incorporating Hammer Curls into your workout routine can provide these advantages, leading to improved bicep and forearm strength, muscle development, and overall upper body function.
        </p>
         <br />
         <p className={HammerCurlStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={HammerCurlStyle["excerciseTemplateExplination"]}>Starting Position: Stand upright with a dumbbell in each hand, palms facing inwards towards your body, and arms fully extended down by your sides.
        </p>

         <p className={HammerCurlStyle["excerciseTemplateExplination"]}>Engage Core: Tighten your core muscles to stabilize your torso and maintain proper posture throughout the exercise.</p>

         <p className={HammerCurlStyle["excerciseTemplateExplination"]}>Curl Motion: Keeping your upper arms stationary and your palms facing inward, exhale as you slowly bend your elbows and lift the dumbbells towards your shoulders. 
         Keep your wrists straight and focus on using your biceps and forearms to perform the movement.</p>

         <p className={HammerCurlStyle["excerciseTemplateExplination"]}>Top Position: At the top of the movement, your palms should be facing each other, and your elbows should be fully flexed.</p>

         <p className={HammerCurlStyle["excerciseTemplateExplination"]}>Lowering Phase: Inhale as you slowly lower the dumbbells back to the starting position, maintaining control and resisting the urge to swing the weights.</p>

         <p className={HammerCurlStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={HammerCurlStyle["excerciseTemplateExplination"]}>Bicep and Forearm Development: The Hammer Curl effectively targets not only the biceps brachii muscle but also the brachialis and brachioradialis muscles in the forearm.</p>

          <p  className={HammerCurlStyle["excerciseTemplateExplination"]}>Variation in Muscle Stimulation: The Hammer Curl provides a different angle of resistance compared to traditional bicep curls, which can lead to increased muscle stimulation and recruitment. </p>

          <p  className={HammerCurlStyle["excerciseTemplateExplination"]}>Improved Grip Strength: Since the Hammer Curl involves maintaining a neutral grip with the palms facing inward, it also engages the muscles of the forearm responsible for grip strength. </p>

          <p  className={HammerCurlStyle["excerciseTemplateExplination"]}></p>

          <p  className={HammerCurlStyle["excerciseTemplateExplination"]}>Joint Stability: Similar to traditional bicep curls, the Hammer Curl also engages the muscles of the shoulder, upper back, and core to stabilize the joints involved in the movement. </p>

          <p  className={HammerCurlStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default HammerCurl;
