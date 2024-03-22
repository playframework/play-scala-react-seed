import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  async componentDidMount() {
    // Perform any asynchronous tasks here
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Sidebar />
          <Banner />
        </div>
      </Router>
    );
  }
}

export default App;
