import CatStyle from "../../Styles/workout.module.css";
import CatStylePic from "../../assets/images/catstretch.png"

const CatStretch = () => {
  return (
    <>
       <div className={CatStyle["excercisesContainer"]}>
      <div className={CatStyle["excerciseCard"]}>

      <div className={CatStyle["imageStyle"]}>
      <img src={CatStylePic} alt="exercisepic" class="exercise-pic"> 
      </img>
        </div>

        <p className={CatStyle["excerciseTemplateTitle"]}>Cat Style</p>

        <p className={CatStyle["excerciseTemplateExplination"]}>The Cat Stretch, also known as Cat-Cow or Cat-Camel, is a simple yet effective exercise commonly used in yoga and Pilates to improve spinal flexibility, mobility, and posture. 
        Incorporating the Cat Stretch into your daily routine can provide these advantages, leading to improved spinal mobility, postural alignment, core strength, stress relief, and circulation. It's a gentle yet effective exercise that can be practiced by individuals of all fitness levels to promote spinal health and overall well-being. </p>
         <br />
         <p className={CatStyle["excerciseSecondTitle"]}> Technique:</p>

         <p className={CatStyle["excerciseTemplateExplination"]}>Starting Position: Begin on your hands and knees, with your wrists directly under your shoulders and your knees directly under your hips. Keep your spine in a neutral position, with your head in line with your spine and your gaze towards the floor.</p>

         <p className={CatStyle["excerciseTemplateExplination"]}>Cat Position (Flexion): Inhale as you slowly round your spine towards the ceiling, like a cat stretching its back. Tuck your chin towards your chest and draw your belly button towards your spine to deepen the stretch in your upper back. Imagine pulling your belly button towards the ceiling to create space between each vertebra.</p>

         <p className={CatStyle["excerciseTemplateExplination"]}>Cow Position (Extension): Exhale as you slowly arch your back in the opposite direction, dropping your belly towards the floor and lifting your chest and tailbone towards the ceiling. Lift your head and gaze forward or slightly upward, opening up your chest and lengthening your spine. </p>

         <p className={CatStyle["excerciseTemplateExplination"]}>Flowing Movement: Continue to move between the Cat and Cow positions in a smooth, flowing motion, synchronizing your breath with your movement. Inhale as you move into Cat position, and exhale as you move into Cow position. Repeat this sequence for several breaths or as desired. </p>

         <p className={CatStyle["excerciseTemplateExplination"]}></p>
         <p className={CatStyle["excerciseSecondTitle"]}>Advantages:</p>

          <p  className={CatStyle["excerciseTemplateExplination"]}>Spinal Mobility: The Cat Stretch helps improve flexibility and mobility in the spine by gently stretching and articulating each vertebra. </p>

          <p  className={CatStyle["excerciseTemplateExplination"]}>Postural Alignment: Practicing the Cat Stretch can help improve posture by releasing tension and tightness in the muscles of the back, shoulders, and neck.  </p>

          <p  className={CatStyle["excerciseTemplateExplination"]}>Core Activation: Engaging the core muscles during the Cat Stretch helps stabilize the spine and pelvis, promoting core strength and stability. </p>

          <p  className={CatStyle["excerciseTemplateExplination"]}>Stress Relief: The rhythmic movement and deep breathing associated with the Cat Stretch can help promote relaxation and reduce stress.</p>

          <p  className={CatStyle["excerciseTemplateExplination"]}>Improved Circulation: Moving the spine through its full range of motion during the Cat Stretch can help improve circulation to the spinal discs, muscles, and surrounding tissues. </p>

          <p  className={CatStyle["excerciseTemplateExplination"]}> </p>
      </div>


      </div>
    </>
  );
};

export default CatStretch;
