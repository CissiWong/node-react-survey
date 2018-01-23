import React from "react"

export default class Question extends React.Component {

  // handles render of new question //
  handleAnswer = () => {
    this.props.onNewAnswer(this.props.index)
  }

  // handles passing value of current score //
  handleScore = () => {
    console.log("the score is", this.props.score)
    this.props.onNewScore(this.props.score)
  }

  // handle status toggled to Answered //
  handleStatus = () => {
    console.log("the status is", this.props.status)
    this.props.onNewStatus(this.props.status)
  }

  render() {
    return (
      <form
        onSubmit={this.handleStatus}
        value={this.props.status}>
        <h1>{this.props.title}</h1>
        <p>{this.props.question}</p>
        <label>
          <input
            type="radio"
            name="score" />Nej
        </label>
        <label>
          <input
            onSubmit={this.handleScore}
            value={this.props.score}
            type="radio"
            name="score" />Ja
          <button
            value={this.props.index}
            type="submit"
            onClick={this.handleAnswer}>Nästa
          </button>
        </label>
      </form>
    )
  }
}
