import React from "react"

export default class Question extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedScore: null
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

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleFormSubmit}>
        <h2>{this.props.title}</h2>
        <p>{this.props.question}</p>
        <div className="radio">
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
                checked={parseInt(this.state.selectedScore) === this.props.score}
                type="radio"
                name="score" /><p>Ja</p>
            </label>
          </div>
          <button
            type="submit"><p>{this.props.buttonText}</p>
          </button>
        </div>
      </form>
    )
  }
}
