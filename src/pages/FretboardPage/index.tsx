import React from 'react'
import { NextPage } from 'next'
import { Section, PageContainer } from 'components/atoms/Container'
import { fretboardHeight } from 'types/enums'
import Fretboard from 'components/Fretboard/FretBoard'
import styled from 'styled-components'
import { isEmpty } from 'lodash'
import PageHeader from './PageHeader'
import { useAppContext } from 'src/context/state'
import { useHasMounted } from 'utils/pageload'

const NO_OF_FRETS = 15
const showOctave = false

const ScalesDisplay = styled.div`
  margin-bottom: 0.5rem;
  span {
    padding: 0 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`

const FretboardPage: NextPage = () => {
  const { store } = useAppContext()
  const { noOfStrings } = store.tuning
  const boardHeight = noOfStrings * fretboardHeight.large

  const decorateScaleNotes = (tonalKey: any) => {
    if (tonalKey?.convertedScale) {
      return tonalKey.convertedScale.map((item: string) => (
        <span key={item}>{item}</span>
      ))
    }
    return null
  }

  if (!useHasMounted()) {
    return null
  }

  return (
    <PageContainer>
      <Section>
        {isEmpty(store.tuningKey) ? (
          <ScalesDisplay>
            Select tuning and keys to show highlighted notes on fret
          </ScalesDisplay>
        ) : (
          <ScalesDisplay>
            Notes on scale are: {decorateScaleNotes(store.tuningKey)}
          </ScalesDisplay>
        )}
        <PageHeader />
      </Section>
      <Section>
        <Fretboard
          boardHeight={boardHeight}
          noOfStrings={noOfStrings}
          noOfFrets={NO_OF_FRETS}
          showOctave={showOctave}
        />
      </Section>
    </PageContainer>
  )
}

export default FretboardPage
