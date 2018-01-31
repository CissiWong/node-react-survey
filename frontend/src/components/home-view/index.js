import React from "react"
// import SimplePieChart from "../simplepiechart.js"
// import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
// import { render } from 'react-dom'
// import { ResponsivePie } from "@nivo/pie"
import "./style.css"
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

  // dataForChart = () => (
  //  Object.keys(this.state.results).map(totalScore => ({
  //    x: totalScore,
  //    y: this.state.results[totalScore]
  //   }))
  // )

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
        {/* <div className="chart">
          <ResponsivePie
            data={[
              {
                id: "med sjukpenning",
                label: "med sjukpenning",
                value: 800,
                color: "hsl(67, 70%, 50%)"
              },
              {
                id: "utan sjukpenning",
                label: "utan sjukpenning",
                value: 200,
                color: "hsl(283, 70%, 50%)"
              }
            ]}
            margin={{
              top: 40,
              right: 80,
              bottom: 80,
              left: 80
            }}
            innerRadius={0.05}
            padAngle={0.7}
            cornerRadius={3}
            colors="pastel1"
            colorBy="id"
            borderColor="inherit:darker(0.6)"
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor="inherit"
            enableSlicesLabels={false}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate
            motionStiffness={90}
            motionDamping={15}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemHeight: 14,
                symbolSize: 14,
                symbolShape: "circle"
              }
            ]} />
        </div> */}
        <main className="form-container">
          {this.state.start && !this.state.results && <Form onDone={this.handleDone} />}
          {this.state.results && <Finish totalScore={this.state.results.totalScore} />}
          {!this.state.start &&
            <div className="start">
              <div>
                <p>Du svarar på varje fråga genom att kryssa i ”ja” eller ”nej”.</p>
                <p>Summan av dina svar, där ett ”ja” ger ett poängvärde och ett ”nej” ger 0 poäng, kommer att visas när du svarat på sista frågan.</p>
                <p>Det kommer även att komma upp en text med information och råd om vad nästa steg kan bli, om poängvärdet blev högt.</p>
                <p>Vi vill avsluta med att varna för att formuläret innehåller referenser till våld och tvång och kan verka triggande och råder vi i så fall dig att söka stöd och hjälp.</p>
                <p>Ta gärna kontakt med oss här (länk) så kan vi slussa dig vidare.</p>
                <p>Vi finns här för att hjälpa till!</p>
              </div>
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
