import React from "react"
import SEO from "../components/seo"

import Header from "../components/header/header"
import Container from "../components/container/container"
import Instruction from "../components/instruction/instruction"

import "../global_styles.scss"

const IndexPage = () => (
    <Container>
      <SEO />
      <Header siteTitle="Odbierz 155 PLN na swój pierwszy pobyt z Airbnb!" />
      <Instruction id={"i1"} prevItem={"header"} nextItem={"i2"}><h1>Instrukcja1</h1></Instruction>
      <Instruction id={"i2"} prevItem={"i1"} nextItem={"i3"}><h1>Instrukcja2</h1></Instruction>
      <Instruction id={"i3"} prevItem={"i2"} nextItem={"i3"}><h1>Instrukcja3</h1></Instruction>
    </Container>
)

export default IndexPage
