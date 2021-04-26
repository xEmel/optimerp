import React from "react"
import { DescriptionText, Section } from "./styles"
import { SectionTitle } from "./SectionTitle"
import { Flex, MockupImage, StyledSpan } from "../styles/HelperStyles"
import coWorking from "../../images/coworking.svg"
import styled from "styled-components"

export const Qualities = () => (
  <Section>
    <Flex>
      <div>
        <SectionTitle>Współpraca</SectionTitle>
        <DescriptionText>
          Wiemy, że najistotniejszą rzeczą jest kontakt ze społecznością.
          Jesteśmy otwarci na wszelkie współprace oraz feedback graczy by
          udoskonalać skrypt i nasze działania. Wierzymy, że razem możemy
          więcej.&nbsp;
          <StyledSpan primary bold>
            To Ty się dla nas liczysz!
          </StyledSpan>
        </DescriptionText>
      </div>
      <MockupImage>
        <img src={coWorking} alt={""} width={"100%"} />
      </MockupImage>
    </Flex>
  </Section>
)
