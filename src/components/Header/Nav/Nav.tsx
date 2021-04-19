import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { HamburgerMenu } from "./HamburgerMenu"
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

const Navbar = styled.nav`
  padding: 15px 20px 0 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  z-index: 9999;
`

const ImgWrapper = styled.a`
  width: 10%;
  max-width: 65px;
  min-width: 35px;
`
const NavItemAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }  
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const NavContainer = styled.ul`
  @media only screen and (max-width: 768px) {
    display: ${(props: { open: boolean }) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    background: #20202b;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    align-items: center;
    padding: 50px 30px 0 30px;
    animation-name: ${NavItemAnimation};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const NavItem = styled.a`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  display: block;
  font-weight: 500;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &::before {
      content: "";
      position: absolute;
      width: 80%;
      height: 3px;
      background: transparent;
      bottom: 0;
      border-radius: 3px;
    }
  }
  &:hover::before {
    content: "";
    background: ${({ theme }) => theme.colors.secondary};
    animation-name: ${NavItemAnimation};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
  }
`

const Tabs = ["Home", "O nas", "Dlaczego my"]

export const Nav: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <Navbar>
      <ImgWrapper href={"/"}>
        <StaticImage
          src="../../images/logo_mini.png"
          alt="OP"
          layout={"constrained"}
          placeholder={"blurred"}
        />
      </ImgWrapper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavContainer open={isMenuOpen}>
          {Tabs.map(t => (
            <li key={t}>
              <NavItem>{t}</NavItem>
            </li>
          ))}
        </NavContainer>
        <HamburgerMenu onClick={() => setMenuOpen(prevState => !prevState)} />
      </div>
    </Navbar>
  )
}
