import React, { useEffect, useRef, useState } from "react"
import { HeaderWrapper } from "./styles"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../layout"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Button } from "../Button/Button"
import { Nav } from "./Nav/Nav"

const HeaderSection = styled(BackgroundImage)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
  mask-image: linear-gradient(to top, transparent 0%, black 15%);
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 4rem;
`

const TitleContainer = styled.div`
  margin: 30vh auto 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  height: 130px;
`

const TitleSmall = styled.h2`
  font-weight: bold;
  font-size: 2rem;
`

const StyledButton = styled(Button)`
  margin: 170px auto 0 auto;
`

export const Header: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bg: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        overlay: file(relativePath: { eq: "wave.svg" }) {
          publicURL
        }
      }
    `
  )

  const imageData = data.bg.childImageSharp.fluid
  return (
    <HeaderSection fluid={imageData} Tag="header">
      <TitleContainer>
        <Title>Dołącz</Title>
        <TitleSmall>do wirtualnego świata</TitleSmall>
        <TitleSmall>ROLEPLAY</TitleSmall>
      </TitleContainer>
      <StyledButton>Rozpocznij</StyledButton>
    </HeaderSection>
  )
}