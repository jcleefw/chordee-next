import React from 'react'
import type { NextPage } from 'next'
import { PageContainer, Section } from 'components/atoms/Container'
import BoardGraphicStrings from 'components/Fretboard/BoardString'
import { Scale } from '@tonaljs/tonal'
import NutGraphicStrings from 'components/Fretboard/NutGraphicString'
import SvgHeader from 'components/Fretboard/SvgHeader'
import ViewPort from 'components/Fretboard/ViewPort'

const FretboardPage: NextPage = () => {
  return (
    <PageContainer>
      <Section>
        <div>{Scale.get('D major').notes}</div>
      </Section>
      <Section>
        <SvgHeader>
          <ViewPort width={5} offset={0}>
            <NutGraphicStrings nrOfStrings={6} />
          </ViewPort>
          <ViewPort width={89} offset={5.75}>
            <BoardGraphicStrings nrOfStrings={6} nrOfFrets={15} />
          </ViewPort>
        </SvgHeader>
      </Section>
    </PageContainer>
  )
}

export default FretboardPage
