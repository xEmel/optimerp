import styled from "styled-components"

type StyledSpanProps = {
  bold?: boolean
  color?: string
  primary?: boolean
  secondary?: boolean
}

export const StyledSpan = styled.span<StyledSpanProps>`
  font-weight: ${({ bold }) => bold && "700"};
  color: ${({ color, primary, secondary, theme }) =>
    (primary && theme.colors.primary) ||
    (secondary && theme.colors.secondary) ||
    color};
`

export const Flex = styled.div`
  display: flex;
  padding: 0 20px;
`

export const MockupImage = styled.div`
  width: 100%;
  display: flex;
  justify-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`
