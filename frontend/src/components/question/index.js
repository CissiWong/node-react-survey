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
          <div className="container">
            <ul>
              <li>
                <input
                  onChange={this.handleScoreChange}
                  value={0}
                  checked={this.state.selectedScore === "0"}
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
                  checked={parseInt(this.state.selectedScore, 10) === this.props.score}
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
          className="next-btn"
          type="submit">
          <p>{this.props.buttonText}</p>
        </button>
        {/* </div> */}
      </form>
    )
  }
}
