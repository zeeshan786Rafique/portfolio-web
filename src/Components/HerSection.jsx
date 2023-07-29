import React from 'react'
import "./HeroSection.css"
import bgpic from "../images/bgimg.jpg"
import { Link } from "react-router-dom";

const HerSection = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={bgpic} alt="BackgroundPic" className='into-img' />
      </div>
      <div className="content">
        <p>i'M Freelancer</p>
        <h1>Frontend Developer</h1>
        <div>
          <Link className="btn" to={"/project"}>Project</Link>
          <Link className="btn btn-light" to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HerSection