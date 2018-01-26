import React from "react"
import "./style.css"
import data from "../data.js"

export default class Question extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedScore: null
      // show: false
    }
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.onAnswered(this.props.score)
  }

  handleScoreChange = event => {
    this.setState({
      selectedScore: event.target.value
    })
  }

  // componentWillReceiveProps() {
  //   if (this.props.index <= 0) {
  //     this.setState({
  //       show: !this.state.show
  //     })
  //   }
  // }

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleFormSubmit}>
        <h2>{this.props.title}</h2>
        <p>{this.props.question}</p>
        <div className="radio">
          {/* <div className={this.state.show ? "show" : "hide"}> */}
          <div className="score">
            <label>
              <input
                value={0}
                onChange={this.handleScoreChange}
                checked={this.state.selectedScore === "0"}
                type="radio"
                name="score" /><p>Nej</p>
            </label>
            <label>
              <input
                value={this.props.score}
                onChange={this.handleScoreChange}
                checked={parseInt(this.state.selectedScore, 10) === this.props.score}
                type="radio"
                name="score" /><p>Ja</p>
            </label>
          </div>
        </div>
        <button
          className="next-btn"
          type="submit">
          <p>{this.props.buttonText}</p>
        </button>
        {/* </div> */}
      </form>
    )
  }
}
