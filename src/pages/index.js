import React from "react"

import SEO from "../components/seo"

import Header from "../components/header/header"
import Container from "../components/container/container"
import Instruction from "../components/instruction/instruction"

import "../global_styles.scss"

const IndexPage = () => (
  <Container>
    <SEO />
    <Header siteTitle="Odbierz 213 PLN na swój pierwszy pobyt z Airbnb!" />

    <Instruction id={"i1"} prevItem={"header"} nextItem={"i2"}>
      <h1>Jak to działa?</h1>
      <p>
        Rabat w wysokości <b>213zł</b> jest dostępny{" "}
        <b>tylko dla nowych użytkowników</b>.
        <br />
        Należy zarejestrować nowe konto z linku polecającego:
      </p>
      <p>
        <a
          style={{ fontSize: "1.5em" }}
          href="https://www.airbnb.no/c/konradd492"
          target="_blank"
        >
          <b>https://www.airbnb.no/c/konradd492</b>
        </a>
      </p>
      <p>
        Istotne jest, aby <b>zarejestrować się przez stronę norweską </b>
        (później można zmienić język),
        <br /> w innym wypadku rabat może być niższy.
      </p>
      <p>
        Oczywiście możesz użyć link od kogokolwiek (np. znajomego), ale nie
        każde konto zagwarantuje 213zł.
        <br />
        Kwota zależy od stopnia zaawansowania, czyli na przykład od ilości
        podróży odbytych z Airbnb.
      </p>
      <p>Otrzymana promocja dzieli się na dwie kwoty:</p>

      <ul style={{ padding: 0, margin: 0, listStyleType: "none" }}>
        <li style={{ margin: "5px 0px 0px 0px" }}>
          <b>155zł</b> - do wykorzystania na rezerwację noclegu{" "}
          <b>za minimum 287 zł</b>
        </li>
        <li>
          <b>58zł</b> - do wykorzystania na lokalne atrakcje (np. rejs łodzią,
          warsztaty kulinarne, wynajęcie przewodnika)
        </li>
      </ul>
      <br />
      <p>
        Nie będę ukrywał, że jako osoba polecająca, otrzymam zniżkę w wysokości
        110 PLN za Twoją pierwszą zakończoną podróż.
      </p>
    </Instruction>

    <Instruction id={"i2"} prevItem={"i1"} nextItem={"i3"}>
      <h1>Jak założyć konto?</h1>
      <p>Po kliknięciu w link:</p>
      <p>
        <a href="https://www.airbnb.no/c/konradd492" target="_blank">
          <b>https://www.airbnb.no/c/konradd492</b>
        </a>
      </p>
      <p>
        zostanie otwarta strona w języku norweskim (i tak musi pozostać do
        momentu rejestracji).
      </p>
      <p>
        Aby się zarejestrować poprzez adres e-mail należy wybrać opcję
        <b> "Registrer deg med epost"</b>.
      </p>
      <p>
        Następnie pojawi się okno w którym należy wypełnić swoje dane:
      </p>
      <ul style={{ padding: 0, margin: 0, listStyleType: "none" }}>
        <li style={{ margin: "5px 0px 0px 0px" }}>
          E-postadresse - Adres e-mail
        </li>
        <li>Fornavn - Imię</li>
        <li>Etternavn - Nazwisko</li>
        <li>Opprett et passord - Hasło</li>
        <li>Bursdag - Data urodzenia</li>
      </ul>
      <br />
      <p>
        Po wypełnieniu danych należy kliknąć przycisk <b> "Registrer deg"</b>{" "}
        (zarejestruj się).
      </p>
      <p>
        Wyskoczy okno w którym należy zaakceptować regulamin - przycisk{" "}
        <b> "Godta"</b> (akceptuj).
      </p>
      <p>Konto powinno zostać utworzone.</p>
    </Instruction>
    <Instruction id={"i3"} prevItem={"i2"} nextItem={"i4"}>
      <h1>Zmiana języka</h1>
      <p>Aby zmienić język, kliknij na swój awatar w prawym górnym rogu.</p>
      <p>
        Następnie wybierz opcję <b> "Profil"</b> (powinna być pierwsza).{" "}
      </p>
      <p>
        Na stronie która sie pojawi, znajdź opcję <b> "Foretrukket språk"</b> i
        ustaw preferowany język.{" "}
      </p>
      <p>
        Opcja niżej - <b> "Foretrukken valuta"</b> pozwala na zmianę waluty.{" "}
      </p>
      <p>
        Zjedź na sam dół strony i kliknij przycisk <b> "Lagre"</b>, aby zapisać
        zmiany.
      </p>
    </Instruction>
    <Instruction id={"i4"} prevItem={"i3"}>
      <h1>Gdzie jest kod i jak go użyć?</h1>
      <p>
        Przyznane środki powinny być widoczne po kliknięciu <br /> na przycisk{" "}
        <b>"Środki"</b> w prawym górnym rogu zaraz obok awatara.
      </p>
      <p>
        Zostaną automatycznie wykorzystane na pierwszą rezerwację, <br />
        której <b>łączny koszt wyniesie min. 287zł (nie wliczając opłat za
        sprzątanie i podatków).</b>
      </p>
      <h2><b style={{color:"rgb(255,115,10)"}}>Udanego podróżowania! :)</b></h2>
    </Instruction>
  </Container>
)

export default IndexPage
