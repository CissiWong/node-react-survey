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

  // handleQuestionAnswer = selectedScore => {
  //   if (this.state.currentQuestionIndex + 1 === data.length) {
  //     this.props.onDone(this.state)
  //   }
  //   this.setState({
  //     currentQuestionIndex: this.state.currentQuestionIndex + 1,
  //     score: [...this.state.score, selectedScore]
  //   }, () => {
  //     const reducer = (accumulator, currentValue) => accumulator + currentValue
  //     this.setState({
  //       totalScore: this.state.score.reduce(reducer)
  //     })
  //   })
  // }

  handleQuestionAnswer = selectedScore => {
    const score = [...this.state.score, selectedScore]
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    this.setState({
      totalScore: score.reduce(reducer),
      score
    }, () => {
      if (score.length === data.length) {
        this.props.onDone(this.state)
      } else {
        this.setState({
          currentQuestionIndex: this.state.currentQuestionIndex + 1
        })
      }
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
