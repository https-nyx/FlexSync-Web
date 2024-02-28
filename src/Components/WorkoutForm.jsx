import WorkoutStyle from "../Styles/workoutform.module.css";
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
        <form className={WorkoutStyle.form}>
            <p className={WorkoutStyle["form-title"]}>Create workout</p>
            <label htmlFor="title" className={WorkoutStyle["form-label"]}>
                Title
            </label>
            <br />
            <input
            type="text"
            className={WorkoutStyle["form-input"]}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            <br />
            <label htmlFor="time" className={WorkoutStyle["form-label"]}>
                Time
            </label>
            <br />
            <input 
            type="text"
            className={WorkoutStyle["form-input"]}
            placeholder="Enter time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            />
            <label htmlFor="reps" className={WorkoutStyle["form-label"]}>
                Reps
            </label>
            <br />
            <input 
            type="text"
            className={WorkoutStyle["form-input"]}
            placeholder="Enter reps"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            />
            <br />
            <button className={WorkoutStyle["submit-btn"]} onClick={handleForm}>
                Send Workout
            </button>
        </form>
      </>
    );
  };
  
  export default WorkoutForm;
  