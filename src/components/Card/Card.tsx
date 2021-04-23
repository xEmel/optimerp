import React, { ReactNode } from "react"
import styled from "styled-components"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

export type CardProps = {
  title: string
  avatar: ReactNode
  avatarBackground?: string
  flat?: boolean
}

type WrapperProps = {
  flat?: boolean
}

const CardWrapper = styled.div<WrapperProps>`
  width: 300px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  align-items: center;
  padding: 15px 20px;
  margin: 10px auto;
  box-shadow: ${({ flat, theme }) =>
    !flat && `0 0 0.75rem ${theme.colors.secondary}`};
  border-radius: 10px;
`

const CardTitle = styled.h2`
  margin: 15px;
  font-size: 1.8rem;
  font-weight: 500;
`

const CardDescription = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.5rem;
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
}) => {
  return (
    <CardWrapper flat={flat}>
      <CardImage imageBackground={avatarBackground}>{avatar}</CardImage>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{children}</CardDescription>
    </CardWrapper>
  )
}
