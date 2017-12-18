import React, {Component} from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import reactLogo from './images/react.svg';
import playLogo from './images/play.svg';
import javaLogo from './images/java.webp';

import './App.css';

const Tech = ({ match }) => {
  return <div>Current Route: {match.params.tech}</div>
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  async componentDidMount() {
    const response = await fetch('/summary');
    const resContent = await response.json();

    this.setState({
      title: resContent.content
    });
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <h1>Welcome to {this.state.title}!</h1>
          <nav>
            <Link to="java" >
              <img width="400" height="400" src={javaLogo} alt="Java Logo" />
            </Link>
            <Link to="play" >
              <img width="400" height="400" src={playLogo} alt="Play Framework Logo" />
            </Link>
            <Link to="react" >
              <img width="400" height="400" src={reactLogo} className="App-logo" alt="React Logo"/>
            </Link>
          </nav>
          <Route path="/:tech" component={Tech} />
          <div>
            <h2>Check out the project on GitHub for more information</h2>
            <h3>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/yohangz/java-play-react-seed">
                java-play-react-seed
              </a>
            </h3>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
