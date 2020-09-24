import React, { Component } from "react";
import {Link} from "react-router-dom";

class Timer extends Component {
  state = {
    inputSecond: 0,
    seconds: "Start",
  };

  timerRun;

  componentWillUnmount() {
    clearInterval(this.timerRun);
  }

  handleUpdate = () => {
    if (this.state.seconds > 1) {
      this.setState({ seconds: this.state.seconds - 1 });
    } else {
      this.setState({ seconds: "End" });
      clearInterval(this.timerRun);
    }
  };

  handleInputChange = (e) => {
    this.setState({ inputSecond: e.target.value });
  };

  handleStart = () => {
    console.log(this.state.inputSecond);
    this.setState({
      seconds: parseInt(this.state.inputSecond),
    });
    this.timerRun = setInterval(this.handleUpdate, 1000);
  };

  render() {
    return (
      <div className="timer">
        <h1>倒计时器</h1>
        <div className="timerInside">
          <div className="timerInput">
            <label>设置时间</label>
            <input
              type="text"
              name="inputSecond"
              id="inputSecond"
              onChange={this.handleInputChange}
            />
            <button
              className="startButton"
              onClick={this.handleStart}
              disabled={
                this.state.seconds > 0 &&
                this.state.seconds != "Start" &&
                this.state.seconds != "End"
              }
            >
              Start
            </button>
          </div>
          <input type="text" className='timerScreen' readOnly={true} value={this.state.seconds}/>
        </div>
        <Link className ='homeLinkInTimer' to='/'>回到主页</Link>
      </div>
    );
  }
}

export default Timer;
