import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`
