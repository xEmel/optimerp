import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { HamburgerMenu } from "./HamburgerMenu"
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Refs } from "../../../pages"

const Navbar = styled.nav`
  padding: 15px 20px 0 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const ImgWrapper = styled.a`
  width: 40px;
`
const NavItemAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }  
  to {
    transform: translateX(0%);
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

const NavItem = styled.button`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  color: white;
  display: block;
  font-weight: 500;
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: transparent;
  border: none;
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
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary}
`

type Tab = {
  name: string
  ref: React.RefObject<HTMLElement>
}

type NavProps = {
  refs: Refs
}

const scrollToTab = (offsetTop: number) => {
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  })
}

export const Nav: React.FC<NavProps> = ({ refs }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const Tabs: Tab[] = [
    {
      name: "Home",
      ref: refs.headerRef,
    },
    {
      name: "Poznaj nas",
      ref: refs.aboutRef,
    },
    {
      name: "Prace dorywcze",
      ref: refs.partTimeRef,
    },
    {
      name: "FAQ",
      ref: refs.faqRef,
    },
  ]

  const handleTabClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToTab(ref.current?.offsetTop || 0)
    if (isMenuOpen) setMenuOpen(false)
  }

  return (
    <Navbar>
      <ImgWrapper href={"/"}>
        <StaticImage
          src="../../../images/logo_mini.png"
          alt="OP"
          layout={"constrained"}
          placeholder={"blurred"}
        />
      </ImgWrapper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavContainer open={isMenuOpen}>
          {Tabs.map(tab => (
            <li key={tab.name}>
              <NavItem onClick={() => handleTabClick(tab.ref)}>
                {tab.name}
              </NavItem>
            </li>
          ))}
        </NavContainer>
        <HamburgerMenu onClick={() => setMenuOpen(prevState => !prevState)} />
      </div>
    </Navbar>
  )
}
