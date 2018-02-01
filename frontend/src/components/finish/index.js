import React from "react"
import NoScoreFinish from "../no-score-finish"

export default class Finish extends React.Component {
  render() {
    return (
      <main>
          <p>Stort tack för att du tog dig tid och mod till att fylla i enkäten.</p>
          <p>Du har fått {this.props.totalScore} poäng av 16 poäng totalt, vilket gör det befogat för oss att misstänka att du blivit utsatt för övergrepp.</p>
          <p>Det första vi vill säga är:</p><p className="bold">Du är inte ensam.</p>
          <p>Vi vet av egen erfarenhet att det kan vara enormt svårt att få bekräftat att man blivit utsatt för detta, samtidigt kanske en lättnad.</p>
          <p>Hur du än upplever detta, råder vi dig starkt att ta kontakt med någon du kan prata med alternativt göra en anmälan.</p>
          <p>Oavsett hur du önskar gå vidare finns vi här för att hjälpa dig, så hör gärna av dig till oss så slussar vi dig vidare till rätt instans eller person.</p>
      </main>
    )
  }
}
