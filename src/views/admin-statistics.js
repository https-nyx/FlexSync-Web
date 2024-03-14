import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { Helmet } from "react-helmet";

import "./admin-statistics.css";

const AdminStatistics = (props) => {
  const history = useHistory();
  const [menCount, setMenCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [age13to19, setAge13to19] = useState(0);
  const [age20to29, setAge20to29] = useState(0);
  const [age30to64, setAge30to64] = useState(0);
  const [age65above, setAge65above] = useState(0);
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  const [totalMealPlans, setTotalMealPlans] = useState(0);

  const menCountURL = "https://flexsync-api.onrender.com/api/account/men";
  const womenCountURL = "https://flexsync-api.onrender.com/api/account/women";
  const totalCountURL = "https://flexsync-api.onrender.com/api/account/total";
  const age13to19URL =
    "https://flexsync-api.onrender.com/api/account/age13to19";
  const age20to29URL =
    "https://flexsync-api.onrender.com/api/account/age20to29";
  const age30to64URL =
    "https://flexsync-api.onrender.com/api/account/age30to64";
  const age65aboveURL =
    "https://flexsync-api.onrender.com/api/account/age65above";
  const totalWorkoutsURL =
    "https://flexsync-api.onrender.com/api/userWorkout/total";
  const totalMealPlansURL =
    "https://flexsync-api.onrender.com/api/userMeal/total";
  const logoutURL = "https://flexsync-api.onrender.com/api/auth/logout";

  const fetchGenderCounts = async () => {
    try {
      const menCountResponse = await fetch(menCountURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const womenCountResponse = await fetch(womenCountURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const menCountData = await menCountResponse.json();
      const womenCountData = await womenCountResponse.json();

      setMenCount(menCountData.count);
      setWomenCount(womenCountData.count);
    } catch (error) {
      console.error("Error fetching");
    }
  };

  const fetchTotalCount = async () => {
    try {
      const totalCountResponse = await fetch(totalCountURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const totalCountData = await totalCountResponse.json();

      setTotalCount(totalCountData.count);
    } catch (error) {
      console.error("Error fetching");
    }
  };

  const fetchAgeGroupCounts = async () => {
    try {
      const age13to19Response = await fetch(age13to19URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const age20to29Response = await fetch(age20to29URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const age30to64Response = await fetch(age30to64URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const age65aboveResponse = await fetch(age65aboveURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const age13to19Data = await age13to19Response.json();
      const age20to29Data = await age20to29Response.json();
      const age30to64Data = await age30to64Response.json();
      const age65aboveData = await age65aboveResponse.json();

      setAge13to19(age13to19Data.count);
      setAge20to29(age20to29Data.count);
      setAge30to64(age30to64Data.count);
      setAge65above(age65aboveData.count);
    } catch (error) {
      console.error("Error fetching");
    }
  };

  const fetchUserCreationCounts = async () => {
    try {
      const totalWorkoutsResponse = await fetch(totalWorkoutsURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const totalMealPlansResponse = await fetch(totalMealPlansURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const totalWorkoutsData = await totalWorkoutsResponse.json();
      const totalMealPlansData = await totalMealPlansResponse.json();

      setTotalWorkouts(totalWorkoutsData.count);
      setTotalMealPlans(totalMealPlansData.count);
    } catch (error) {
      console.error("Error fetching");
    }
  };
  const handleLogout = async () => {
    try {
      const response = await fetch(logoutURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      history.replace("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGenderCounts();
    fetchTotalCount();
    fetchAgeGroupCounts();
    fetchUserCreationCounts();
  }, []);
  return (
    <div className="admin-statistics-container">
      <Helmet>
        <title>Dashboard</title>
        <meta property="og:title" content="Admin-Statistics - FlexSync" />
      </Helmet>
      <div className="admin-statistics-container1">
        <ul className="list admin-statistics-ul">
          <li className="list-item admin-statistics-logo">
            <Link to="/">
              <h1 className="admin-statistics-logo1">
                <span>FLEX</span>
                <span className="admin-statistics-text01">SYNC</span>
              </h1>
            </Link>
          </li>
          <li className="list-item admin-statistics-accounts">
            <Link to="/admin-home" className="admin-statistics-navlink1">
              Accounts
            </Link>
          </li>
          <li className="list-item admin-statistics-workouts">
            <Link to="/admin-workouts" className="admin-statistics-navlink2">
              <span>Workouts</span>
              <br></br>
            </Link>
          </li>
          <li className="list-item admin-statistics-meal-plans">
            <Link to="/admin-meal-plans" className="admin-statistics-navlink3">
              Meal Plans
            </Link>
          </li>
          <li className="list-item admin-statistics-statistics">
            <Link to="/admin-statistics" className="admin-statistics-navlink4">
              <span className="admin-statistics-text04">Statistics</span>
              <br></br>
            </Link>
          </li>
          <li className="list-item admin-statistics-log-out">
            <span className="admin-statistics-text06" onClick={handleLogout}>
              Log Out
            </span>
          </li>
        </ul>
        <div className="admin-statistics-admin-content">
          <div className="admin-statistics-hero">
            <div className="admin-statistics-admin-data">
              <div className="admin-statistics-account-stats">
                <div className="admin-statistics-feature-card">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="admin-statistics-icon"
                  >
                    <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                  </svg>
                  <h2 className="admin-statistics-text07">Accounts</h2>
                </div>
                <div className="admin-statistics-stats">
                  <div className="admin-statistics-stat">
                    <svg
                      viewBox="0 0 585.1428571428571 1024"
                      className="admin-statistics-icon02"
                    >
                      <path d="M585.143 402.286v237.714c0 30.286-24.571 54.857-54.857 54.857s-54.857-24.571-54.857-54.857v-201.143h-36.571v521.143c0 35.429-28.571 64-64 64s-64-28.571-64-64v-265.143h-36.571v265.143c0 35.429-28.571 64-64 64s-64-28.571-64-64v-521.143h-36.571v201.143c0 30.286-24.571 54.857-54.857 54.857s-54.857-24.571-54.857-54.857v-237.714c0-60.571 49.143-109.714 109.714-109.714h365.714c60.571 0 109.714 49.143 109.714 109.714zM420.571 146.286c0 70.857-57.143 128-128 128s-128-57.143-128-128 57.143-128 128-128 128 57.143 128 128z"></path>
                    </svg>
                    <span className="admin-statistics-text08">Male </span>
                    <h1 className="admin-statistics-text09">{menCount}</h1>
                  </div>
                  <div className="admin-statistics-stat1">
                    <svg
                      viewBox="0 0 731.4285714285713 1024"
                      className="admin-statistics-icon04"
                    >
                      <path d="M731.429 603.429c0 30.286-24.571 54.857-54.857 54.857-18.286 0-35.429-9.143-45.714-24.571l-129.714-194.857h-25.714v75.429l141.143 234.857c3.429 5.714 5.143 12 5.143 18.857 0 20-16.571 36.571-36.571 36.571h-109.714v155.429c0 35.429-28.571 64-64 64h-91.429c-34.857 0-64-28.571-64-64v-155.429h-109.714c-20 0-36.571-16.571-36.571-36.571 0-6.857 1.714-13.143 5.143-18.857l141.143-234.857v-75.429h-25.714l-129.714 194.857c-10.286 15.429-27.429 24.571-45.714 24.571-30.286 0-54.857-24.571-54.857-54.857 0-10.857 3.429-21.714 9.143-30.286l146.286-219.429c22.857-33.714 58.286-61.143 100.571-61.143h219.429c42.286 0 77.714 27.429 100.571 61.143l146.286 219.429c5.714 8.571 9.143 19.429 9.143 30.286zM493.714 146.286c0 70.857-57.143 128-128 128s-128-57.143-128-128 57.143-128 128-128 128 57.143 128 128z"></path>
                    </svg>
                    <span className="admin-statistics-text10">Female</span>
                    <h1 className="admin-statistics-text11">{womenCount}</h1>
                  </div>
                  <div className="admin-statistics-stat2">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="admin-statistics-icon06"
                    >
                      <path d="M256 726v42h512v-42q0-58-88-95t-168-37-168 37-88 95zM640 384q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM128 214q0-36 25-61t61-25h596q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596z"></path>
                    </svg>
                    <span className="admin-statistics-text12">Total</span>
                    <h1 className="admin-statistics-text13">{totalCount}</h1>
                  </div>
                </div>
              </div>
              <div className="admin-statistics-account-stats1">
                <div className="admin-statistics-feature-card1">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="admin-statistics-icon08"
                  >
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="admin-statistics-text14">Age Group</h2>
                </div>
                <div className="admin-statistics-stats1">
                  <div className="admin-statistics-stat3">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="admin-statistics-icon10"
                    >
                      <path d="M384 554q44 0 102 12-102 56-102 148v96h-298v-106q0-46 55-82t121-52 122-16zM704 598q74 0 154 32t80 84v96h-468v-96q0-52 80-84t154-32zM384 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38zM704 512q-44 0-75-31t-31-75 31-76 75-32 75 32 31 76-31 75-75 31z"></path>
                    </svg>
                    <span className="admin-statistics-text15">
                      <span>Age Group: </span>
                      <br></br>
                      <span>13-19</span>
                    </span>
                    <h1 className="admin-statistics-text19">{age13to19}</h1>
                  </div>
                  <div className="admin-statistics-stat4">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="admin-statistics-icon12"
                    >
                      <path d="M384 554q44 0 102 12-102 56-102 148v96h-298v-106q0-46 55-82t121-52 122-16zM704 598q74 0 154 32t80 84v96h-468v-96q0-52 80-84t154-32zM384 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38zM704 512q-44 0-75-31t-31-75 31-76 75-32 75 32 31 76-31 75-75 31z"></path>
                    </svg>
                    <span className="admin-statistics-text20">
                      <span>
                        Age Group:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>20-29</span>
                    </span>
                    <h1 className="admin-statistics-text24">{age20to29}</h1>
                  </div>
                  <div className="admin-statistics-stat5">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="admin-statistics-icon14"
                    >
                      <path d="M384 554q44 0 102 12-102 56-102 148v96h-298v-106q0-46 55-82t121-52 122-16zM704 598q74 0 154 32t80 84v96h-468v-96q0-52 80-84t154-32zM384 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38zM704 512q-44 0-75-31t-31-75 31-76 75-32 75 32 31 76-31 75-75 31z"></path>
                    </svg>
                    <span className="admin-statistics-text25">
                      <span>
                        Age Group:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>30-64</span>
                    </span>
                    <h1 className="admin-statistics-text29">{age30to64}</h1>
                  </div>
                  <div className="admin-statistics-stat6">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="admin-statistics-icon16"
                    >
                      <path d="M384 554q44 0 102 12-102 56-102 148v96h-298v-106q0-46 55-82t121-52 122-16zM704 598q74 0 154 32t80 84v96h-468v-96q0-52 80-84t154-32zM384 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38zM704 512q-44 0-75-31t-31-75 31-76 75-32 75 32 31 76-31 75-75 31z"></path>
                    </svg>
                    <span className="admin-statistics-text30">
                      <span>
                        Age Group:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>65+</span>
                    </span>
                    <h1 className="admin-statistics-text34">{age65above}</h1>
                  </div>
                </div>
              </div>
              <div className="admin-statistics-account-stats2">
                <div className="admin-statistics-feature-card2">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="admin-statistics-icon18"
                  >
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="admin-statistics-text35">User Creation</h2>
                </div>
                <div className="admin-statistics-stats2">
                  <div className="admin-statistics-stat7">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="admin-statistics-icon20"
                    >
                      <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                    </svg>
                    <span className="admin-statistics-text36">
                      User Workouts
                    </span>
                    <h1 className="admin-statistics-text37">{totalWorkouts}</h1>
                  </div>
                  <div className="admin-statistics-stat8">
                    <svg
                      viewBox="0 0 585.1428571428571 1024"
                      className="admin-statistics-icon22"
                    >
                      <path d="M585.143 402.286v237.714c0 30.286-24.571 54.857-54.857 54.857s-54.857-24.571-54.857-54.857v-201.143h-36.571v521.143c0 35.429-28.571 64-64 64s-64-28.571-64-64v-265.143h-36.571v265.143c0 35.429-28.571 64-64 64s-64-28.571-64-64v-521.143h-36.571v201.143c0 30.286-24.571 54.857-54.857 54.857s-54.857-24.571-54.857-54.857v-237.714c0-60.571 49.143-109.714 109.714-109.714h365.714c60.571 0 109.714 49.143 109.714 109.714zM420.571 146.286c0 70.857-57.143 128-128 128s-128-57.143-128-128 57.143-128 128-128 128 57.143 128 128z"></path>
                    </svg>
                    <span className="admin-statistics-text38">Meal Plans</span>
                    <h1 className="admin-statistics-text39">
                      {totalMealPlans}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="admin-statistics-footer">
        <div className="admin-statistics-mobile-footer">
          <div className="admin-statistics-icons-container">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="admin-statistics-link"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="admin-statistics-icon24"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="admin-statistics-link1"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="admin-statistics-icon26"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="admin-statistics-link2"
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="admin-statistics-icon28"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
          </div>
          <div className="admin-statistics-links-container">
            <span className="admin-statistics-text40">
              <span className="admin-statistics-text41">
                © 2024 Early Access, All Rights Reserved 
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="admin-statistics-desktop-footer">
          <div className="admin-statistics-menu">
            <div className="admin-statistics-links-container1">
              <span>© 2024 Early Access, All Rights Reserved </span>
            </div>
            <div className="admin-statistics-follow-container">
              <span className="admin-statistics-text44">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <div className="admin-statistics-icons-container1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="admin-statistics-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="admin-statistics-icon30"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="admin-statistics-link4"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="admin-statistics-icon32"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="admin-statistics-link5"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="admin-statistics-icon34"
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

export default AdminStatistics;
