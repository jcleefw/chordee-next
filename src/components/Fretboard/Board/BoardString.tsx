import React, { FC } from 'react'
import { times, range } from 'lodash'
import { stringCenter } from 'utils/fretboard'
import cx from 'classnames'

const stringLine = (nrOfStrings: number) => (stringIndex: number) => {
  const y = stringCenter(nrOfStrings)(stringIndex)
  return (
    <line
      className={`str str-${stringIndex}`}
      key={`str-${stringIndex}`}
      x1="0%"
      x2="100%"
      y1={`${y}%`}
      y2={`${y}%`}
    />
  )
}

const fretLineBounds = (nrOfStrings: number) => ({
  top: stringCenter(nrOfStrings)(0),
  bottom: stringCenter(nrOfStrings)(nrOfStrings - 1),
})

const fretLine =
  (nrOfFrets: number, nrOfStrings: number) => (frtIndex: number) => {
    const { top, bottom } = fretLineBounds(nrOfStrings)
    const x = (100 / nrOfFrets) * frtIndex

    return (
      <line
        className={cx(`fret fret-${frtIndex}`)}
        key={`fret-${frtIndex}`}
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

const BoardString: FC<Props> = ({ nrOfStrings, nrOfFrets }) => (
  <g>
    {times(nrOfStrings, stringLine(nrOfStrings))}
    {range(1, nrOfFrets).map(fretLine(nrOfFrets, nrOfStrings))}
  </g>
)

export default BoardString
