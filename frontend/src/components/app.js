import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import HomeView from "./home-view"
import AdminView from "./admin-view"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accessToken: "",
      userId: ""
    }
  }

  handleLoginSuccess = user => {
    this.setState({
      accessToken: user.accessToken,
      userId: user._id
    })
  }

  loggedIn = () => {
    if (this.state.accessToken && this.state.userId) {
      console.log("logged in!")
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/" exact component={HomeView} />
          {this.loggedIn()
            ? <p>Logged in!</p>
            : <AdminView
              onLoginSuccess={this.handleLoginSuccess} />}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
