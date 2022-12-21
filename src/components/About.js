import React from 'react';
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container mb3 about_container" style={{minHeight:"100%"}} >
      <div className="container main_container d-flex justify-content-around flex-wrap">
      <div className="left_container mt-5" style={{width:500}}>
        <h2> Meet Sahil Gupta</h2>
        <p style={{color:"#666",letterSpacing:".5px",marginTop:2,lineHeight:2}}>
        Sahil is a Computer geek credited with strong ability to solve complex problems with optimal solutions. He believes in making this world better place to live not only by extensive use of technology but also through act of kindness. He has around 3+ Years of Industrial experience and consider himself as a working and proactive person for providing solution and is very passionate about coding and problem solving.
        </p>
      </div>
      <div className="right_container mt-3">
        <img src='Sahil_Gupta.jpg' alt='' />
      </div>
      </div>
       </div>
    </>
  )
}

export default About