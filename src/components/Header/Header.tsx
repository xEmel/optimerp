import React, { useEffect, useRef, useState } from "react"
import { HeaderWrapper } from "./styles"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../layout"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Button } from "../Button/Button"
import { Nav } from "./Nav/Nav"
import { StyledSpan } from "../styles/HelperStyles"

const HeaderSection = styled(BackgroundImage)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
  mask-image: linear-gradient(to top, transparent 3%, black 25%);
`

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 3rem;
`

const TitleContainer = styled.div`
  margin: 30vh auto 0 auto;
  text-align: center;
  justify-content: space-between;
  width: 80%;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightDark};
  font-size: 1.4rem;
  margin-top: 20px;
  font-weight: 700;
`

const StyledButton = styled(Button)`
  margin: 170px auto 0 auto;
`
type HeaderProps = {
  startRef: React.RefObject<HTMLElement>
}

const scrollToFirstSection = (offsetTop: number) => {
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  })
}

export const Header: React.FC<HeaderProps> = ({ startRef }) => {
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
      }
    `
  )

  const imageData = data.bg.childImageSharp.fluid
  return (
    <HeaderSection fluid={imageData} Tag="header">
      <TitleContainer>
        <Title>
          Dołącz do wirtualnego świata{" "}
          <StyledSpan primary bold>
            OPTIME
          </StyledSpan>
        </Title>
        <Description>Tworzymy dla Ciebie miejsce rozgrywki.</Description>
      </TitleContainer>
      <StyledButton
        onClick={() => scrollToFirstSection(startRef.current?.offsetTop || 0)}
      >
        Rozpocznij
      </StyledButton>
    </HeaderSection>
  )
}
