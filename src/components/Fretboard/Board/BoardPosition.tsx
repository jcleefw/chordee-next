import React, { FC } from 'react'
import { TuningShape } from 'types/tuning'
import { notesOnStringArray } from 'utils/fretboard'
import styled from 'styled-components'
import Fret from '../Fret'
import FretRow from '../FretRow'
import { useAppContext } from 'src/context/state'
import { ReducerStateProps } from 'store/types'

const FretsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const generatFretNotes = (
  notesArray: TuningShape[],
  width: number,
  stringIndex: number,
  showOctave?: boolean
) => {
  return notesArray.map((note, index) => (
    <Fret
      width={width}
      note={note}
      key={`note-${stringIndex}-${index}`}
      showOctave={showOctave ?? false}
      index={index}
    />
  ))
}

const generateFretRow = (tuning: TuningShape[], store: ReducerStateProps) => {
  return tuning.map((_, stringIndex) => {
    const notesArray = notesOnStringArray({
      rootNote: tuning[stringIndex],
      noFrets: 15,
      tonalKey: store.tuningKey,
      selectedTriadNotes: store.selectedTriadNotes,
    })
    const width = 100 / tuning.length
    const fretNotes = generatFretNotes(
      notesArray,
      width,
      stringIndex,
      store.showOctave
    )
    return <FretRow key={`row-${stringIndex}`}>{fretNotes}</FretRow>
  })
}

const BoardPosition: FC = () => {
  const { store } = useAppContext()
  const reverseTuning = store.tuning.tunings.slice().reverse()

  const stringNotesByRow = generateFretRow(reverseTuning, store)

  return (
    <foreignObject width="100%" height="100%">
      <FretsWrapper>{stringNotesByRow}</FretsWrapper>
    </foreignObject>
  )
}

export default BoardPosition
