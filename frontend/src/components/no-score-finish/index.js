import React from "react"

export default class NoScoreFinish extends React.Component {
  render() {
    return (
      <main className="no-score">
        <p>Du har fått 0 poäng, vilket inte nödvändigtvis betyder att du blivit behandlad på rätt sätt av vårdpersonal. Det finns bara ett sätt en bör bli behandlad på i ett förlossningsrum och det är med respekt och omsorg. Men det är svårt att få in alla nyanser i ett fåtal frågor. Stort tack för att du tog dig tid och mod till att fylla i enkäten. </p>
        <p>Om du inte är säker på vem du ska kontakta så finns vi här för att hjälpa till, <a href="mailto:kontakt@fodelsebyran.se">hör gärna av dig</a> till oss i så fall så hjälper vi dig vidare till rätt instans eller person.</p>
        <p>Om du upplever att du blivit utsatt för övergrepp eller blivit felaktigt behandlad, råder vi dig starkt att ta kontakt med någon så att du får stöd och hjälp. </p>
      </main>
    )
  }
}
