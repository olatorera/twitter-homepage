import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Viewpage from "./Viewpage";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [inputErr, setInputErr] = useState("");

  const handleClick = () => {
    return Viewpage;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName) {
      return setInputErr("input must be filled");
    }
    navigate("/Viewpage", { replace: true });
  };

  return (
    <div className="modal">
      <div className="frame">
        <div className="top-icon">
          <div className="btn">
            <FaTimes className="delete" />
          </div>
          <FaTwitter className="twitter" />
        </div>
        <h2>Sign in to Twitter</h2>
        <div className="inputs ">
          <div className="input-content">
            <FcGoogle />
            <input
              className="input"
              value="Sign in with Google"
              type="button"
            />
          </div>
          <div className="input-content details">
            <FaApple />
            <input className="input" value="Sign in with Apple" type="button" />
          </div>
        </div>
        <p>or</p>
        <div className="inputs">
          <input
            className="input input-contents inputs"
            placeholder="phone, email, or username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <div>
            <div
              // to="/Viewpage"
              onClick={handleSubmit}
              className="input-next inputs"
              type="button"
            >
              <h4 className="text-next">Next</h4>
            </div>
            {inputErr ? <p className="input-err">{inputErr}</p> : null}
          </div>
          <input
            className="input input-content inputs"
            value="Forgot password?"
            type="button"
          />
        </div>
        <div className="account">
          <h4>
            Don't have an account?
            <a className="sign input-content">Sign up</a>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Modal;
