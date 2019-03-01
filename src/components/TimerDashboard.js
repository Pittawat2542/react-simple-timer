import React, { Component } from "react";

import Timer from "./Timer";

export default class TimerDashboard extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    isStarted: false
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.isStarted) {
        if (this.state.seconds === 59) {
          this.setState({ minutes: this.state.minutes + 1, seconds: 0 });

          if (this.state.minutes === 59) {
            this.setState({ hours: this.state.hours + 1, minutes: 0 });
          }
        } else {
          this.setState({ seconds: this.state.seconds + 1 });
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleToggleTimer = () => {
    this.setState({
      isStarted: !this.state.isStarted
    });
  };

  handleResetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  };

  render() {
    return (
      <div>
        <Timer
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
        <button onClick={this.handleToggleTimer}>
          {this.state.isStarted ? "Pause" : "Start"}
        </button>
        <button onClick={this.handleResetTimer}>Reset</button>
      </div>
    );
  }
}
