import SignupStyle from "../Styles/signup.module.css";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";



const WorkoutForm = () => {
    const [title, setTitle] = useState("");
    const[time, setTime] = useState("");
    const[reps, setReps] = useState("");
    const [error, setError] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();
        const workout = {title,time,reps};

        const response = await fetch(
            "API LINK HERE",
            {
                method:"POST",
                body:JSON.stringify(workout),
                headers: {
                    "Content-type": "application/json",
                },
            }
        );

        const json = await response.json();

        if (!response.ok){
            setError(json.error);
        }else{
            setError(null);
            setTitle("");
            setTime("");
            setReps("");
            console.log("New workout created",json);
        }
    };

    return (
      <>
        <form className={SignupStyle.form}>
            <p className={SignupStyle["form-title"]}>Create workout</p>
            <br />
            <br />
            <input
            type="text"
            className={SignupStyle["form-input"]}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            <br />
            <br />
            <input 
            type="text"
            className={SignupStyle["form-input"]}
            placeholder="Enter time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            />
            <br />
            <br />
            <input 
            type="text"
            className={SignupStyle["form-input"]}
            placeholder="Enter reps"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            />
            <br />
            <br />
            <button className={SignupStyle["submit-btn"]} onClick={handleForm}>
                Send Workout
            </button>
        </form>
      </>
    );
  };
  
  export default WorkoutForm;
  