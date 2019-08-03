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
      <Instruction/>
    </Container>
)

export default IndexPage
