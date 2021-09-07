import React from "react";
import fb from "../../images/fb.png";
import tw from "../../images/tw.png";
import ig from "../../images/ig.png";
import "./botton.css";

const Bottom = () => {
  return (
    <div className="social-links">
      <img src={fb} />
      <img src={tw} />
      <img src={ig} />
    </div>
  );
};

export default Bottom;
