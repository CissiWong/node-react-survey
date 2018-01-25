import React from "react"
import Question from "../question"
import data from "../data.js"

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

  handleQuestionAnswer = score => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
      score: [score, ...this.state.score]
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
      console.log("helloo!")
    }
  }

  render() {
    console.log(data)
    const question = data[this.state.currentQuestionIndex]
    console.log(question)
    return (
      <div>
        <Question
          status={question.isAnswered}
          onAnswered={this.handleQuestionAnswer}
          index={question.index}
          score={question.score}
          title={question.title}
          question={question.question}
          buttonText={question.buttonText} />
      </div>
    )
  }
}
