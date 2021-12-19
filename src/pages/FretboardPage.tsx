import React from 'react'
import type { NextPage } from 'next'
import { PageContainer, Section } from 'components/atoms/Container'
import BoardGraphicStrings from 'components/Fretboard/BoardString'
import Board from 'components/Fretboard/Board'
import BoardPosition from 'components/Fretboard/Board/BoardPosition'
import { Scale } from '@tonaljs/tonal'
import NutGraphicStrings from 'components/Fretboard/NutGraphicString'
import SvgHeader from 'components/Fretboard/SvgHeader'
import ViewPort from 'components/Fretboard/ViewPort'
import StringTuningWrapper from 'components/Fretboard/StringTuningWrapper'
import { TuningShape, musicNotes } from 'types/tuning'

const NO_OF_FRETS = 15

const openE: Array<TuningShape> = [
  { note: musicNotes.E, octave: 2 },
  { note: musicNotes.A, octave: 2 },
  { note: musicNotes.D, octave: 3 },
  { note: musicNotes.G, octave: 3 },
  { note: musicNotes.B, octave: 3 },
  { note: musicNotes.E, octave: 4 },
]

const FretboardPage: NextPage = () => {
  return (
    <PageContainer>
      <Section>
        <div>{Scale.get('D major').notes}</div>
      </Section>
      <Section>
        <SvgHeader>
          <ViewPort width={3} offset={0}>
            <StringTuningWrapper tuning={openE} />
          </ViewPort>
          <ViewPort width={0.75} offset={3}>
            <NutGraphicStrings nrOfStrings={6} />
          </ViewPort>
          <ViewPort width={89} offset={3.75}>
            {/* <Board>
              <BoardGraphicStrings nrOfStrings={6} nrOfFrets={NO_OF_FRETS} />
              <BoardPosition tuning={openE} />
            </Board> */}
          </ViewPort>
        </SvgHeader>
      </Section>
    </PageContainer>
  )
}

export default FretboardPage
