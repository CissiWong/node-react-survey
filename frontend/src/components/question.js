import React from "react"

export default class Question extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.question}</p>
        <label>
          <input
            type="radio"
            id="radio-btn-yes"
            value={this.props.score} />Yes
          <input
            type="radio"
            id="radio-btn-no" />No
        </label>
      </div>
    )
  }
}
