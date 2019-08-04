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

    <Instruction id={"i1"} prevItem={"header"}>
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

      <p>
        Nie będę ukrywał, że jako osoba polecająca, otrzymam zniżkę w wysokości
        110 PLN za Twoją pierwszą zakończoną podróż.
      </p>
    </Instruction>

    {/* <Instruction id={"i2"} prevItem={"i1"} nextItem={"i3"}>
      <h1>Instrukcja2</h1>
    </Instruction>

    <Instruction id={"i3"} prevItem={"i2"} nextItem={"i3"}>
      <h1>Instrukcja3</h1>
    </Instruction> */}
  </Container>
)

export default IndexPage
