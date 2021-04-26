import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Button } from "../Button/Button"
import { StyledSpan } from "../styles/HelperStyles"
import { FaArrowUp } from "react-icons/fa"
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

type ScrollButtonProps = {
  show: boolean
}

const ScrollButton = styled.button<ScrollButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(15, 15, 15, 0.75);
  position: fixed;
  right: 5px;
  bottom: 20px;
  z-index: 9999;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  will-change: opacity;
  transition: opacity 0.5s ease-out;
  @media (min-width: 768px) {
    right: 20px;
    font-size: 1.4rem;
    width: 50px;
    height: 50px;
  }
`

type HeaderProps = {
  startRef: React.RefObject<HTMLElement>
}

const scrollToPos = (offsetTop: number) => {
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  })
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ startRef }, ref) => {
    const [showScrollButon, setShowScrollButton] = useState(false)
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

    useEffect(() => {
      const handleScroll = () => {
        window.scrollY > 0
          ? setShowScrollButton(true)
          : setShowScrollButton(false)
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    })

    const imageData = data.bg.childImageSharp.fluid
    return (
      <>
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
            onClick={() => scrollToPos(startRef.current?.offsetTop || 0)}
          >
            Rozpocznij
          </StyledButton>
        </HeaderSection>
        <ScrollButton show={showScrollButon} onClick={() => scrollToPos(0)}>
          <FaArrowUp />
        </ScrollButton>
      </>
    )
  }
)

Header.displayName = "Header"
