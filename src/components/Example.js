import React from "react"
import Poke from "../images/Pokemon.png"
import "../style/Example.css"

const Example = (props) => {
    return (
        <div className = "example">
            <div className = "title">
                <h3>{props.title}</h3>
            </div>
            <div className = "image">
                <img src = {Poke} alt="" height="300px" width="380px"/>
            </div>
            <div className = "gitLink">
            <a href={props.url}>{props.url}</a>
            </div>
        </div>
    )
}

export default Example