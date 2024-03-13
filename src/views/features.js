import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './features.css'

const Features = (props) => {
  return (
    <div className="features-container">
      <Helmet>
        <title>Features - FlexSync</title>
        <meta property="og:title" content="Features - FlexSync" />
      </Helmet>
      <div className="features-top-container">
        <nav data-role="Header" className="features-navbar">
          <Link to="/" className="features-navlink">
            <h1 className="features-logo">
              <span>FLEX</span>
              <span className="features-text01">SYNC</span>
            </h1>
          </Link>
          <div className="features-right-side">
            <div className="features-links-container">
              <Link to="/" className="features-home">
                Home
              </Link>
              <span className="features-features">Features</span>
              <Link to="/preview" className="features-preview">
                Preview
              </Link>
              <Link to="/sign-up" className="features-get-started button">
                <span>
                  <span>Get Started</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div data-role="BurgerMenu" className="features-burger-menu">
            <svg viewBox="0 0 1024 1024" className="features-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="features-mobile-menu">
            <div className="features-nav">
              <div className="features-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="features-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="features-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="features-right-side1">
                <div className="features-links-container1">
                  <span className="features-text05">Home</span>
                  <span className="features-text06">About</span>
                  <span className="features-text07">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="features-follow-container">
              <span className="features-text09">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="features-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="features-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="features-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="features-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="features-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="features-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="features-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="features-features1">
          <h1 className="features-text10">
            <span className="features-text11">
              All these
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="features-text12">impressive</span>
            <span className="features-text13">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="features-text14">features</span>
            <br className="features-text15"></br>
            <br className="features-text16"></br>
            <br className="features-text17"></br>
          </h1>
          <div className="features-feature-row-1">
            <div className="features-workout-guide">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3b3Jrb3V0fGVufDB8fHx8MTcxMDE1OTk4NHww&amp;ixlib=rb-4.0.3&amp;w=1300"
                className="features-image"
              />
              <div className="features-container1">
                <h1 className="features-text18">Workout Guide</h1>
                <span className="features-text19">
                  Discover our comprehensive Workout Guide, designed to help you
                  achieve your fitness goals
                </span>
              </div>
            </div>
            <div className="features-diet-guide">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGRpZXR8ZW58MHx8fHwxNzEwMTYxMzcxfDA&amp;ixlib=rb-4.0.3&amp;w=1300"
                className="features-image1"
              />
              <div className="features-container2">
                <h1 className="features-text20">
                  <span className="features-text21">Diet Guide</span>
                  <br></br>
                </h1>
                <span className="features-text23">
                  Our Diet Guide serves as your comprehensive resource for
                  delving into a vast array of diet types
                </span>
              </div>
            </div>
          </div>
          <div className="features-feature-row-2">
            <div className="features-custom-workout">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHdvcmtvdXR8ZW58MHx8fHwxNzEwMTU5OTg0fDA&amp;ixlib=rb-4.0.3&amp;w=1300"
                className="features-image2"
              />
              <div className="features-container3">
                <h1 className="features-text24">Custom Workout</h1>
                <span className="features-text25">
                  Our Custom Workout feature enables you to design a
                  personalized exercise routine to suit your lifestyle
                </span>
              </div>
            </div>
            <div className="features-custom-meal-plan">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1547496502-affa22d38842?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxkaWV0fGVufDB8fHx8MTcxMDE2MTM3MXww&amp;ixlib=rb-4.0.3&amp;w=1300"
                className="features-image3"
              />
              <div className="features-container4">
                <h1 className="features-text26">Custom Meal Plan</h1>
                <span className="features-text27">
                  Our Custom Meal Plan feature allows you to craft a
                  personalized meal plan that suits your current diet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="features-footer">
        <div className="features-mobile-footer">
          <div className="features-icons-container1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="features-link3"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="features-icon11"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="features-link4"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="features-icon13"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="features-link5"
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="features-icon15"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
          </div>
          <div className="features-links-container2">
            <span className="features-text28">
              <span className="features-text29">
                © 2024 Early Access, All Rights Reserved 
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="features-desktop-footer">
          <div className="features-menu">
            <div className="features-links-container3">
              <span className="features-text31">
                © 2024 Early Access, All Rights Reserved 
              </span>
            </div>
            <div className="features-follow-container1">
              <span className="features-text32">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="features-icons-container2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="features-link6"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="features-icon17"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="features-link7"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="features-icon19"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="features-link8"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="features-icon21"
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

export default Features
