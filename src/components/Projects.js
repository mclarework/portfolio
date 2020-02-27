import React from "react"
import Example from "./Example"
import "../style/Projects.css"

const Projects = (props) => {
    console.log(props.examples[0].title)
    return (
        <div className = "projects">
            <Example examples={props.examples}/>
        </div>
    )
}

export default Projects