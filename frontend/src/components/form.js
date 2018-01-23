import React from "react"
import Question from "./question.js"
import data from "./data.js"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      score: []
    }
  }

  handleNewQuestion = onNewAnswer => {
    const newQuestion = onNewAnswer + 1
    this.setState({
      currentQuestionIndex: newQuestion
    })
  }

  addScore = onNewScore => {
    this.setState({
      score: [onNewScore, ...this.state.score]
    })
  }

  render() {
    const question = data[this.state.currentQuestionIndex]
    return (
      <div>
        <Question
          onNewAnswer={this.handleNewQuestion}
          index={this.state.currentQuestionIndex}
          score={question.score}
          title={question.title}
          question={question.question}
          onNewScore={this.addScore} />
      </div>
    )
  }
}
