import React, { ReactElement } from 'react'
import { TuningShape } from 'types/tuning'
import { stringifyNote } from 'utils/fretboard'
import styled from 'styled-components'
import cx from 'classnames'

interface Props {
  width: number
  note: TuningShape
  showOctave: boolean
  index: number
}

type FretProp = {
  highlight: any
}

const Fret = styled.div<FretProp>`
  position: relative;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  background: inherit;

  &.--highlight {
    span {
      border-radius: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      padding-top: 8px;
    }
  }
`
const FretBackground = styled.span`
  background: white;
  padding: 5px;
  z-index: 6;
`
const fretMarking = [3, 5, 7, 9, 12, 15, 17]

export default ({ width, note, showOctave, index }: Props): ReactElement => {
  const fretString = stringifyNote(note, showOctave)

  return (
    <Fret
      className={cx('fret-note', {
        '--highlight': note.highlight,
        '--root': note.highlight === 'root',
        '--scale': note.highlight === 'scale',
        '--fret-mark': fretMarking.includes(index + 1),
      })}
      style={{ width: `${width}%` }}
      data-note={stringifyNote(note)}
      highlight={note.highlight}
    >
      <FretBackground>{fretString.toUpperCase()}</FretBackground>
    </Fret>
  )
}
