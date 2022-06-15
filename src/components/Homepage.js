import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import Logo from "../images/twitter.png";
import Background from "../images/background.png";
import Icon from "../images/tweeter-icon.png";
import Modal from "./Modal";

const Homepage = () => {
  const handleClick = () => {
    return Modal;
  };

  return (
    <div className="Home-page">
      <div className="images">
        <img src={Background} className="back-ground" />
        <img src={Logo} className="tweet" />
      </div>
      <div className="sect2">
        <img src={Icon} className="tweeter" />
        <h1 className="font-text">Happening now</h1>
        <h1>Join Twitter today</h1>
        <button className="btn-apple">
          <FaApple />
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