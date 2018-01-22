import React from "react"

export default class Question extends React.Component {

  handleAnswer = () => {
    this.props.updateIndex(this.props.index)
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.question}</p>
        <label>
          <input
            type="radio"
            id="radio-yes"
            value={this.props.score} />Yes
        </label>
        <label>
          <input
            type="radio"
            id="radio-no" />No
        </label>
        <button
          value={this.props.index}
          type="submit"
          onClick={this.handleAnswer}>Nästa
        </button>
      </div>
    )
  }
}
