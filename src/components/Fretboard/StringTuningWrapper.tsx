import React, { FC } from 'react'
import { TuningShape } from 'types/tuning'
import { reverse } from 'lodash'
import styles from './fretboard.module.scss'

interface Props {
  tuning: Array<TuningShape>
}

const tuningNotes = (tuning: TuningShape[]) => {
  const array = tuning.map((row) => `${row.note}${row.octave}`.toUpperCase())
  return reverse(array)
}

const StringTuningWrapper: FC<Props> = ({ tuning }) => {
  return (
    <foreignObject width="100%" height="100%">
      <div className={styles.tuningDiveWrapper}>
        {tuningNotes(tuning).map((notes: string, index: number) => {
          return (
            <div className={styles.tuningNotes} key={index}>
              {notes.toUpperCase()}
            </div>
          )
        })}
      </div>
    </foreignObject>
  )
}

export default StringTuningWrapper
