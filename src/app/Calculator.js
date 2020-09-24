import React, { Component } from "react";
import { Link } from "react-router-dom";

class Calculator extends Component {
  state = {
    formula: "",
  };

  handleInput = (e) => {
    this.setState({
      formula: this.state.formula + String(e.target.value),
    });
  };

  handleReset = () => {
    this.setState({
      formula: "",
    });
  };

  handleCalculate = () => {
    const regex = /\d+[\+\-\*]\d+/;
    console.log(this.state.formula.replace(regex, "").length);
    console.log(this.state.formula);
    if (this.state.formula.replace(regex, "").length !== 0) {
      this.handleReset();
    } else {
      console.log(this.state.formula);
      this.setState({
        formula: eval(this.state.formula),
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <h1>在线计算器</h1>
        <div className="calPadSround">
          <input
            className="screen"
            type="text"
            readOnly={true}
            value={this.state.formula}
          />
          <div className="calPad">
            <button id="add" value="+" onClick={this.handleInput}>
              +
            </button>
            <button id="minus" value="-" onClick={this.handleInput}>
              -
            </button>
            <button id="multiply" value="*" onClick={this.handleInput}>
              X
            </button>

            <button id="one" value="1" onClick={this.handleInput}>
              1
            </button>
            <button id="two" value="2" onClick={this.handleInput}>
              2
            </button>
            <button id="three" value="3" onClick={this.handleInput}>
              3
            </button>
            <button id="four" value="4" onClick={this.handleInput}>
              4
            </button>
            <button id="five" value="5" onClick={this.handleInput}>
              5
            </button>
            <button id="six" value="6" onClick={this.handleInput}>
              6
            </button>
            <button id="seven" value="7" onClick={this.handleInput}>
              7
            </button>
            <button id="eight" value="8" onClick={this.handleInput}>
              8
            </button>
            <button id="nine" value="9" onClick={this.handleInput}>
              9
            </button>
            <button id="zero" value="0" onClick={this.handleInput}>
              0
            </button>
            <button id="reset" value="c" onClick={this.handleReset}>
              Clear
            </button>
            <button id="equals" value="=" onClick={this.handleCalculate}>
              =
            </button>
          </div>
        </div>

        <Link className="homeLinkInCal" to="/">
          回到主页
        </Link>
      </div>
    );
  }
}
export default Calculator;
