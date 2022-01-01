import React, { FC, useContext } from 'react'
import ViewPort from './ViewPort'
import StringTuningWrapper from './StringTuningWrapper'
import NutGraphicStrings from './NutGraphicString'
import SvgWrapper from './SvgWrapper'
import Board from './Board'

interface Props {
  noOfStrings: number
  noOfFrets: number
  boardHeight: number
  showOctave: boolean
}

const FretBoard: FC<Props> = ({
  boardHeight,
  noOfStrings,
  noOfFrets,
  showOctave,
}) => {
  return (
    <div className="board" style={{ height: `${boardHeight}px` }}>
      <SvgWrapper>
        <ViewPort width={3} offset={0}>
          <StringTuningWrapper boardHeight={boardHeight} />
        </ViewPort>
        <ViewPort width={0.75} offset={3}>
          <NutGraphicStrings nrOfStrings={noOfStrings} />
        </ViewPort>
        <ViewPort width={95} offset={3.75}>
          <Board
            {...{
              boardHeight,
              noOfStrings,
              noOfFrets,
              showOctave,
            }}
          />
        </ViewPort>
      </SvgWrapper>
    </div>
  )
}

export default FretBoard
