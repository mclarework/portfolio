import React, { Component } from "react";
import "../style/Cube.css";

class Cube extends Component {
  
  render() {
    return (
        <div class = "main">
        <div class = "cube">
            <div class = "face one">
                <h1>One</h1>
            </div>
            <div class = "face two">
                <h1 id = "html_face">html</h1>
            </div>
            <div class = "face three">
                <h1 id = "css_face">CSS</h1>
            </div>
            <div class = "face four">
                <h1>Four</h1>
            </div>
            <div class = "face five">
                <h1 id = "js_face">Javascript</h1>
            </div>
            <div class = "face six">
                <h1>Six</h1>
            </div>
        </div>
    </div>
    );
  }
}
export default Cube;
