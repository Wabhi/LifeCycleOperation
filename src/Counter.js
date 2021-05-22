import React, { Component } from "react";
export default class extends Component {
  constructor(props) {
    console.log("Constructor is calling...");
    super(props);
    this.state = {
      counter: 0
    };
  }
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  componentDidMount() {
    console.log("ComponentDidMount is calling...");
    console.log("...................................");
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log("ComponentDidUpdate is calling...");
    console.log("...................................");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount is calling...");
    console.log("...................................");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProps &&
      this.props.ignoreProps !== nextProps.ignoreProps
    ) {
      console.log("ShouldComponentUpdate is calling- Not Render");
      return false;
    }
    console.log("ShouldComponentUpdate is calling- Is Render...");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("getSnapShotBeforeUpdate is calling- get snap before update");
    return null;
  }
  componentDidCatch(err, info) {
    console.log("componentDidCatch is calling- if error occur");
  }
  render() {
    console.log("render is calling...");
    return (
      <div>
        <h1>I am counter !</h1>
        <h4>Counter : [{this.state.counter}]</h4>
        <button onClick={this.handleIncrement}>INCREMENT</button>|||
        <button onClick={this.handleDecrement}>DECREMENT</button>
      </div>
    );
  }
}
