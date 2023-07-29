import React from 'react'
import "./Work.css"
import { Link } from 'react-router-dom'

const WorkCard = (props) => {
    return (
            <div className="project-card">
                <img src={props.picture} alt="Pro1IMG" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-detail">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <Link className="btn" to={props.view}>View</Link>
                        <Link className="btn" to={props.source}>More</Link>
                    </div>
                </div>
            </div>  
    )
}

export default WorkCard