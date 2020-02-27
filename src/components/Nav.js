import React from "react"
import "../style/Nav.css"

const Nav = () => {
    return (
        <div className = "navBar">
            <ul className = "navList">
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Nav