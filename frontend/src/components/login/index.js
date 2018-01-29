import React from "react"

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      errors: {}
    }
  }

  handleLoginSubmit = event => {
      console.log("yay!")
    event.preventDefault()
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => response.json())
      .then(json => {
        if (json.errors) {
          this.setState({
            errors: json.errors
          })
        }
      })
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleLoginSubmit}>
          <label>
            Username:
            <input
              onChange={this.handleUsernameChange}
              type="text"
              value={this.state.username}
              name="username"
              required />
          </label>
          <label>
            Password:
            <input
              onChange={this.handlePasswordChange}
              type="password"
              value={this.state.password}
              name="password"
              required />
          </label>
          <button
            type="submit" />Login
        </form>
      </div>
    )
  }
}
