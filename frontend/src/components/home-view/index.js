import React from "react"
import "./style.css"
import Form from "../form"
import logo from "./fb_logga_transp.png"
import iglogo from "./instagram.svg"
import fblogo from "./facebook.svg"
import email from "./send.svg"

export default class HomeView extends React.Component {

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
            <div className="email">
              <a href="mailto:kontakt@fodelsebyran.se" reL="noopener noreferrer">
                <img src={email} alt="email" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
