import { useState } from "react";
import SignupStyle from "../Styles/signup.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(12);
  const [gender, setGender] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = { username, password, age, gender };

    const response = await fetch(
      "https://flexsync-api.onrender.com/api/account/signup",
      {
        method: "POST",
        body: JSON.stringify(account),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      setUsername("");
      setPassword("");
      setAge("");
      setGender(0);
      console.log("New account created", json);
    }
  };

  return (
    <>
      <form className={SignupStyle.form}>
        <p className={SignupStyle["form-title"]}>Create Account</p>
        <label htmlFor="username" className={SignupStyle["form-label"]}>
          Username
        </label>
        <br />
        <input
          type="text"
          className={SignupStyle["form-input"]}
          placeholder=" Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />
        <label htmlFor="password" className={SignupStyle["form-label"]}>
          Password
        </label>
        <br />
        <input
          type="password"
          className={SignupStyle["form-input"]}
          placeholder=" Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <label htmlFor="age" className={SignupStyle["form-label"]}>
          Age
        </label>
        <br />
        <select className={SignupStyle["form-dropdown"]}>
          <option value="">Select</option>
          <option value="13-19">13-19</option>
          <option value="20-29">20-29</option>
          <option value="30-64">30-64</option>
          <option value="65+">65+</option>
        </select>
        <br />
        <label htmlFor="gender" className={SignupStyle["form-label"]}>
          Gender
        </label>
        <br />
        <select
          className={SignupStyle["form-dropdown"]}
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <option value={0}>Select</option>
          <option value={1}>Male</option>
          <option value={2}>Female</option>
        </select>
        <br />
        <button className={SignupStyle["submit-btn"]} onClick={handleSubmit}>
          Sign Up
        </button>
        <p className={SignupStyle["has-account"]}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
