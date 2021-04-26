import React from "react"
import { DescriptionText, Section } from "./styles"
import { SectionTitle } from "./SectionTitle"
import { graphql, useStaticQuery } from "gatsby"
import { FeatureImageContainer } from "../FeatureImage/styles"
import { FeatureImage } from "../FeatureImage/FeatureImage"

export const PartTimeJobsSection: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        stealer: file(relativePath: { eq: "stealerJob.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        newspaper: file(relativePath: { eq: "newspaperJob.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        handler: file(relativePath: { eq: "handlerJob.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return (
    <Section>
      <SectionTitle>Prace dorywcze</SectionTitle>
      <DescriptionText>
        Nieodłącznym elementem na serwerze jest gotówka, a wraz z nią praca.
        Poza stałymi formami zatrudnienia u nas masz możliwość podjęcia się
        trzech o zróżnicowanym charakterze prac dorywczych. Liczymy, że każdy
        znajdzie dla siebie coś dobrego.
      </DescriptionText>
      <FeatureImageContainer>
        <FeatureImage
          imageData={data.newspaper.childImageSharp.fluid}
          title={"Gazeciarz"}
        >
          Typowa praca dorywcza nastolatków w Ameryce. Polega na dostarczaniu
          gazet, oraz ulotek do skrzynek lokalnych mieszkańców.
        </FeatureImage>
        <FeatureImage
          imageData={data.handler.childImageSharp.fluid}
          title={"Doker"}
        >
          Zostań operatorem specjalnego pojazdu i przenoś kontenery w dokach.
          Wystarczy, że posiadasz prawo jazdy.
        </FeatureImage>
        <FeatureImage
          imageData={data.stealer.childImageSharp.fluid}
          title={"Złodziej"}
        >
          Rozkradaj opuszczone pojazdy i sprzedawaj swoje łupy na złomowisku.
          Ryzykowna, ale dochodowa praca po godzinach.
        </FeatureImage>
      </FeatureImageContainer>
    </Section>
  )
}
