import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Bot from "./components/Bot";
import "./style/App.css";

class App extends Component {
  state = {
    examples: [
      {
        title: "Pokémon Stat Finder",
        image: null,
        url: "https://mclarework.github.io/poke-react-challenge/"
      },
      {
        title: "D&D Beyond visual clone",
        image: null,
        url: "https://mclarework.github.io/dndbeyondWebClone/"
      },
      {
        title: "Hangman",
        image: null,
        url: "https://mclarework.github.io/hangman/"
      },
      {
        title: "Dice Game",
        image: null,
        url: "https://mclarework.github.io/diceGame/"
      }
    ]
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" render={()=> (<Projects examples={this.state.examples}/> )} />
          <Route path="/contact" component={Contact} />
          <Bot />
        </div>
      </Router>
    );
  }
}
export default App;
