import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import Bot from "./components/Bot"
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Home/>
          <Bot/>
        </div>
      </Router>
    );
  }
}
export default App;
