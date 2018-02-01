import React from "react"
import Question from "../question"
import data from "../data.js"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      score: [],
      totalScore: 0
    }
  }

  handleQuestionAnswer = selectedScore => {
    if (this.state.currentQuestionIndex + 1 === data.length) {
      this.props.onDone(this.state)
    }
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
      score: [...this.state.score, selectedScore]
    }, () => {
      console.log("This is the array", this.state.score)
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      parseInt(this.state.score, 10)
      // const totalScore = (this.state.score + selectedScore)
      this.setState({
        totalScore: this.state.score.reduce(reducer)
      }, () => {
        console.log("this should be adding", this.state.totalScore)
      })
    })
  }

  render() {
    const question = data[this.state.currentQuestionIndex]
    console.log(data.length)
    return (
      <div>
        <Question
          onAnswered={this.handleQuestionAnswer}
          index={this.state.currentQuestionIndex}
          score={question.score}
          title={question.title}
          question={question.question}
          buttonText={question.buttonText} />
      </div>
    )
  }
}
