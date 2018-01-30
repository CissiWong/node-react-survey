import React from "react"

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <p>Du svarar på varje fråga genom att kryssa i ”ja” eller ”nej”.  Summan av dina svar, där ett ”ja” ger ett poäng och ett ”nej” ger 0 poäng, kommer att visas direkt när du svarat på sista frågan. Det kommer även att komma upp en text med information och råd om vad nästa steg kan bli, om poängvärdet blev högt.
            Vi vill avsluta med att varna för att formuläret kan innehålla triggers i form av XXX, YYY och ZZZ  (ingen aning – hjälp! Starka känslor?) och råder i så fall dig att söka stöd och hjälp. Ta gärna kontakt med oss här (länk) så kan vi slussa dig vidare. Vi finns här för att hjälpa till!
        </p>
      </div>
    )
  }
}
