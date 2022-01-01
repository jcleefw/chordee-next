import React, { FC } from 'react'
import { TuningShape } from 'types/tuning'
import { notesOnStringArray } from 'utils/fretboard'
import styled from 'styled-components'
import { reverse } from 'lodash'
import { fretboardHeight } from 'types/enums'
import Fret from '../Fret'
import FretRow from '../FretRow'
import { AnyObject } from 'types/generic'
import { useAppContext } from 'src/context/state'

interface Props {
  showOctave?: boolean
  boardHeight: fretboardHeight
  noOfStrings: number
}

const FretsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const generatFretNotes = (
  notesArray: TuningShape[],
  width: number,
  stringIndex: number,
  showOctave: boolean
) => {
  return notesArray.map((note, index) => (
    <Fret
      width={width}
      note={note}
      key={`note-${stringIndex}-${index}`}
      showOctave={showOctave}
      index={index}
    />
  ))
}

const generateFretRow = (
  tuning: TuningShape[],
  boardHeight: number,
  showOctave: boolean,
  noOfStrings: number,
  tonalKey?: AnyObject
) => {
  return tuning.map((_, stringIndex) => {
    const notesArray = notesOnStringArray({
      rootNote: tuning[stringIndex],
      noFrets: 15,
      tonalKey: tonalKey,
    })
    const width = 100 / tuning.length
    const fretNotes = generatFretNotes(
      notesArray,
      width,
      stringIndex,
      showOctave
    )
    return (
      <FretRow
        boardHeight={boardHeight}
        noOfStrings={noOfStrings}
        key={`row-${stringIndex}`}
      >
        {fretNotes}
      </FretRow>
    )
  })
}

const BoardPosition: FC<Props> = ({
  showOctave = false,
  boardHeight,
  noOfStrings,
}) => {
  const { store } = useAppContext()
  const reverseTuning = reverse(store.tuning.tunings)
  const stringNotesByRow = generateFretRow(
    reverseTuning,
    boardHeight,
    showOctave,
    noOfStrings,
    store.tuningKey
  )

  return (
    <foreignObject width="100%" height="100%">
      <FretsWrapper>{stringNotesByRow}</FretsWrapper>
    </foreignObject>
  )
}

export default BoardPosition
