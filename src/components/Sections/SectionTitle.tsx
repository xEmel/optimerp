import React from "react"
import styled from "styled-components"

type TitleProps = {
  color?: string
}

const Title = styled.h2<TitleProps>`
  font-size: 3.8rem;
  text-align: center;
  position: relative;
  color: white;
  font-weight: 700;
  padding: 20px 15px;

  &::before {
    content: "";
    width: 120px;
    height: 3px;
    bottom: -10px;
    position: absolute;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      ${({ theme }) => theme.colors.primary} 50%,
      rgba(255, 255, 255, 0) 100%
    );
    left: 50%;
    transform: translateX(-50%);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 10px;
`

type DividerProps = {
  color?: string
}

const Divider = styled.div<DividerProps>`
  width: 15%;
  min-width: 80px;
  max-width: 35%;
  height: 8px;
  border-radius: 8px;
  margin: 0 auto 20px auto;
  background: ${({ theme, color }) => color || theme.colors.secondary};
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: ${({ theme, color }) => color || theme.colors.secondary};
  }
  &::after {
    right: -15px;
  }
  &::before {
    left: -15px;
  }
`

type SectionTitleProps = {
  dividerColor?: string
  color?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  dividerColor,
  color,
}) => (
  <Wrapper>
    <Title {...{ color }}>{children}</Title>
  </Wrapper>
)
