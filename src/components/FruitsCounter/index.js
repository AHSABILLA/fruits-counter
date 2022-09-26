// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mangoClick = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  bananaClick = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="eat-heading">
            Bob ate <span className="mango-span">{count1}</span> mangoes{' '}
            <span className="banana-span">{count2}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-img"
              />
              <div className="button-contaienr">
                <button
                  onClick={this.mangoClick}
                  type="button"
                  className="fruit-button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-img"
              />
              <div className="button-container">
                <button
                  onClick={this.bananaClick}
                  type="button"
                  className="fruit-button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
