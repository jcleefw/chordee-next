import React, { ReactElement } from 'react'
import { TuningShape } from 'types/tuning'
import BoardPosition from './BoardPosition'
import BoardGraphicStrings from './BoardString'
import { AnyObject } from 'types/generic'

interface Props {
  noOfStrings: number
  noOfFrets: number
  boardHeight: number
  showOctave: boolean
}

const Board = ({
  noOfStrings,
  noOfFrets,
  boardHeight,
  showOctave,
}: Props): ReactElement => {
  return (
    <>
      <BoardGraphicStrings nrOfStrings={noOfStrings} nrOfFrets={noOfFrets} />
      <BoardPosition {...{ boardHeight, noOfStrings, showOctave }} />
    </>
  )
}

export default Board
