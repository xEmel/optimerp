import { Section } from "../Sections/styles"
import React, { CSSProperties } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-right: 20px;
  }
`

const Item = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  max-width: 380px;
  height: 430px;
  border-top: 3px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0 10px #000;
`

const ItemDescription = styled.div`
  text-align: center;
  font-size: 1.3rem;
  min-height: 70px;
  background: rgba(0, 0, 0, 0.45);
  line-height: 1.6rem;
  position: relative;
  padding: 10px 20px;
`

const ItemTitle = styled.div`
  top: -35px;
  position: absolute;
  min-width: 90px;
  height: 35px;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  color: white;
  left: 0;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 35px 0 0 35px;
    border-color: transparent transparent transparent #209b84;
    position: absolute;
    right: -35px;
    bottom: 0;
  }
`
interface IFluidObject {
  aspectRatio: number
  src: string
  srcSet: string
  sizes?: string
  base64?: string
  tracedSVG?: string
  srcWebp?: string
  srcSetWebp?: string
  srcAvif?: string
  srcSetAvif?: string
  media?: string
}

type FeatureImageProps = {
  imageData: IFluidObject
  title: string
}

export const FeatureImage: React.FC<FeatureImageProps> = ({
  imageData,
  title,
  children,
}) => (
  <Container>
    <Item fluid={imageData} Tag="div">
      <ItemDescription>
        <ItemTitle>{title}</ItemTitle>
        {children}
      </ItemDescription>
    </Item>
  </Container>
)
