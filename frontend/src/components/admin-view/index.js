import React from "react"
import Login from "../login"
import logo from "./fb_logga_transp.png"

export default class AdminView extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="" />
        </header>
        <Login />
      </div>
    )
  }
}
