import styled from 'styled-components'
import React, { FC } from 'react'
import { TuningShape } from 'types/tuning'
import { reverse } from 'lodash'
import { stringifyNote } from 'utils/fretboard'

const TuningDivWrapper = styled.div`
  margin-top: 4px;
`
const TuningNotes = styled.div`
  font-size: 0.9rem;
  color: green;
  font-family: 'Patrick Hand SC';
  font-weight: bold;
`
interface Props {
  tuning: Array<TuningShape>
  boardHeight: number
}

const tuningNotes = (tuning: TuningShape[]) => {
  const stringArray = tuning.map((row) =>
    stringifyNote(row, true).toUpperCase()
  )
  return reverse(stringArray)
}

const StringTuningWrapper: FC<Props> = ({ tuning, boardHeight }) => {
  const y = boardHeight / tuning.length
  return (
    <foreignObject width="100%" height="100%">
      <TuningDivWrapper>
        {tuningNotes(tuning).map((notes: string, index: number) => {
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
