import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import HomeView from "./home-view"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/" exact component={HomeView} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
