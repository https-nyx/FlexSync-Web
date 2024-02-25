import DietStyle from "../Styles/diet.module.css";
import { Link } from "react-router-dom";


const Diet = () => {
  return <>
  <div className={DietStyle["dietContainer"]} >

  <div className={DietStyle["dietCard"]}>
       <Link to="/diet/:id">
    <h2>Diet</h2>
    <p> 1 Description</p>
        </Link>
  </div>

  <div className={DietStyle["dietCard"]}>
    <Link to="/diet/:id">
  <h2>Diet Style 1</h2>
  <p>Diet description</p>
    </Link>
  </div>

  <div className={DietStyle["dietCard"]}>
    <Link to="/diet/:id">
  <h2>Diet Style 2</h2>
  <p>Diet description</p>
  </Link>
  </div>

  <div className={DietStyle["dietCard"]}>
  <Link to="/diet/:id">
  <h2>Diet Style 3</h2>
  <p>Diet description</p>
  </Link>
  </div>

  <div className={DietStyle["dietCard"]}>
  <Link to="/diet/:id">
  <h2>Diet Style 4</h2>
  <p>Diet description</p>
  </Link>
  </div>

  <div className={DietStyle["dietCard"]}>
  <Link to="/diet/:id">
  <h2>Diet Style 5</h2>
  <p>Diet description</p>
  </Link>
  </div>

  <div className={DietStyle["dietCard"]}>
  <Link to="/diet/:id">
  <h2>Most popular diet</h2>
  <p>Most popular description</p>
  </Link>
  </div>


  </div>
  
  
  </>;
};

export default Diet;
