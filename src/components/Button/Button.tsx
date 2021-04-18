import styled from "styled-components"

export const Button = styled.button`
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
  min-width: 150px;
  padding: 10px 40px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px #222222;
  }
`
