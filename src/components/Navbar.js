import React from "react";
import Icon from "../images/tweeter-icon.png";
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-tweeter nav-icon">
        <img src={Icon} className="tweeter tweeter-nav " alt="icon" />
      </div>
      <div className="list">
        <ul>
          <div className="nav-icon">
            <FaHome />
            <li className="nav-text">Home</li>
          </div>
          <div className="nav-icon">
            <FaHashtag />
            <li className="nav-text">Explore</li>
          </div>
          <div className="nav-icon">
            <BsPeopleFill />
            <li className="nav-text">Communities</li>
          </div>
          <div className="nav-icon">
            <BsBell />
            <li className="nav-text">Notifications</li>
          </div>
          <div className="nav-icon">
            <FiMail />
            <li className="nav-text">Messages</li>
          </div>
          <div className="nav-icon">
            <BsBookmark />
            <li className="nav-text">Bookmarks</li>
          </div>
          <div className="nav-icon">
            <BsPerson />
            <li className="nav-text">Profile</li>
          </div>
          <div className="nav-icon">
            <CgMoreO />
            <li className="nav-text">More</li>
          </div>
        </ul>
        <div className="tweet-tweet">
          <h2 className="nav-tweet">Tweet</h2>
        </div>
        <div className="tweet-tweet profile">
          <h2 className="nav-tweet ">Profile</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
