import React from "react"
import { SectionTitle } from "./SectionTitle"
import { DescriptionText } from "./styles"
import { FormattedSpan } from "../styles/HelperStyles"
export const AboutProject: React.FC = () => (
  <section>
    <SectionTitle>Poznaj nas</SectionTitle>
    <DescriptionText>
      <FormattedSpan bold primary>
        Cześć!
      </FormattedSpan>
      Jesteśmy projektem Roleplay tworzonym z pasji, w najnowszej odsłonie
      kultowego dzieła Rockstar jakim jest Grand Theft Auto V. Naszym celem jest
      stworzenie miejsca, w którym przyjemnie spędzisz swój wolny czas.
    </DescriptionText>
  </section>
)
