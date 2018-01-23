import React from "react"

export default class Question extends React.Component {

  handleAnswer = () => {
    this.props.onNewAnswer(this.props.index)
  }

  handleScore = () => {
    console.log("the score is", this.props.score)
    this.props.onNewScore(this.props.score)
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.question}</p>
        <label>
          <input
            type="radio"
            id="radio-no" />No
        </label>
        <label>
          <input
            value={this.props.score}
            onChange={this.handleScore}
            type="radio"
            id="radio-yes" />Yes
          <button
            value={this.props.index}
            type="submit"
            onClick={this.handleAnswer}>Nästa
          </button>
        </label>
      </div>
    )
  }
}
