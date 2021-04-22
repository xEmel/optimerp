import React from "react"
import { Card, CardProps } from "../Card/Card"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { SectionTitle } from "./SectionTitle"

const FirstStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`

export const FirstStepsSection: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        alt: file(relativePath: { eq: "alt.png" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
        discord: file(relativePath: { eq: "Discord.png" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
        optime: file(relativePath: { eq: "logo_mini.png" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  )

  const steps: (CardProps & { children: string })[] = [
    {
      title: "Krok 1",
      imageBackground: "#282c34",
      imageURL: data.alt.childImageSharp.gatsbyImageData,
      children: "Pobierz i zainstaluj platformę ALT:V",
    },
    {
      title: "Krok 2",
      imageBackground: "#282c34",
      imageURL: data.optime.childImageSharp.gatsbyImageData,
      children:
        "Zarejestruj się na forum, potwierdź rejestrację na skrzynce mailowej załóż postać",
    },
    {
      title: "Krok 3",
      imageBackground: "#7289DA",
      imageURL: data.discord.childImageSharp.gatsbyImageData,
      children:
        " Dołącz do naszej społeczności Discord i uzyskaj dostęp do serwera!",
    },
  ]

  return (
    <section>
      <SectionTitle>Pierwsze kroki</SectionTitle>
      <FirstStepsContainer>
        {steps.map(step => {
          return <Card {...step} key={step.title} />
        })}
      </FirstStepsContainer>
    </section>
  )
}
