import React from "react"
import "./style.css"
import data from "../data.js"
import Form from "../form"
import Finish from "../finish"
import logo from "./fb_logga_transp.png"
import iglogo from "./instagram.svg"
import fblogo from "./facebook.svg"
import email from "./send.svg"

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: false,
      done: true,
      results: null
    }
  }

  handleStart = event => {
    console.log("clicked!")
    event.preventDefault()
    this.setState({
      start: true
    })
  }

  handleDone = formState => {
    console.log(formState)
    this.setState({
      results: formState
    })

    fetch("http://localhost:8080/answer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    }).then(response => {
      if (response.status === 201) {
        return response.json()
      } else {
        console.log("oh no!", response.status === 404)
      }
    })
  }

  render() {
    return (
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="" />
        </header>
        <div className="intro-text">
          <p>Det här formuläret har vi tagit fram i förhoppning om att vi ska få en bättre uppfattning om vidden av problemet med förlossnings- och eftervård i Sverige idag.</p>
          <p>Det är också för att du som vårdtagare/patient ska få en chans att sätta ord på vad som egentligen hände i förlossningsrummet och/eller tiden efter,</p>
          <p>som ett hjälpmedel för dig att se om det du vet, upplever eller misstänker hände, kanske faktiskt rör sig om en kränkning, ett övergrepp eller ett åtalbart brott.</p>
          <p>Vi kommer att använda svaren som statistik. Du kan förhoppningsvis använda det som ett sätt att få klarhet.</p>
          <p>Självklart är du anonym.</p>
        </div>
        <main className="form-container">
          {this.state.start && !this.state.results && <Form
            onDone={this.handleDone} />}
          {this.state.results && <Finish />}
          {!this.state.start &&
            <div className="start">
              <div>Klicka här för att börja</div>
              <button
                className="start-btn"
                type="submit"
                onClick={this.handleStart}><p>Börja</p>
              </button>
            </div>}
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
              <a href="https://www.facebook.com/fodelsebyran/" rel="noopener noreferrer">
                <img src={fblogo} alt="facebooklogo" />
              </a>
            </div>
            <div className="email">
              <a href="mailto:kontakt@fodelsebyran.se" rel="noopener noreferrer">
                <img src={email} alt="email" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
