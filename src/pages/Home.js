import React from 'react';
import user2 from "../Images/logo-final.svg";
import CountdownTimer from './CountdownTimer';
import { Link } from "react-router-dom";

import './Home.css';
function Home() {
  return (
    <div className="home-page">
      <div className="logo">
        <img className="logo-pic" src={user2} alt="logo"></img>
      </div>

      <div className="cont-1">
        We are almost there
      </div>
      <CountdownTimer
        countdownTimestampMs={1670091600000} />
      <Buttons />
    </div >
  )
}
function Buttons() {
  return (
    <div className="button-comp">
      <Link to="/timeline" className="button-home">
        TIMELINE
      </Link>
      <Link to="/rules" className="button-home">
        RULES
      </Link>
    </div>
  )
}


export default Home