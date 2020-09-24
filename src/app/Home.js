import React from "react";
import "./home.less";
import backGroundURL from "../images/hero-image.png";
import calculatorURL from "../images/calculator.png";
import timerURL from "../images/timer.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="homeAbove">
        <h1>在线实用工具</h1>
        <img
          className="backGroundImg"
          src={backGroundURL}
          alt="backGroundURL"
        ></img>
      </div>

      <div className="homeBelow">
        <div className="homePageIcon">
          <img
            className="calculatorImg"
            src={calculatorURL}
            alt="calculatorURL"
          ></img>
          <img className="timerImg" src={timerURL} alt="timerURL"></img>
        </div>
        <div className="linkBelowIcon">
          <Link className="countDowntLinktimerIcon" to="/calculator">
            计算器
          </Link>
          <Link className="calculatorLinktimerIcon" to="/timer">
            倒计时器
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
