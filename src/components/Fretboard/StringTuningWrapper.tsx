import styled from 'styled-components'
import React, { FC } from 'react'
import { TuningShape } from 'types/tuning'
import { reverse } from 'lodash'
import { stringifyNote } from 'utils/fretboard'
import { useAppContext } from 'src/context/state'
import useWindowDimensions from 'utils/pageload'

const TuningDivWrapper = styled.div`
  margin-top: 4px;
`
const TuningNotes = styled.div`
  font-size: 0.9rem;
  color: green;
  font-family: 'Patrick Hand SC';
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const tuningNotes = (tuning: TuningShape[], showOctave: boolean) => {
  const stringArray = tuning.map((row) =>
    stringifyNote(row, showOctave).toUpperCase()
  )
  return reverse(stringArray)
}

const StringTuningWrapper: FC = () => {
  const { store } = useAppContext()
  const tuning = store.tuning.tunings
  const y = store.boardHeight / tuning.length
  const { width: screenWidth } = useWindowDimensions()
  const showOctave = screenWidth > 768

  return (
    <foreignObject width="100%" height="100%">
      <TuningDivWrapper>
        {tuningNotes(tuning, showOctave).map((notes: string, index: number) => {
          return (
            <TuningNotes style={{ height: y }} key={index}>
              {notes.toUpperCase()}
            </TuningNotes>
          )
        })}
      </TuningDivWrapper>
    </foreignObject>
  )
}

export default StringTuningWrapper
