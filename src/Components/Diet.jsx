import DietStyle from "../Styles/diet.module.css";
import { Link } from "react-router-dom";

const Diet = () => {
  return (
    <>
      <div className={DietStyle["dietContainer"]}>
        <div className={DietStyle["dietCard"]}>
          <Link to="/diet/vegetarian">
            <h2>Vegetarian</h2>
            <p> 1 Description</p>
          </Link>
        </div>

        <div className={DietStyle["dietCard"]}>
          <Link to="/diet/pescetarian">
            <h2>Pescetraian</h2>
            <p>Diet description</p>
          </Link>
        </div>

        <div className={DietStyle["dietCard"]}>
          <Link to="/diet/mediterranean">
            <h2>mediterranean</h2>
            <p>Diet description</p>
          </Link>
        </div>

        <div className={DietStyle["dietCard"]}>
          <Link to="/diet/HighProteinDiet">
            <h2>High Protein Diet</h2>
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
    </>
  );
};

export default Diet;
