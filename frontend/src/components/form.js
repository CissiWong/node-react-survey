import React from "react"
import Question from "./question.js"
import data from "./data.js"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      score: [],
      totalScore: 0
    }
  }

  handleNewQuestion = onNewAnswer => {
    const newQuestion = onNewAnswer + 1
    this.setState({
      currentQuestionIndex: newQuestion
    })
  }

  handleScore = onNewScore => {
    const scoreTotal = onNewScore + this.state.totalScore
    this.setState({
      score: [onNewScore, ...this.state.score],
      totalScore: scoreTotal
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
          onNewScore={this.handleScore} />
      </div>
    )
  }
}
