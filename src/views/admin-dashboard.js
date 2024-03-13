import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './admin-dashboard.css'

const AdminDashboard = (props) => {
  return (
    <div className="admin-dashboard-container">
      <Helmet>
        <title>Admin-Dashboard - FlexSync</title>
        <meta property="og:title" content="Admin-Dashboard - FlexSync" />
      </Helmet>
      <div className="admin-dashboard-container1">
        <ul className="list admin-dashboard-ul">
          <li className="list-item admin-dashboard-li">
            <Link to="/">
              <h1 className="admin-dashboard-logo">
                <span>FLEX</span>
                <span className="admin-dashboard-text01">SYNC</span>
              </h1>
            </Link>
          </li>
          <li className="list-item admin-dashboard-li1">
            <span className="admin-dashboard-text02">Accounts</span>
          </li>
          <li className="list-item admin-dashboard-li2">
            <span className="admin-dashboard-text03">
              <span>Workouts</span>
              <br></br>
            </span>
          </li>
          <li className="list-item admin-dashboard-li3">
            <span className="admin-dashboard-text06">Meal Plans</span>
          </li>
          <li className="list-item admin-dashboard-li4">
            <span className="admin-dashboard-text07">Log Out</span>
          </li>
        </ul>
        <div className="admin-dashboard-admin-content">
          <div className="admin-dashboard-hero">
            <nav data-role="Header" className="admin-dashboard-navbar">
              <div className="admin-dashboard-right-side">
                <div className="admin-dashboard-table-heading">
                  <span className="admin-dashboard-username">Username</span>
                  <span className="admin-dashboard-age">Age</span>
                  <span className="admin-dashboard-gender">Gender</span>
                  <span className="admin-dashboard-user-level">User Role</span>
                  <div className="admin-dashboard-container2">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="admin-dashboard-icon"
                    >
                      <path d="M864 0c88.364 0 160 71.634 160 160 0 36.020-11.91 69.258-32 96l-64 64-224-224 64-64c26.742-20.090 59.978-32 96-32zM64 736l-64 288 288-64 592-592-224-224-592 592zM715.578 363.578l-448 448-55.156-55.156 448-448 55.156 55.156z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="admin-dashboard-icon02"
                    >
                      <path d="M292.571 786.286v-402.286c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v402.286c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM438.857 786.286v-402.286c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v402.286c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM585.143 786.286v-402.286c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v402.286c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </nav>
            <div className="admin-dashboard-admin-data">
              <nav data-role="Header" className="admin-dashboard-navbar1">
                <div className="admin-dashboard-right-side1">
                  <div className="admin-dashboard-table-heading1">
                    <span className="admin-dashboard-username1">Username</span>
                    <span className="admin-dashboard-age1">Age</span>
                    <span className="admin-dashboard-gender1">Gender</span>
                    <span className="admin-dashboard-user-level1">
                      User Role
                    </span>
                    <input
                      type="checkbox"
                      className="admin-dashboard-checkbox"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="admin-dashboard-footer">
        <div className="admin-dashboard-mobile-footer">
          <div className="admin-dashboard-icons-container">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="admin-dashboard-link"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="admin-dashboard-icon04"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="admin-dashboard-link1"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="admin-dashboard-icon06"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="admin-dashboard-link2"
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="admin-dashboard-icon08"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
          </div>
          <div className="admin-dashboard-links-container">
            <span className="admin-dashboard-text08">
              <span className="admin-dashboard-text09">
                © 2024 Early Access, All Rights Reserved 
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="admin-dashboard-desktop-footer">
          <div className="admin-dashboard-menu">
            <div className="admin-dashboard-links-container1">
              <span>© 2024 Early Access, All Rights Reserved </span>
            </div>
            <div className="admin-dashboard-follow-container">
              <span className="admin-dashboard-text12">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="admin-dashboard-icons-container1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="admin-dashboard-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="admin-dashboard-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="admin-dashboard-link4"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="admin-dashboard-icon12"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="admin-dashboard-link5"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="admin-dashboard-icon14"
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
  )
}

export default AdminDashboard
