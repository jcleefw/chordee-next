import React, { FC } from 'react'
import ViewPort from './ViewPort'
import StringTuningWrapper from './StringTuningWrapper'
import NutGraphicStrings from './NutGraphicString'
import SvgWrapper from './SvgWrapper'
import Board from './Board'

interface Props {
  boardHeight: number
}

const FretBoard: FC<Props> = ({ boardHeight }) => {
  return (
    <div className="board" style={{ height: `${boardHeight}px` }}>
      <SvgWrapper>
        <ViewPort width={3} offset={0}>
          <StringTuningWrapper />
        </ViewPort>
        <ViewPort width={0.75} offset={3}>
          <NutGraphicStrings />
        </ViewPort>
        <ViewPort width={95} offset={3.75}>
          <Board />
        </ViewPort>
      </SvgWrapper>
    </div>
  )
}

export default FretBoard
