import React from "react"
import "./home-view.css"
import Form from "./form.js"

export default class HomeView extends React.Component {

  render() {
    return (
      <div>
        <header />
        <main>
          <Form />
        </main>
      </div>
    )
  }
}
