import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Bot from "./components/Bot";
import Poke from "./images/Pokemon.png";
import Clone from "./images/Webclone.png";
import HangmanP from "./images/HangmanP.png";
import Dice from "./images/DiceGame.png";
import Cube from "./components/Cube"
import "./style/App.css";

class App extends Component {
  state = {
    examples: [
      {
        title: "Pokémon Stat Finder",
        image: Poke,
        text:
          "A small web app that takes data from a Pokémon API and allows you to search for Pokémon stats. Includes an autocomplete feature and arrow scrolling.",
        url: "https://mclarework.github.io/poke-react-challenge/"
      },
      {
        title: "D&D Beyond visual clone",
        image: Clone,
        text:
          "A visual clone of the D&D Beyond website. This was early practise at using CSS and Flexbox to organise webpage layouts.",
        url: "https://mclarework.github.io/dndbeyondWebClone/"
      },
      {
        title: "Hangman",
        image: HangmanP,
        text:
          "I made a simple Hangman game, but in Polish for one of my friends who is Polish.",
        url: "https://mclarework.github.io/hangmanP/"
      },
      {
        title: "Dice Game",
        image: Dice,
        text:
          "A basic dice game. If your rolls total 21 before you roll a natural 1 then you win the game.",
        url: "https://mclarework.github.io/diceGame/"
      }
    ]
  };
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Nav />
          <Cube/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/projects"
            render={() => <Projects examples={this.state.examples} />}
          />
          <Route path="/contact" component={Contact} />
          <Bot />
        </div>
      </Router>
    );
  }
}
export default App;
