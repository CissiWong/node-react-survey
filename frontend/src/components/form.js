import React from "react"
import Question from "./question.js"
import data from "./data.js"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      score: [],
      totalScore: 0,
      isAnswered: false
    }
  }

  handleNewQuestion = onNewAnswer => {
    const newQuestion = onNewAnswer + 1
    this.setState({
      currentQuestionIndex: newQuestion
    })
  }

  handleAddScore = onNewScore => {
    const scoreTotal = onNewScore + this.state.totalScore
    this.setState({
      score: [onNewScore, ...this.state.score],
      totalScore: scoreTotal
    })
  }

  handleToggleIsAnswered = onNewStatus => {
    if (onNewStatus === !this.state.isAnswered) {
      this.setState({
        isAnswered: true
      })
    } else {
      console.log("heloo!")
    }
  }

  render() {
    const question = data[this.state.currentQuestionIndex]
    return (
      <div>
        <Question
          status={question.isAnswered}
          onNewAnswer={this.handleNewQuestion}
          index={this.state.currentQuestionIndex}
          score={question.score}
          title={question.title}
          question={question.question}
          onNewScore={this.handleAddScore}
          onNewStatus={this.handleToggleIsAnswered} />
      </div>
    )
  }
}
