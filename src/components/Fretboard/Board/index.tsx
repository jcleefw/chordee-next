import React, { ReactElement } from 'react'
import BoardPosition from './BoardPosition'
import BoardGraphicStrings from './BoardString'

const Board = (): ReactElement => {
  return (
    <>
      <BoardGraphicStrings />
      <BoardPosition />
    </>
  )
}

export default Board
