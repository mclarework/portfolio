import React from "react";
import "../style/Example.css";

const Example = props => {
  return (
    <div className="example">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img src={props.image} alt="" height="200px" width="380px" />
      </div>
      <div className="gitLink">
        <a href={props.url}>{props.url}</a>
      </div>
    </div>
  );
};

export default Example;
