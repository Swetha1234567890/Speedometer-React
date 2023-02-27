// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickAccBtn = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  onClickAppBtn = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="background">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <h1 className="text">Speed is {speed}mph</h1>
        <p className="min-max">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            className="acc-btn"
            type="button"
            onClick={this.onClickAccBtn}
          >
            Accelerate
          </button>
          <button
            className="app-btn"
            type="button"
            onClick={this.onClickAppBtn}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
