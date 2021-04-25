import styled from "styled-components"

export const FeatureImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
