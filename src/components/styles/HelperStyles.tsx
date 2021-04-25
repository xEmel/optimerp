import styled from "styled-components"

type FormattedSpanProps = {
  bold?: boolean
  color?: string
  primary?: boolean
  secondary?: boolean
}

export const StyledSpan = styled.span<FormattedSpanProps>`
  font-weight: ${({ bold }) => bold && "700"};
  color: ${({ color, primary, secondary, theme }) =>
    (primary && theme.colors.primary) ||
    (secondary && theme.colors.secondary) ||
    color};
`
