import "./ProjectHeroSec.css";

import React from 'react'

const ProjectHeroSec = (props) => {
  return (
    <>
    <div className="hero-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    </>
  )
}

export default ProjectHeroSec