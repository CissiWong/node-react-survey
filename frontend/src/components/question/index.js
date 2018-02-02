import React from "react"
import "./style.css"

export default class Question extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedScore: null
    }
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.onAnswered(this.state.selectedScore)
    this.setState({
      selectedScore: null
    })
  }

  handleScoreChange = event => {
    this.setState({
      selectedScore: parseInt(event.target.value, 10)
    }, () => {
      console.log("this is handleScoreChange", this.state.selectedScore)
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
          <div className="container">
            <ul>
              <li>
                <input
                  value={0}
                  onChange={this.handleScoreChange}
                  checked={this.state.selectedScore === 0}
                  type="radio"
                  id="no-option" />
                <label
                  htmlFor="no-option">
                    Nej
                </label>
                <div className="check" />
              </li>
              <li>
                <input
                  value={this.props.score}
                  onChange={this.handleScoreChange}
                  checked={this.state.selectedScore === this.props.score}
                  type="radio"
                  id="yes-option" />
                <label htmlFor="yes-option">
                    Ja
                </label>
                <div className="check">
                  <div className="inside" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button
          disabled={this.state.selectedScore === null}
          className="next-btn"
          type="submit">
          <p>{this.props.buttonText}</p>
        </button>
      </form>
    )
  }
}
