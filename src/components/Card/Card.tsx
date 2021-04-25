import React, { ReactNode } from "react"
import styled, { CSSProperties } from "styled-components"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

export type CardProps = {
  title: string
  avatar: ReactNode
  avatarBackground?: string
  flat?: boolean
  boxShadowColor?: string
}

type WrapperProps = {
  flat?: boolean
  boxShadowColor?: string
}

const CardWrapper = styled.div<WrapperProps>`
  width: 300px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  align-items: center;
  padding: 15px 20px;
  margin: 10px;
  box-shadow: ${({ flat, theme, boxShadowColor }) =>
    !flat && `0 0 0.75rem ${boxShadowColor || theme.colors.secondary}`};
  border-radius: 10px;
`

const CardTitle = styled.h2`
  margin: 15px;
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
`

const CardDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  line-height: 2rem;
`

const CardImage = styled.div`
  padding: 5px;
  height: 60px;
  width: 60px;
  background: ${(props: { imageBackground?: string }) =>
    props.imageBackground || "transparent"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const Card: React.FC<CardProps> = ({
  title,
  children,
  avatar,
  avatarBackground,
  flat,
  boxShadowColor,
}) => {
  return (
    <CardWrapper {...{ flat }} {...{ boxShadowColor }}>
      <CardImage imageBackground={avatarBackground}>{avatar}</CardImage>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{children}</CardDescription>
    </CardWrapper>
  )
}
