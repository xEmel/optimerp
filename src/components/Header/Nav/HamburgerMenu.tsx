import React from "react"
import styled from "styled-components"
const HamburgerBtn = styled.button`
  z-index: 9999;
  width: 45px;
  height: 35px;
  border-radius: 5px;
  background: transparent;
  border: 2px solid rgba(0, 0, 0, 0.35);
  cursor: pointer;
  position: relative;
  @media only screen and (min-width: 769px) {
    display: none;
  }
  &::after,
  &::before {
    content: "";
    width: 70%;
    height: 3px;
    background: white;
    position: absolute;
    border-radius: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  &::before {
    top: 5px;
    box-shadow: 0px 9px white;
  }
  &::after {
    bottom: 5px;
  }
`

type props = {
  onClick: () => void
}

export const HamburgerMenu: React.FC<props> = ({ onClick }) => (
  <HamburgerBtn onClick={() => onClick()} />
)
