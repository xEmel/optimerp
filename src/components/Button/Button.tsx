import styled from "styled-components"

export const Button = styled.button`
  z-index: 99;
  border: none;
  color: white;
  border-radius: ${props => props.theme.borderRadius};
  font-weight: bold;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  font-size: 1.4rem;
  height: 50px;
  width: 190px;
  text-transform: uppercase;
  cursor: pointer;
`
