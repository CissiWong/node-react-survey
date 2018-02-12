import React from "react"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from "@nivo/bar"
import NoScoreFinish from "../no-score-finish"
import "./style.css"
import Form from "../form"
import Finish from "../finish"
import logo from "./fb_logga_transp.png"
import iglogo from "./instagram.svg"
import fblogo from "./facebook.svg"
import email from "./send.svg"
import stats from "./FB_graphics_19.png"

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: false,
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

    fetch("https://fodelsebyran.herokuapp.com/answer", {
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

  startDiv = () => (
    <div className="start">
      <div>
       <h2>Så här funkar det:</h2>
        <p>Enkäten består av 8 frågor. Du besvarar varje påståenden om hur du behandlades genom att välja ”ja” eller ”nej”.</p>
        <p>Summan av alla dina svar, där ett ”ja” ger ett visst värde och ett ”nej” ger 0, kommer att visas när du svarat på sista frågan. Då får du även information och råd om vad nästa steg kan bli beroende på ditt resultat.</p>
        <p>Det kommer även att komma upp en text med information och råd om vad nästa steg kan bli, om poängvärdet blev högt.</p>
        <p>Vi vill avsluta med att varna för att enkäten innehåller referenser till våld och tvång och kan verka triggande för somliga.</p>
        <p>Ta gärna <a href="mailto:kontakt@fodelsebyran.se">kontakt med oss</a> för råd om var du kan söka stöd och hjälp. Vi finns här för dig.</p>
      </div>
      <button
        className="start-btn"
        type="submit"
        onClick={this.handleStart}><p>Börja</p>
      </button>
    </div>
  )

  formOrFinish = () => {
    if (this.state.start && !this.state.results) {
      return <Form onDone={this.handleDone} />
    } else if (this.state.results) {
      if (this.state.results.totalScore === 0) {
        return <NoScoreFinish />
      } else {
        return <Finish totalScore={this.state.results.totalScore} />
      }
    } else {
      return this.startDiv()
    }
  }

  render() {
    return (
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="" />
        </header>
        <div className="intro-text">
          <p>Den här enkäten har Födelsebyrån tagit fram för att kartlägga hur patienters kroppsliga integritet och rättigheter respekteras inom förlossningsvården i Sverige idag.</p>
          <p>Enkäten är helt anonym och vi hoppas att du som medverkar till denna unika kartläggning ska få möjlighet att börja sätta ord på vad som egentligen hände i förlossningsrummet och tiden efter och ett första verktyg för att få klarhet i om du blivit utsatt för oacceptabla handlingar av vårdpersonal så som kränkningar, övergrepp och andra allvarliga överträdelser.</p>
          <p>Födelsebyrån kommer att använda svaren som statistik och underlag för fortbildnings- och påverkansarbete.  Har du synpunkter kring denna enkäts utformning och vill bidra till att förbättra den, ta gärna <a href="mailto:kontakt@fodelsebyran.se">kontakt med oss.</a></p>
        </div>
        <div className="chart">
          <div className="rubrik">
            <img src={stats} alt="" />
          </div>
        </div>
        <main className="form-container">
          {this.formOrFinish()}
        </main>
        <footer className="footer">
          <div className="column-one">
            <h2>Födelsebyrån</h2>
             <p>Födelsebyrån är patientföreningen för födande samt graviditets- och förlossningsskadade samt anhöriga. Vi verkar för en rättvis och säker vård för alla.</p>
          </div>
          <div className="column-two">
            <div className="ig-logo">
              <a href="https://www.instagram.com/fodelsebyran.se/" rel="noopener noreferrer" target="_blank">
                <img src={iglogo} alt="instagramlogo" />
              </a>
            </div>
            <div className="fb-logo">
              <a href="https://www.facebook.com/fodelsebyran/" rel="noopener noreferrer" target="_blank">
                <img src={fblogo} alt="facebooklogo" />
              </a>
            </div>
            <div className="email">
              <a href="mailto:kontakt@fodelsebyran.se" rel="noopener noreferrer" target="_blank">
                <img src={email} alt="email" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
