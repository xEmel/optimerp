import React from "react"
import { SectionTitle } from "./SectionTitle"
import { DescriptionText, Section } from "./styles"
import { Flex, MockupImage, StyledSpan } from "../styles/HelperStyles"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FeatureImage } from "../FeatureImage/FeatureImage"
import { FeatureImageContainer } from "../FeatureImage/styles"
import { GatsbyImage } from "gatsby-plugin-image"

const SubText = styled.div`
  margin-top: 25px;
  font-size: 1.6rem;
`
const StyledMockupImage = styled(MockupImage)`
  padding: 0 30px;
  margin-right: 70px;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const AboutProject = React.forwardRef<HTMLElement>((props, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        cityhall: file(relativePath: { eq: "cityhall.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        davis: file(relativePath: { eq: "davis.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mirrorpark: file(relativePath: { eq: "mirrorpark.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        character: file(relativePath: { eq: "aboutUsCharacters.png" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  )

  return (
    <Section ref={ref}>
      <Flex>
        <StyledMockupImage>
          <GatsbyImage
            alt={""}
            image={data.character.childImageSharp.gatsbyImageData}
          />
        </StyledMockupImage>
        <div>
          <SectionTitle>Poznaj nas</SectionTitle>
          <DescriptionText>
            <StyledSpan bold primary>
              Cześć!&nbsp;
            </StyledSpan>
            Jesteśmy projektem tworzonym z pasji, w najnowszej odsłonie
            kultowego dzieła Rockstar jakim jest Grand Theft Auto V. Naszym
            celem jest stworzenie miejsca, w którym przyjemnie spędzisz swój
            wolny czas.
            <SubText>
              <StyledSpan primary bold>
                Sprawdź&nbsp;
              </StyledSpan>
              co dla Ciebie przygotowaliśmy!
            </SubText>
          </DescriptionText>
        </div>
      </Flex>
      <FeatureImageContainer>
        <FeatureImage
          imageData={data.mirrorpark.childImageSharp.fluid}
          title={"Mirror Park"}
        >
          Jako centralne miejsce rozgrywki wybraliśmy Mirror Park i okolice.
          Znajdzie się miejsce dla każdego!
        </FeatureImage>
        <FeatureImage
          imageData={data.cityhall.childImageSharp.fluid}
          title={"Urząd miasta"}
        >
          To właśnie tutaj załatwisz wszystkie niezbędne dokumenty. Nieopodal
          centrum, ceglany budynek. Zapamiętaj!
        </FeatureImage>
        <FeatureImage
          imageData={data.davis.childImageSharp.fluid}
          title={"Davis"}
        >
          Zakątek dla organizacji przestępczych. Davis to idealne otoczenie na
          gangsterkie porachunki.
        </FeatureImage>
      </FeatureImageContainer>
    </Section>
  )
})
AboutProject.displayName = "AboutProject"
