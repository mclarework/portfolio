import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h5 className = "textContact">As a relative newcomer to the tech industry I would love to hear from other people and get their thoughts and feedback. If you want to get in touch or give any feedback then feel free to contact me directly or on LinkedIn.</h5>
      <h5 className = "textContactHead">Contact:-</h5>
      <ul className = "list">
        <li className = "listItem">email address: michael__clare@hotmail.co.uk</li>
        <li className = "listItem"><a href="https://www.linkedin.com/in/mike-clare/">LinkedIn Link</a></li>
      </ul>
      <h4 className = "textContact">Or, just have a look at my github repository and leave any comments. All feedback is most welcome.</h4>
      <ul className = "list">
        <li className = "listItem"><a href="https://github.com/mclarework?tab=repositories">My github repositories</a></li>
      </ul>
    </div>
  );
};

export default Contact;
