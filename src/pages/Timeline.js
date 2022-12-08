import React from 'react'
import user1 from "../Images/timeline.svg";
import user2 from "../Images/timeline-ver.svg";
import user3 from "../Images/ufo.svg"

import './Timeline.css';
import Navbar from './Navbar';
import Footer from './Footer';
function Timeline() {
  return (
    <>
    <Navbar></Navbar>
    <div className='timeline-body'>
      <h1 id="title">Timeline of the event</h1>
      <Img />
    </div>
    <Footer></Footer>
    </>
  )
}

const Img = () => {

  return (
    <section className="timeline">
      <img src={user1} className="time-img-hor" alt="timeline-hor"></img>
      <img src={user2} className="time-img-ver" alt="timeline-ver"></img>
      <img src={user3} className="ufo" alt="ufo"></img>
    </section>
  );
}


export default Timeline