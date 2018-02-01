import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import HomeView from "./home-view"
import Question from "./question"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/" exact component={HomeView} />
          <Route path="/:index" component={Question} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
