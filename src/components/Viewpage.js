import React from "react";
import Navbar from "./Navbar";

const Viewpage = () => {
  return (
    <div className="viewpage">
      <Navbar />
      <div className="home-dialog">
        <h3>Home</h3>
        <div>
          <input
            placeholder="What's happening?"
            className="home-input"
            // value={text}
            type="text"
            // onChange={inputTextHandler}
          />
          <button className="viewpage-btn">
            <p className="home-txt">Tweet</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Viewpage;
