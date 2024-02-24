import React from "react";
import HomeStyle from "../Styles/home.module.css";
import gympic from '../assets/images/kegyat.jpg';

const Home = () => {
  return (
    <div className={HomeStyle.herobanner}>

    <h1 className={HomeStyle.bannertitle}>FlexSync</h1>

    <h2 className={HomeStyle.bannersubtitle}>Staying Fit Made Easier!</h2>

    <p className={HomeStyle.bannertext}>Create the workout and diet plan for you!</p>

    <button className={HomeStyle.bannerbutton} href="#WorkoutPlan">Get Started</button>

    <button className={HomeStyle.bannerbutton}>About us</button>

    <h3 className={HomeStyle.bannerfitness}>FITNESS</h3>

    <img src={gympic} alt="banner" class="gym-pic" className={HomeStyle.gympic}> 
    </img>
  </div>
    
  );
};

export default Home;
