import React from 'react'
import { NextPage } from 'next'
import { Section, PageContainer } from 'components/atoms/Container'
import Fretboard from 'components/Fretboard/FretBoard'
import styled from 'styled-components'
import { isEmpty } from 'lodash'
import PageHeader from './PageHeader'
import { useAppContext } from 'src/context/state'
import { useHasMounted } from 'utils/pageload'
import { TuningKeyProp } from 'store/types'

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

  const decorateScaleNotes = (tonalKey?: TuningKeyProp) => {
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
        <Fretboard boardHeight={store.boardHeight} />
      </Section>
    </PageContainer>
  )
}

export default FretboardPage
