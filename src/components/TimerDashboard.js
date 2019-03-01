import React, { Component } from 'react'

import Timer from './Timer';

export default class TimerDashboard extends Component {
  render() {
    return (
      <div>
        <Timer />
        <button>Start</button>
        <button>Reset</button>
      </div>
    )
  }
}
