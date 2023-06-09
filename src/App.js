import React, { Component } from "react";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainComponent />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
