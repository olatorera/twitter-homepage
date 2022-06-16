import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Background from "../images/background.png";
import Icon from "../images/tweeter-icon.png";

const Homepage = () => {
  return (
    <div className="Home-page">
      <div className="images">
        <img src={Background} className="back-ground" alt="bck" />
        <div className="homepagetwit">
          <div className="tweet">
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="sect2">
        <img src={Icon} className="tweeter" alt="icon" />
        <h1 className="font-text">Happening now</h1>
        <h1>Join Twitter today</h1>
        <div className="page-btn">
          <button className="btn-apple">
            <FcGoogle className="btnn" />
            Sign up Gmail
          </button>
          <button className="btn-apple">
            <FaApple className="btnn btnn-1" />
            Sign up Apple
          </button>
          <div className="parag">
            <p>or</p>
          </div>
          <button className="input-btn inputs">
            Sign up with phone or email
          </button>
          <div className="term-text">
            <p className="terms">
              By signing up, you agree to the{" "}
              <em className="em">Terms of Service</em> and{" "}
              <em className="em">Privacy Policy, </em> including{" "}
              <em className="em">Cookies Use.</em>
            </p>
          </div>
        </div>
        <h3 className="text-h3">Already have an account?</h3>
        <div className="sign input-content">
          <Link to="/modal" className="sign input-content">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
