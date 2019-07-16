import React from "react";
// const React = require('react');
import ReactDOM from "react-dom";

import "./styles.css";

class Count extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  countUp = () => {
    let countVal = this.state.count + 1;
    this.setState({ count: countVal });
  };
  countDown = () => {
    let countVal = this.state.count - 1;
    this.setState({ count: countVal });
  };

  render() {
    return (
      <React.Fragment>
        <p>{this.state.count}</p>
        <button onClick={this.countUp}>+</button>
        <button onClick={this.countDown}>-</button>
      </React.Fragment>
    );
  }
}
function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
