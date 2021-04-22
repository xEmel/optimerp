import React from "react"
import styled from "styled-components"

const Title = styled.h2`
  font-size: 2.3rem;
  text-align: center;
  position: relative;
  font-weight: 500;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
`

const Divider = styled.div`
  width: 15%;
  min-width: 80px;
  max-width: 35%;
  height: 8px;
  border-radius: 8px;
  margin: 20px auto;
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.secondary};
  }
  &::after {
    right: -15px;
  }
  &::before {
    left: -15px;
  }
`

export const SectionTitle: React.FC = ({ children }) => (
  <Wrapper>
    <Divider />
    <Title>{children}</Title>
  </Wrapper>
)
