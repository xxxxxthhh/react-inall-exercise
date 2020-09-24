import React, { Component } from "react";
import "./app.less";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Timer from "./Timer";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="header">
            <Link className="calculatorLink" to="/calculator">
              Calculator
            </Link>
            <Link className="timerLink" to="/timer">
              Timer
            </Link>
            <Link className="homeLink" to="/">
              Home
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/timer" component={Timer} />
            <Route component={NotMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
