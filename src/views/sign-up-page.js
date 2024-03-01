import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import SolidButton from "../components/solid-button";
import "./sign-up-page.css";

const SignUpPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(0);
  const [error, setError] = useState(null);

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
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(account),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const requestData = await response.json();
        setError(requestData.error);
        console.error(
          "Error occurred during form submission:",
          requestData.error
        );
      } else {
        setUsername("");
        setPassword("");
        setAge("");
        setGender(0);
        console.log("New account created");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error occurred during form submission:", error.message);
    }
  };

  return (
    <div className="sign-up-page-container">
      <Helmet>
        <title>Sign-Up-Page - FlexSync</title>
        <meta property="og:title" content="Sign-Up-Page - FlexSync" />
      </Helmet>
      <div className="sign-up-page-top-container">
        <nav data-role="Header" className="sign-up-page-navbar">
          <h1 className="sign-up-page-logo">
            <span>FLEX</span>
            <span className="sign-up-page-text01">SYNC</span>
          </h1>
          <div className="sign-up-page-right-side">
            <div className="sign-up-page-links-container">
              <Link to="/" className="sign-up-page-home">
                Home
              </Link>
              <Link to="/features-page" className="sign-up-page-features">
                Features
              </Link>
              <Link to="/preview-page" className="sign-up-page-preview">
                Preview
              </Link>
              <a href="#contact" className="sign-up-page-contact">
                Contact
              </a>
            </div>
            <SolidButton button="Get Started"></SolidButton>
          </div>
          <div data-role="BurgerMenu" className="sign-up-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="sign-up-page-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="sign-up-page-mobile-menu">
            <div className="sign-up-page-nav">
              <div className="sign-up-page-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="sign-up-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="sign-up-page-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="sign-up-page-right-side1">
                <div className="sign-up-page-links-container1">
                  <span className="sign-up-page-text02">Home</span>
                  <span className="sign-up-page-text03">About</span>
                  <span className="sign-up-page-text04">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="sign-up-page-follow-container">
              <span className="sign-up-page-text06">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <div className="sign-up-page-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-up-page-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="sign-up-page-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-up-page-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="sign-up-page-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-up-page-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="sign-up-page-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="sign-up-page-container1">
          <div className="sign-up-page-component-spacer">
            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxneW0lMjBicm98ZW58MHx8fHwxNzA5MjcwNTEyfDA&amp;ixlib=rb-4.0.3&amp;w=500"
              alt="image"
              className="sign-up-page-image"
            />
            <div className="sign-up-page-form">
              <h1 className="sign-up-page-text07">Create an Account</h1>
              <div>
                <form>
                  <input
                    type="text"
                    placeholder="Username"
                    className="sign-up-page-username input"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="sign-up-page-password input"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <select
                    className="sign-up-page-age"
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
                    className="sign-up-page-gender"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                  >
                    <option value={0}>Gender</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                  </select>
                  <SolidButton
                    button="Sign Up"
                    rootClassName="solid-button-root-class-name"
                    onClick={handleSubmit}
                  ></SolidButton>
                </form>
              </div>

              <div className="sign-up-page-login-reroute">
                <span className="sign-up-page-text08">
                  <span>Already have an account?</span>
                  <br></br>
                </span>
                <span className="sign-up-page-text11"> Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="sign-up-page-footer">
        <div className="sign-up-page-menu">
          <h1>FlexSync</h1>
          <div className="sign-up-page-links-container2">
            <span>© 2024 Early Access, All Rights Reserved </span>
          </div>
          <div className="sign-up-page-follow-container1">
            <span className="sign-up-page-text13">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <div className="sign-up-page-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="sign-up-page-link3"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="sign-up-page-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="sign-up-page-link4"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="sign-up-page-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="sign-up-page-link5"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="sign-up-page-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
