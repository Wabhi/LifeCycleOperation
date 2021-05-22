import "./styles.css";
import React, { Component } from "react";
import Counter from "./Counter";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProps: 0
    };
  }
  handleMount = () => {
    this.setState({ mount: true });
  };
  handleUnMount = () => {
    this.setState({ mount: false });
  };
  handleIgnore = () => {
    this.setState({ ignoreProps: Math.random() });
  };
  render() {
    return (
      <div className="App">
        <h1>Life cycle Method !</h1>
        {this.state.mount ? (
          <Counter ignoreProps={this.state.ignoreProps} />
        ) : null}
        <br />
        <button onClick={this.handleMount} disabled={this.state.mount}>
          MOUNT
        </button>
        |||
        <button onClick={this.handleUnMount} disabled={!this.state.mount}>
          UNMOUNT
        </button>
        |||
        <button onClick={this.handleIgnore}>IGNORE</button>
      </div>
    );
  }
}
