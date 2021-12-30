import React, { ReactElement } from 'react'
import { TuningShape } from 'types/tuning'
import BoardPosition from './BoardPosition'
import BoardGraphicStrings from './BoardString'
import { TonalKey } from 'types/tonal'

interface Props {
  noOfStrings: number
  noOfFrets: number
  boardHeight: number
  tuning: TuningShape[]
  showOctave: boolean
  tonalKey?: TonalKey
}

export default ({
  noOfStrings,
  noOfFrets,
  boardHeight,
  tuning,
  showOctave,
  tonalKey,
}: Props): ReactElement => {
  return (
    <>
      <BoardGraphicStrings nrOfStrings={noOfStrings} nrOfFrets={noOfFrets} />
      <BoardPosition
        {...{ boardHeight, noOfStrings, tuning, showOctave, tonalKey }}
      />
    </>
  )
}
