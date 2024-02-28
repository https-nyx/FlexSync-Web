import DietStyle from "../Styles/dietform.module.css";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";




const Mealplan = () => {

    const [title, setTitle] = useState("");
    const [breakfast, setBreakfast] = useState("");
    const[lunch, setLunch] = useState("");
    const[dinner, setDinner] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();
        const mealplan = {title,breakfast,lunch,dinner};

        const response = await fetch(
            "API LINK HERE",
            {
                method:"POST",
                body:JSON.stringify(mealplan),
                headers: {
                    "Content-type": "application/json",
                },
            }
        );

        const json = await response.json();

        if(!response.ok){
            SpeechSynthesisErrorEvent(json.error);
        }else{
            setError(null);
            setTitle("");
            setBreakfast("");
            setLunch("");
            setDinner("");
            console.log("New mealplan created",json);
        }
    };


    return (
      <>
        <form className={DietStyle.form}>
            <p className={DietStyle["form-title"]}>Create mealplan</p>

            <label htmlFor="title" className={DietStyle["form-label"]}>
                Title
            </label>
            <br />
            <input
            type = "text"
            className={DietStyle["form-input"]}
            placeholder="Enter Meal title"
            onChange={(e) => setTitle(e.target.value)}
            value = {title}
            />
            <br />
            <label htmlFor="breakfast" className={DietStyle["form-label"]}>
                Breakfast
            </label>
            <br />
            <input 
            type="text"
            className={DietStyle["form-input"]}
            placeholder="Enter Breakfast"
            onChange={(e) => setBreakfast(e.target.value)}
            value = {breakfast}
            />
            <br />
            <label htmlFor="lunch" className={DietStyle["form-label"]}>
                Lunch
            </label>
            <br />
            <input 
            type ="text"
            className={DietStyle["form-input"]}
            placeholder= "Enter Lunch"
            onChange={(e) => setLunch(e.target.value)}
            value={lunch}
            />
            <br />
            <label htmlFor="dinner" className={DietStyle["form-label"]}>
                Dinner
            </label>
            <br />
            <input
            type="text"
            className={DietStyle["form-input"]}
            placeholder="Enter Dinner"
            onChange={(e) => setDinner(e.target.value)}
            value={dinner}
            />
            <br />
            <button className={DietStyle["submit-btn"]} onClick={handleForm}>
                Set Mealplan
            </button>

        </form>
      </>
    );
  };
  
  export default Mealplan;