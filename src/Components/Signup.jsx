import { useState } from "react";
import SignupStyle from "../Styles/signup.module.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(12);
  const [gender, setGender] = useState("Select");

  return (
    <>
      <form className={SignupStyle.form}>
        <p className={SignupStyle["form-title"]}>Create Account</p>
        <label htmlFor="username" className={SignupStyle["form-label"]}>
          Username
        </label>
        <br />
        <input type="text" className={SignupStyle["form-input"]} />
        <br />
        <label htmlFor="password" className={SignupStyle["form-label"]}>
          Password
        </label>
        <br />
        <input type="password" className={SignupStyle["form-input"]} />
        <br />
        <label htmlFor="age" className={SignupStyle["form-label"]}>
          Age
        </label>
        <br />
        <input type="number" className={SignupStyle["form-input"]} />
        <br />
        <label htmlFor="gender" className={SignupStyle["form-label"]}>
          Gender
        </label>
        <br />
        <select className={SignupStyle["form-input"]}>
          <option>Select</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <br />
        <button className={SignupStyle["submit-btn"]} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
