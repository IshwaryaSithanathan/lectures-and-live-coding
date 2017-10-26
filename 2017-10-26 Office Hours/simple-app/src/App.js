import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.onClick.bind(this)}>+1</button>
        </div>
      </div>
    );
  }
}

export default App;
