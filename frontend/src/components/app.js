import React from "react"
import HomeView from "./home-view"
import AdminView from "./admin-view"

class App extends React.Component {

  render() {
    return (
      <div>
        <HomeView />
        <AdminView />
      </div>
    )
  }
}

export default App
