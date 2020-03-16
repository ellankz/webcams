import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import WebcamsList from "./WebcamsList";
import WebcamSingle from "./WebcamSingle";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrap">
      <div className="ui container">
        <Router>
          <Route path="/" exact component={WebcamsList} />
          <Route path="/category/:category" exact component={WebcamsList} />
          <Route path="/webcam/:id" exact component={WebcamSingle} />
        </Router>
      </div>
    </div>
  );
};

export default App;
