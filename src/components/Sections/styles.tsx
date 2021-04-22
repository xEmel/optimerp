import styled from "styled-components"

type DescriptionTextProps = {
  bold?: boolean
  primary?: boolean
}

export const DescriptionText = styled.p<DescriptionTextProps>`
  margin: 50px auto 20px auto;
  line-height: 1.7rem;
  text-align: justify;
  width: 75%;
  font-size: 1.4rem;
  font-weight: ${props => (props.bold ? 700 : 500)};
  color: ${props => (props.primary ? props.theme.colors.primary : "white")};
`
