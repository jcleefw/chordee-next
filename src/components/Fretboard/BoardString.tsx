import React, { FC } from 'react'
import { times, range } from 'lodash'
import { stringCenter, fretOffset } from 'utils/fretboard'

const stringLine = (nrOfStrings: number) => (str: any) => {
  const y = stringCenter(nrOfStrings)(str)
  return <line key={`str-${str}`} x1="0%" x2="100%" y1={`${y}%`} y2={`${y}%`} />
}

const fretLineBounds = (nrOfStrings: number) => ({
  top: stringCenter(nrOfStrings)(0),
  bottom: stringCenter(nrOfStrings)(nrOfStrings - 1),
})
const fretLine = (nrOfFrets: number, nrOfStrings: number) => (frt: any) => {
  const { top, bottom } = fretLineBounds(nrOfStrings)
  const x = fretOffset(nrOfFrets)(frt)

  return (
    <line
      key={`fret-${frt}`}
      x1={`${x}%`}
      x2={`${x}%`}
      y1={`${top}%`}
      y2={`${bottom}%`}
    />
  )
}

interface Props {
  nrOfStrings: number
  nrOfFrets: number
}
const BoardGraphicStrings: FC<Props> = ({ nrOfStrings, nrOfFrets }) => (
  <g>
    {times(nrOfStrings, stringLine(nrOfStrings))}
    {range(1, nrOfFrets).map(fretLine(nrOfFrets, nrOfStrings))}
  </g>
)

export default BoardGraphicStrings
