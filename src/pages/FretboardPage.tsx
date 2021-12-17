import React from 'react'
import type { NextPage } from 'next'
import { PageContainer } from 'components/atoms/Container'
import BoardGraphicStrings from 'components/Fretboard/BoardString'
import { Scale } from '@tonaljs/tonal'

const FretboardPage: NextPage = () => {
  return (
    <PageContainer>
      <div>{Scale.get('D major').notes}</div>
      <BoardGraphicStrings nrOfStrings={6} nrOfFrets={15} />
    </PageContainer>
  )
}

export default FretboardPage
