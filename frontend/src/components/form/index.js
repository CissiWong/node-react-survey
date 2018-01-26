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

  // componentWillUnmount() {
  //   fetch("http://localhost:8080/answer", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, textplain, */*",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(this.state)
  //   }).then(response => {
  //     if (response.status === 201) {
  //       this.setState({
  //         currentQuestionIndex: 0,
  //         score: [],
  //         totalScore: 0
  //       })
  //     } else {
  //     //validation error //
  //     }
  //   })
  // }

  handleQuestionAnswer = score => {
    if (this.state.currentQuestionIndex + 1 === data.length) {
      this.props.onDone(this.state)
    }
     
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
