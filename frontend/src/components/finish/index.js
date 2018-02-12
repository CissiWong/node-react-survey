import React from "react"

export default class Finish extends React.Component {
  render() {
    return (
      <main className="finish">
          <p>Du har fått {this.props.totalScore} poäng av 16 poäng totalt, vilket gör det befogat för oss att misstänka att det du utsattes för var allvarliga övergrepp.</p>
          <p>Det första vi vill säga är:</p><p className="bold">Du är inte ensam.</p>
          <p>Stort tack för att du tog dig tid och mod till att fylla i enkäten. Vi vet av egen erfarenhet att det kan vara oerhört svårt att få bekräftat att en blivit utsatt för detta av de som ansvarade för ens vård och omsorg. Samtidigt kan det vara en lättnad.</p>
          <p>Hur du än hanterar detta idag, råder vi dig starkt att ta kontakt med någon du kan prata med du kan prata med så att du får hjälp och stöd att gå vidare.</p>
          <p>Vi råder dig även att göra en anmälan och görs via patientombud, patientnämnder och polis.</p>
          <p>Oavsett hur just du önskar gå vidare finns vi här för att hjälpa dig, så ta gärna <a href="mailto:kontakt@fodelsebyran.se">kontakt med oss</a>för råd om var du kan söka stöd och hjälp.</p>
      </main>
    )
  }
}
