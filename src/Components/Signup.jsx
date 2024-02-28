import { useState } from "react";
import SignupStyle from "../Styles/signup.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
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
        <br />
        <input
          type="text"
          className={SignupStyle["form-input"]}
          placeholder="&nbsp;&nbsp;Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />
        <input
          type="password"
          className={SignupStyle["form-input"]}
          placeholder="&nbsp;&nbsp;Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <select
          className={SignupStyle["form-dropdown"]}
          onChange={(e) => setAge(e.target.value)}
          value={age}
        >
          <option value="">&nbsp;&nbsp;Select</option>
          <option value="13-19">&nbsp;&nbsp;13-19</option>
          <option value="20-29">&nbsp;&nbsp;20-29</option>
          <option value="30-64">&nbsp;&nbsp;30-64</option>
          <option value="65+">&nbsp;&nbsp;65+</option>
        </select>
        <br />
        <select
          className={SignupStyle["form-dropdown"]}
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <option value={0}>&nbsp;&nbsp;Select</option>
          <option value={1}>&nbsp;&nbsp;Male</option>
          <option value={2}>&nbsp;&nbsp;Female</option>
        </select>
        <br />
        <button className={SignupStyle["submit-btn"]} onClick={handleSubmit}>
          Sign Up
        </button>
        <p className={SignupStyle["has-account"]}>
          Already have an account?{" "}
          <Link to="/login" className={SignupStyle["login-link"]}>
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
