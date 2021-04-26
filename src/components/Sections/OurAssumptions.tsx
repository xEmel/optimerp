import React from "react"
import { SectionTitle } from "./SectionTitle"
import { DescriptionText, Section } from "./styles"
import styled, { DefaultTheme, withTheme } from "styled-components"
import { Card } from "../Card/Card"
import { IoSpeedometerOutline } from "react-icons/io5"
import { IoMdBrush } from "react-icons/io"
import { FaBalanceScale } from "react-icons/fa"
import { CardContainer } from "../Card/styles"

const Wrapper = styled(Section)`
  position: relative;
  background: #2f2f40;
  margin: 220px 0;
  max-width: none;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 140px 100vw;
    border-color: transparent transparent #2f2f40 transparent;
    left: 0;
    top: -140px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 140px 100vw 0 0;
    border-color: #2f2f40 transparent transparent transparent;
    bottom: -140px;
    left: 0;
  }
`

const DifferentSectionContent: React.FC<{
  theme: DefaultTheme
}> = ({ theme }) => {
  return (
    <Wrapper>
      <SectionTitle>Nasze założenia</SectionTitle>
      <CardContainer>
        <Card
          title={"Zbalansowana rozgrywka"}
          avatar={<FaBalanceScale fontSize={"2.45rem"} />}
          avatarBackground={theme.colors.primary}
          boxShadowColor={theme.colors.primary}
        >
          Świetny skrypt nie zastąpi zbalansowanej rozgrywki. Dokładamy
          wszelkich starań, aby każde środowisko w naszej społeczności
          otrzymywało wsparcie na równych zasadach.
        </Card>
        <Card
          title={"Wydajność"}
          avatar={<IoSpeedometerOutline fontSize={"2.45rem"} />}
          avatarBackground={theme.colors.secondary}
          boxShadowColor={theme.colors.secondary}
        >
          Przykuwamy dużą uwagę do wydajności naszych systemów. Chcemy tworzyć
          skrypt, który będzie cieszył się dużą przepustowościa i pozwoli na
          płynną rozgrywkę nawet na słabszym sprzęcie.
        </Card>
        <Card
          title={"Dopasowane interfejsy"}
          avatar={<IoMdBrush fontSize={"2.45rem"} />}
          avatarBackground={"#669BBC"}
          boxShadowColor={"#669BBC"}
        >
          Wiemy, jak wpływa na końcowy odbiór użytkownika przyjemna szata
          graficzna. Podążamy za trendami i tworzymy interfejsy zgodne z
          zasadami UI/UX. Kierujemy się tym, co dobre.
        </Card>
      </CardContainer>
    </Wrapper>
  )
}

export const OurAssumptions = withTheme(DifferentSectionContent)
