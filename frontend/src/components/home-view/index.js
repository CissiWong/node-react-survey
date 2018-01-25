import React from "react"
import "./style.css"
import Form from "../form"
import logo from "./fb_logga_transp.png"
import iglogo from "./instagram.svg"
import fblogo from "./facebook.svg"

export default class HomeView extends React.Component {

  render() {
    return (
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="" />
        </header>
        <div className="intro-text">
          <p>Födelsebyrån är en patientdriven riksorganisation för födande samt graviditets- och förlossningsskadade samt anhöriga.</p>
          <p className="bold">Vi verkar för en rättvis och säker vård för alla.</p>
        </div>
        <main className="form-container">
          <Form />
        </main>
        <footer className="footer">
          <div className="column-one">
            <h2>Födelsebyrån</h2>
            <p>Födelsebyrån är patientföreningen för födande samt graviditets- och förlossningsskadade samt anhöriga. Vi verkar för en rättvis och säker vård för alla.</p>
          </div>
          <div className="column-two">
            <div className="ig-logo">
              <a href="https://www.instagram.com/fodelsebyran.se/">
                <img src={iglogo} alt="instagramlogo" />
              </a>
            </div>
            <div className="fb-logo">
              <a href="https://www.facebook.com/fodelsebyran/" reL="noopener noreferrer">
                <img src={fblogo} alt="facebooklogo" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
