import React, { Component } from "react";
import "../style/Cube.css";

class Cube extends Component {
  
  render() {
    return (
        <div class = "main">
        <div class = "cube">
            <div class = "face one">
                <h1 id = "git_face">git &amp; gihub</h1>
            </div>
            <div class = "face two">
                <h1 id = "html_face">html</h1>
            </div>
            <div class = "face three">
                <h1 id = "css_face">CSS</h1>
            </div>
            <div class = "face four">
                <h1 id = "React_face">React.js</h1>
            </div>
            <div class = "face five">
                <h1 id = "js_face">Javascript</h1>
            </div>
            <div class = "face six">
                <h1 id = "Node_face">Node.js</h1>
            </div>
        </div>
    </div>
    );
  }
}
export default Cube;
