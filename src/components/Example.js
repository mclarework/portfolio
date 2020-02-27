import React from "react"
import "../style/Example.css"

const Example = (props) => {
    console.log(props.examples[0].title)
    return (
        <div className = "example">
            <div className = "title">
                <h3>{props.examples[0].title}</h3>
            </div>
            <div className = "image">

            </div>
            <div className = "gitLink">
            <a href={props.examples[0].url}>{props.examples[0].url}</a>
            </div>
        </div>
    )
}

export default Example