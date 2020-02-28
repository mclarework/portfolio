import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">Mike Clare</h1>
      <h5 className="subheading">Full Stack - Junior Developer</h5>
      <div className="skills">
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>Git</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
