import React from "react";
import "./main.css";
import arrow from "../../images/arrow.png";
import controller from "../../images/controller.png";
import add from "../../images/add.png";

//i know that import is bad :DD

const Main = () => {
  return (
    <div className="row">
      <div className="col-1">
        <h2>
          PS5 V2 <br /> Dualshok
        </h2>
        <h3>Wireless Controller for PlayStation 4</h3>
        <p>(Compatible/Generic)</p>
        <h4>$32.50</h4>
        <button type="button">
          Buy Now <img src={arrow} />
        </button>
      </div>
      <div className="col-2">
        <img src={controller} className="controller" />
        <div className="color-box"></div>
        <div className="add-btn">
          <img src={add} alt="add" />
          <p>
            <small>Add to cart</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
