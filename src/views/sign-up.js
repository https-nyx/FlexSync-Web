import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

import SolidButton from "../components/solid-button";
import "./sign-up.css";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(0);
  const [error, setError] = useState(null);

  const history = useHistory();

  const url = "https://flexsync-api.onrender.com/api/auth/signup";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const account = {
      username,
      password,
      age,
      gender,
    };

    try {
      const response = await axios.post(url, account);

      setUsername("");
      setPassword("");
      setAge("");
      setGender(0);
      console.log("New account created");
      history.replace("/success");
    } catch (error) {
      setError(error.response.data.error);
      console.error(
        "Error occurred during form submission:",
        error.response.data.error
      );
    }
  };

  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-Up - FlexSync</title>
        <meta property="og:title" content="Sign-Up - FlexSync" />
      </Helmet>
      <div className="sign-up-top-container">
        <nav data-role="Header" className="sign-up-navbar">
          <Link to="/" className="sign-up-navlink">
            <h1 className="sign-up-logo">
              <span>FLEX</span>
              <span className="sign-up-text01">SYNC</span>
            </h1>
          </Link>
          <div className="sign-up-right-side">
            <div className="sign-up-links-container">
              <Link to="/" className="sign-up-home">
                Home
              </Link>
              <Link to="/features" className="sign-up-features">
                Features
              </Link>
              <Link to="/preview" className="sign-up-preview">
                Preview
              </Link>
              <Link to="/sign-up" className="sign-up-get-started button">
                <span>
                  <span>Get Started</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div data-role="BurgerMenu" className="sign-up-burger-menu">
            <svg viewBox="0 0 1024 1024" className="sign-up-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="sign-up-mobile-menu">
            <div className="sign-up-nav">
              <div className="sign-up-top">
                <h1>Travel</h1>
                <div data-role="CloseMobileMenu" className="sign-up-close-menu">
                  <svg viewBox="0 0 1024 1024" className="sign-up-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="sign-up-right-side1">
                <div className="sign-up-links-container1">
                  <span className="sign-up-text05">Home</span>
                  <span className="sign-up-text06">About</span>
                  <span className="sign-up-text07">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="sign-up-follow-container">
              <span className="sign-up-text09">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <div className="sign-up-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-up-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="sign-up-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-up-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="sign-up-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-up-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="sign-up-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="sign-up-container1">
          <div className="sign-up-component-spacer">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxneW0lMjBicm98ZW58MHx8fHwxNzA5MjcwNTEyfDA&amp;ixlib=rb-4.0.3&amp;w=800"
              className="sign-up-image"
            />
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <div className="sign-up-form1">
                <h1 className="sign-up-heading">
                  <span>Create an Account</span>
                  <br></br>
                </h1>
                <input
                  type="text"
                  placeholder="Username"
                  className="sign-up-username input"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required={true}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="sign-up-password input"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required={true}
                />
                <div className="sign-up-dropdowns">
                  <select
                    required={true}
                    className="sign-up-age"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                  >
                    <option value="">Age</option>
                    <option value="13-19">13-19</option>
                    <option value="20-29">20-29</option>
                    <option value="30-64">30-64</option>
                    <option value="65+">65+</option>
                  </select>
                  <select
                    required={true}
                    className="sign-up-gender"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                  >
                    <option value="">Gender</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                  </select>
                </div>
                <button type="submit" className="sign-up-get-started1 button">
                  <span className="sign-up-text12">
                    <span>Sign Up</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="contact" className="sign-up-footer">
        <div className="sign-up-mobile-footer">
          <div className="sign-up-icons-container1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="sign-up-link3"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="sign-up-icon11"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="sign-up-link4"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="sign-up-icon13"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="sign-up-link5"
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="sign-up-icon15"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
          </div>
          <div className="sign-up-links-container2">
            <span className="sign-up-text15">
              <span className="sign-up-text16">
                © 2024 Early Access, All Rights Reserved 
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="sign-up-desktop-footer">
          <div className="sign-up-menu">
            <div className="sign-up-links-container3">
              <span className="sign-up-text18">
                © 2024 Early Access, All Rights Reserved 
              </span>
            </div>
            <div className="sign-up-follow-container1">
              <span className="sign-up-text19">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <div className="sign-up-icons-container2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-up-link6"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="sign-up-icon17"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-up-link7"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="sign-up-icon19"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-up-link8"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="sign-up-icon21"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
