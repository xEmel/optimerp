import React from "react"
import { Card, CardProps } from "../Card/Card"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { SectionTitle } from "./SectionTitle"
import { Section } from "./styles"

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

  type Steps = {
    id: number
    imageURL: IGatsbyImageData
    avatarBackground: CardProps["avatarBackground"]
    children: string
  }

  const steps: Steps[] = [
    {
      id: 1,
      imageURL: data.alt.childImageSharp.gatsbyImageData,
      avatarBackground: "#282c34",
      children: "Pobierz i zainstaluj platformę ALT:V",
    },
    {
      id: 2,
      avatarBackground: "#282c34",
      imageURL: data.optime.childImageSharp.gatsbyImageData,
      children:
        "Zarejestruj się na forum, potwierdź rejestrację na skrzynce mailowej załóż postać",
    },
    {
      id: 3,
      avatarBackground: "#7289DA",
      imageURL: data.discord.childImageSharp.gatsbyImageData,
      children:
        " Dołącz do naszej społeczności Discord i uzyskaj dostęp do serwera!",
    },
  ]
  return (
    <Section>
      <SectionTitle>Pierwsze kroki</SectionTitle>
      <FirstStepsContainer>
        {steps
          .sort((a, b) => a.id - b.id)
          .map(step => {
            const avatar = (
              <GatsbyImage
                alt={""}
                image={step.imageURL}
                style={{ width: "70%" }}
              />
            )
            return (
              <Card
                avatar={avatar}
                title={`Krok ${step.id}`}
                key={step.id}
                avatarBackground={step.avatarBackground}
              >
                {step.children}
              </Card>
            )
          })}
      </FirstStepsContainer>
    </Section>
  )
}
