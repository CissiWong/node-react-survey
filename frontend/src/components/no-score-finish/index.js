import React from "react"

export default class NoScoreFinish extends React.Component {
  render() {
    return (
      <main className="no-score">
        <p>Stort tack för att du tog dig tid och mod till att fylla i enkäten.</p>
        <p>Du har fått 0 poäng, vilket inte nödvändigtvis betyder att du blivit behandlad på rätt sätt. Det finns bara ett sätt man bör bli behandlad på i ett förlossningsrum och det är med respekt och omsorg. Men det är svårt att få in alla nyanser i ett fåtal frågor.</p>
        <p>Om du upplever att du blivit utsatt för övergrepp eller blivit felaktigt behandlad, råder vi dig starkt att ta kontakt med någon du kan prata med så att du får hjälp.</p>
        <p>Om du inte är säker på vem du ska kontakta finns vi här för att hjälpa till, så <a href="mailto:kontakt@fodelsebyran.se">hör gärna av dig till oss</a> så slussar vi dig vidare till rätt instans eller person.</p>
      </main>
    )
  }
}
