import React from 'react'
import "./Work.css"
import WorkCard from "./WorkCard";
import WorkCardData from "../WorkCardData"

const Work = () => {
    return (
        <>
            <div className="work-container">
                <h1 className="project-heading">Previous Project</h1>
                <div className="project-container">
                    {WorkCardData.map((value, ind) =>{
                        return(
                            <WorkCard 
                        key={ind}
                        picture={value.picture}
                        title={value.title}
                        text={value.text}
                        view={value.view}
                        source={value.source}
                        />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Work