import React, { useState } from 'react'
import { NextPage } from 'next'
import { Section, PageContainer } from 'components/atoms/Container'
import { fretboardHeight } from 'types/enums'
import Fretboard from 'components/Fretboard/FretBoard'
import { alternateTunings } from 'data/alternateTunings'
import { TonalKey } from 'types/tonal'
import styled from 'styled-components'
import { isEmpty } from 'lodash'
import PageHeader from './PageHeader'

const NO_OF_FRETS = 15
const NO_OF_STRINGS = 6

const boardHeight = NO_OF_STRINGS * fretboardHeight.large
const showOctave = false

const ScalesDisplay = styled.div`
  padding: 1rem 0;
  span {
    padding: 0 0.5rem;
  }
`

const FretboardPage: NextPage = () => {
  const [tuning, setTuning] = useState(alternateTunings.standard)
  const [tonalKey, setTonalKey] = useState<TonalKey>({})

  const decorateScaleNotes = () => {
    if (tonalKey?.convertedScale) {
      return tonalKey.convertedScale.map((item: string) => (
        <span key={item}>{item}</span>
      ))
    }
    return null
  }
  return (
    <PageContainer>
      <PageHeader setTuning={setTuning} setKey={setTonalKey} />
      <Section>
        {isEmpty(tonalKey) ? (
          <ScalesDisplay>
            Select tuning and keys to show highlighted notes on fret
          </ScalesDisplay>
        ) : (
          <ScalesDisplay>
            Notes on scale are: {decorateScaleNotes()}
          </ScalesDisplay>
        )}
      </Section>
      <Section>
        <Fretboard
          boardHeight={boardHeight}
          noOfStrings={NO_OF_STRINGS}
          noOfFrets={NO_OF_FRETS}
          tuning={tuning.tunings}
          showOctave={showOctave}
          tonalKey={tonalKey}
        />
      </Section>
    </PageContainer>
  )
}

export default FretboardPage
