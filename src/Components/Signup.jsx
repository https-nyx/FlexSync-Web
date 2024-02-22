import { useState } from "react";
import "../Styles/Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = { username, password, age, gender };

    const response = await fetch(
      "https://flexsync.onrender.com/api/account/signup",
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
      setAge(0);
      setGender(0);
      console.log("New account created", json);
    }
  };

  return (
    <>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Create New Account</h3>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <label>Age</label>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <br />
        <label>Gender</label>
        <select onChange={(e) => setGender(e.target.value)} value={gender}>
          <option value={0}>Select...</option>
          <option value={1}>Male</option>
          <option value={2}>Female</option>
        </select>
        <br />
        <button>Sign Up</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default Signup;
