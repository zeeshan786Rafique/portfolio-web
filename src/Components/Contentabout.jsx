import "./Contentabout.css"
import { Link } from "react-router-dom"
import Ppic1 from "../images/react1.jpg"
import Ppic2 from "../images/react2.jpg"


import React from 'react'

const Contentabout = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero odit itaque ea voluptatibus vo luptatibus.</p>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>
      {/* right */}
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Ppic1} alt="bgAbout" className="img"/>
          </div>
          <div className="img-stack bottom">
            <img src={Ppic2} alt="bgAbout" className="img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contentabout