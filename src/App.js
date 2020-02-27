import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Bot from "./components/Bot"
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/about" component={About}/>
          <Route exact path = "/portfolio" component={Portfolio}/>
          <Route exact path = "/contact" component={Contact}/>
          <Bot/>
        </div>
      </Router>
    );
  }
}
export default App;
