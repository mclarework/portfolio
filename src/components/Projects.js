import React from "react";
import Example from "./Example";
import "../style/Projects.css";

const Projects = props => {
  return (
    <div className="projects">
      <h3 className="header">Some examples of my work</h3>
      <div className="examples">
        {props.examples.map((example, index) => {
          return (
            <Example
              key={index}
              title={example.title}
              image={example.image}
              text={example.text}
              url={example.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
