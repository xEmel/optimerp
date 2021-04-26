import styled from "styled-components"

type DescriptionTextProps = {
  bold?: boolean
  primary?: boolean
}

export const DescriptionText = styled.p<DescriptionTextProps>`
  margin: 0 auto 100px auto;
  line-height: 2.7rem;
  text-align: center;
  font-size: 1.55rem;
  width: 100%;
  font-weight: ${props => (props.bold ? 700 : 400)};
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.lightDark};
`

export const Section = styled.section`
  margin: 50px auto;
  padding: 10px 20px;
  display: flex;
  max-width: 1300px;
  flex-wrap: wrap;
`
