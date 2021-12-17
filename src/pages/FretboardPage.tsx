import React from 'react'
import type { NextPage } from 'next'
import { PageContainer, Section } from 'components/atoms/Container'
import BoardGraphicStrings from 'components/Fretboard/BoardString'
import { Scale } from '@tonaljs/tonal'
import cx from 'classnames'

const FretboardPage: NextPage = () => {
  return (
    <PageContainer>
      <Section>
        <div>{Scale.get('D major').notes}</div>
        <BoardGraphicStrings nrOfStrings={6} nrOfFrets={15} />
      </Section>
    </PageContainer>
  )
}

export default FretboardPage
