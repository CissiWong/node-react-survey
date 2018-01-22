import React from "react"
import Question from "./question.js"
import data from "./data.js"


export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0
    }
  }

  render() {
    const question = data[this.state.currentQuestionIndex]
    return (
      <div>
        <Question
          score={question.score}
          title={question.title} />
      </div>
    )
  }
}
