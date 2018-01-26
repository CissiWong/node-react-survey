import React from "react"
import Question from "../question"
import data from "../data.js"
import Finish from "../finish"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      score: [],
      totalScore: 0,

    }
  }

  handleQuestionAnswer = score => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
      score: [score, ...this.state.score]
    }, () => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      this.setState({
        totalScore: this.state.score.reduce(reducer)
      })
    })
  }

  render() {
    const question = data[this.state.currentQuestionIndex]
    // console.log(data.length)
    // if (this.state.currentQuestionIndex >= data.length) {
    //   console.log("button stop!")
    // } else {
    //   console.log("button go!")
    //   return <Finish />
    // }
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
