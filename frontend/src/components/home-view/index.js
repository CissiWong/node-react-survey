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
  //
  //

  render() {
    return (
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="" />
        </header>
        <div className="intro-text">
          <p>Det här formuläret har vi tagit fram i förhoppning om att vi ska få en bättre uppfattning om vidden av problemet med förlossnings- och eftervård i Sverige idag.</p>
          <p>Det är också för att du som vårdtagare/patient ska få möjlighet att sätta ord på vad som egentligen hände i förlossningsrummet och/eller tiden efter - som ett hjälpmedel för dig att se om det som hände faktiskt rör sig om en kränkning, ett övergrepp eller ett brott.</p>
          <p>Vi kommer att använda svaren som statistik. Du kan förhoppningsvis använda det som ett sätt att få klarhet.</p>
          <p>Självklart är du anonym.</p>
        </div>
        <div className="chart">
          <div className="rubrik">
            <h2>25 - 34% av alla kvinnor upplever sin förlossning som traumatisk.</h2>
          </div>
          <ResponsivePie
            data={[
              {
                id: "25",
                label: "25 procent",
                value: 25,
                color: "hsl(67, 70%, 50%)"
              },
              {
                id: "34",
                label: "34 procent",
                value: 9,
                color: "hsl(67, 70%, 50%)"
              },
              {
                id: "66",
                label: "66 procent",
                value: 66,
                color: "hsl(283, 70%, 50%)"
              }
            ]}
            margin={{
              top: 0,
              right: 0,
              bottom: 80,
              left: 0
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
            legends={[]} />
        </div>
        <main className="form-container">
          {this.state.start && !this.state.results && <Form onDone={this.handleDone} />}
          {this.state.results && <Finish totalScore={this.state.results.totalScore} />}
          {/* {this.state.results < 1 && !this.state.start && <NoScoreFinish />} */}
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
        <div className="data-vis">
          <ResponsiveBar
            data={[]}
            keys={[
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16"
            ]}
            indexBy="poängsumma"
            margin={{
              top: 50,
              right: 130,
              bottom: 50,
              left: 60
            }}
            padding={0.3}
            colors="pastel2"
            colorBy="id"
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            fill={[
              {
                match: {
                  id: "fries"
                },
                id: "dots"
              },
              {
                match: {
                  id: "sandwich"
                },
                id: "lines"
              }
            ]}
            borderColor="inherit:darker(1.6)"
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "poängsumma",
              legendPosition: "center",
              legendOffset: 36
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "antal deltagare",
              legendPosition: "center",
              legendOffset: -40
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="inherit:darker(1.6)"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                translateX: 120,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 2,
                symbolSize: 20
              }
            ]} />
        </div>
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
