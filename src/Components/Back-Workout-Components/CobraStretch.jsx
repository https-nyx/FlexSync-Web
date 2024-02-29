import CobraStyle from "../../Styles/workout.module.css";
import CobraPic from "../../assets/images/cobrasretch.png";


const CobraStretch = () => {
  return (
    <>
      <div className={CobraStyle["excercisesContainer"]}>
      <div className={CobraStyle["excerciseCard"]}>

      <div className={CobraStyle["imageStyle"]}>
      <img src={CobraPic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={CobraStyle["excerciseTemplateTitle"]}>Cobra Stretch</p>

        <p className={CobraStyle["excerciseTemplateExplination"]}>The Cobra Stretch, also known as Bhujangasana in yoga, is a yoga pose that primarily targets the muscles of the back, specifically the muscles along the spine, while also stretching the chest and abdomen. 
            It's an excellent exercise for improving spinal flexibility, strengthening the back muscles, and relieving tension. Incorporating the Cobra Stretch into your yoga practice or daily stretching routine can provide these advantages, leading to improved spinal flexibility, back strength, posture, and overall well-being. </p>
         <br />
         <p className={CobraStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={CobraStyle["excerciseTemplateExplination"]}>Starting Position: Begin by lying face down on your yoga mat or the floor, with your legs extended and the tops of your feet resting flat on the ground.</p>

         <p className={CobraStyle["excerciseTemplateExplination"]}>Engage Core: Engage your core muscles by gently drawing your belly button towards your spine. This helps stabilize your lower back and pelvis throughout the stretch.</p>

         <p className={CobraStyle["excerciseTemplateExplination"]}>Inhale and Lift: Inhale deeply as you slowly lift your chest off the ground, keeping your elbows close to your body and pressing into your hands to lift your torso.  </p>

         <p className={CobraStyle["excerciseTemplateExplination"]}>Extend Arms: If comfortable, you can straighten your arms fully, but avoid locking your elbows. Keep a slight bend in your elbows to prevent strain on the joints. </p>

         <p className={CobraStyle["excerciseTemplateExplination"]}>Roll Shoulders Back: Roll your shoulders back and down away from your ears to open up the chest and broaden across the collarbones. </p>

         <p className={CobraStyle["excerciseTemplateExplination"]}>Hold Position: Hold the Cobra position for a few breaths, maintaining a gentle lift through the chest and lengthening through the spine. Be mindful not to overextend or strain your lower back.</p>

         <p className={CobraStyle["excerciseTemplateExplination"]}>Exhale and Release: Exhale slowly as you lower your chest back down to the ground, returning to the starting position. Relax your shoulders and allow your spine to return to its neutral position.</p>

         <p className={CobraStyle["excerciseTemplateExplination"]}>Repeat: Repeat the Cobra Stretch for several repetitions, gradually increasing the height of your chest lift as you become more comfortable with the movement.</p>

         <p className={CobraStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={CobraStyle["excerciseTemplateExplination"]}>Spinal Flexibility: The Cobra Stretch helps improve flexibility and mobility in the spine by gently arching the back and stretching the muscles along the length of the spine. </p>

          <p  className={CobraStyle["excerciseTemplateExplination"]}>Back Strength: Performing the Cobra Stretch strengthens the muscles of the back, including the erector spinae muscles that run along the spine. </p>

          <p  className={CobraStyle["excerciseTemplateExplination"]}>Core Activation: Engaging the core muscles during the Cobra Stretch helps stabilize the lower back and pelvis, promoting better alignment and supporting the spine.</p>

          <p  className={CobraStyle["excerciseTemplateExplination"]}>Improves Breathing: The deep breathing associated with yoga poses like the Cobra Stretch can help improve lung capacity, increase oxygen intake, and promote relaxation.</p>

          <p  className={CobraStyle["excerciseTemplateExplination"]}> </p>

          <p  className={CobraStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default CobraStretch;
