import React, { useState } from "react"
import { HeaderWrapper } from "./styles"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../layout"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Button } from "../Button/Button"
import { Nav } from "./Nav/Nav"

const HeaderSection = styled(BackgroundImage)`
  height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.7rem;
`

const TitleContainer = styled.div`
  margin: 80px auto 0 auto;
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
  margin: 100px auto 0 auto;
`

export const Header: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bg: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1920) {
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
      <Nav />
      <TitleContainer>
        <Title>Dołącz</Title>
        <TitleSmall>Do wirtualnego świata</TitleSmall>
        <TitleSmall>ROLEPLAY</TitleSmall>
      </TitleContainer>
      <StyledButton>Rozpocznij</StyledButton>
      <img
        src={data.overlay.publicURL}
        style={{
          position: "absolute",
          bottom: "-2px",
          width: "100vw",
          left: 0,
        }}
        alt=""
      />
    </HeaderSection>
  )
}
