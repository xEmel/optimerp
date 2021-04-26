import React, { useState } from "react"
import { SectionTitle } from "./SectionTitle"
import { DescriptionText, Section } from "./styles"
import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa"
import { Flex } from "../styles/HelperStyles"

const FaqContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const FaqList = styled.ul`
  border-radius: 10px;
  padding: 20px 0;
`

const FaqListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px 30px;
  position: relative;
  border-bottom: 2px solid rgba(15, 15, 15, 0.75);
`

const FaqMoreBtn = styled.button`
  background: transparent;
  width: 40px;
  height: 100%;
  padding: 10px;
  position: relative;
  border: none;
  color: white;
  margin-left: auto;
`

const FaqListHeader = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 20px 30px;
  border-radius: 15px;
  font-weight: bold;
  text-align: center;
  font-size: 1.8rem;
`

const FaqListDescription = styled.div`
  width: 100%;
  font-size: 1.4rem;
  padding: 20px 10px;
  color: ${({ theme }) => theme.colors.lightDark};
`

const FaqListItemTitle = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.65rem;
  font-weight: bold;
  align-items: center;
`

type FaqItem = {
  id: number
  title: string
  description: string
}

const faqItems: FaqItem[] = [
  {
    title: "Dlaczego nie mogę wejść na serwer?",
    description:
      "Aby rozpocząć grę na naszym serwerze musisz dołączyć do naszej społeczności na Discordzie, oraz połączyć konto Discord z forum.",
    id: 0,
  },
  {
    title: "Gdzie mogę utworzyć postać?",
    description:
      "Optime Roleplay przygotowało specjalny panel, za pomocą którego w sposób jasny i klarowny stworzysz swoją postać. Wystarczy, że przejdziesz przez krótki proces tworzenia i Twoja postać będzie gotowa do rozgrywki.",
    id: 1,
  },
  {
    title: "Nie działa mi altV, uruchamia mi się tryb Single Player.",
    description:
      "Zalecamy sprawdzenie poprawności instalacji aplikacji altV. Najlepszym rozwiązaniem będzie odinstalowanie oprogramowania, ewentualne wyczyszczenie folderów pozostałych po aplikacji i ponowna jej instalacja. W przypadku braku działania, skorzystaj z kanału pomocy na discordzie by społeczność i administracja mogła wiedzieć więcej na temat problemu i mieć więcej możliwości by Ci pomóc.",
    id: 2,
  },
  {
    title:
      "Mam problem i nie znam jego rozwiązania - jest w stanie ktoś mi pomóc?",
    description:
      "Administracja jak i społeczność mogła mieć podobny problem. Skorzystaj z serwera discord i napisz w dziale pomocy o swoim problemie. Postaramy się pomóc na tyle ile potrafimy - nie zostawimy Cię z tym samego.",
    id: 3,
  },
  {
    title:
      "Czy posiadane przeze mnie modyfikacje mogą sprawić problemy w rozgrywce?",
    description:
      'Każda modyfikacja działa inaczej i może to wywołać różne komplikacje. Zalecamy rozgrywkę na "czystym" GTA V by zapewnić bezproblemową rozgrywkę. Uczulamy również, że modyfikacje wspomagające i szkodzące rozgrywce będą stosownie karane.',
    id: 4,
  },
  {
    title: "Gdzie mogę dodać sugestię?",
    description:
      "Grono developerskie Optime Roleplay jest zawsze chętne do wczytania się w sugestie graczy. Skorzystaj z działu sugestii by przedstawić je developerom. Dostosuj się do podanego wzoru i podziel się z nami swoimi przekonaniami.",
    id: 5,
  },
]

export const Faq = React.forwardRef<HTMLElement>((props, ref) => {
  const [activeItems, setActiveItems] = useState<FaqItem[]>([])

  const setActiveItem = (item: FaqItem) => {
    setActiveItems(prevState => {
      if (prevState.indexOf(item) != -1)
        return prevState.filter(i => i.id !== item.id)
      else return [...prevState, item]
    })
  }

  return (
    <Section ref={ref}>
      <SectionTitle>FAQ</SectionTitle>
      <DescriptionText>
        Zawsze pojawiają się jakieś pytania, zebraliśmy dla Ciebie zbiór
        najczęściej zadawanych pytań i odpowiedzi.
      </DescriptionText>
      <FaqContainer>
        <FaqListHeader>Najczęściej zadawane pytania</FaqListHeader>
        <FaqList>
          {faqItems.map(i => (
            <FaqListItem key={i.id} onClick={() => setActiveItem(i)}>
              <FaqListItemTitle>
                {i.title}
                <FaqMoreBtn>
                  <FaArrowLeft
                    style={{
                      transform: activeItems.includes(i)
                        ? "rotate(-90deg)"
                        : "rotate(0deg)",
                      transition: "transform .5s ease-out",
                    }}
                  />
                </FaqMoreBtn>
              </FaqListItemTitle>
              {activeItems.includes(i) && (
                <FaqListDescription>{i.description}</FaqListDescription>
              )}
            </FaqListItem>
          ))}
        </FaqList>
      </FaqContainer>
    </Section>
  )
})

Faq.displayName = "Faq"
