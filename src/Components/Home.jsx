import React from "react";
import HomeStyle from "../Styles/home.module.css";
import gympic from '../assets/images/kegyat.jpg';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className={HomeStyle.herobanner}>

    <h1 className={HomeStyle.bannertitle}>FlexSync</h1>

    <h2 className={HomeStyle.bannersubtitle}>Staying Fit Made Easier!</h2>

    <p className={HomeStyle.bannertext}>Create the workout and diet plan for you!</p>
    <Link to="/signup">
    <button className={HomeStyle.bannerbutton} href="#WorkoutPlan">Get Started</button>
    </Link>
    <button className={HomeStyle.bannerbutton}>About us</button>
    

    <h3 className={HomeStyle.bannerfitness}>FITNESS</h3>

    <img src={gympic} alt="banner" className={HomeStyle.gympic}> 
    </img>
  </div>
    
  );
};

export default Home;
