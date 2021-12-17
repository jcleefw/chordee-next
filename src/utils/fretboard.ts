import { sum, times } from 'lodash'
import { TuningShape, notesArray, HighlightStatus } from '../types/tuning'
import { TonalKey } from '../types/tonal'

export const fretWidth = (nrFrets: number) => (pos: number) =>
  ((2 ** (1 / nrFrets) - 1) / 2 ** ((pos + 1) / nrFrets)) * 100 * 2

export const fretOffset = (nrFrets: any) => (pos: any) => {
  // (1 - (1 / (2 ** (pos / nrFrets)))) * 100 * 2
  return sum(times(pos, fretWidth(nrFrets)))
}

export const stringHeight = (nrOfStrings: number) => 100 / nrOfStrings

export const stringOffset = (nrOfStrings: any) => (str: number) =>
  str * stringHeight(nrOfStrings)

export const stringCenter = (nrOfStrings: any) => (str: any) =>
  stringOffset(nrOfStrings)(str) + stringHeight(nrOfStrings) / 2

export const populateHighlightStatus = (
  scale: Array<string>,
  currentNote: string
) => {
  const indexOfNote = scale?.indexOf(currentNote.toUpperCase())
  if (indexOfNote === 0) {
    return HighlightStatus.root
  } else if (indexOfNote > 0) {
    return HighlightStatus.scale
  } else {
    return null
  }
}

const addToArray = (
  startIndex: number,
  octaveCount: number,
  tonalScale: Array<string>
) => {
  const currentNote: string = notesArray[startIndex]

  return {
    note: currentNote,
    octave: octaveCount,
    highlight: populateHighlightStatus(tonalScale, currentNote),
  }
}

export const notesOnStringArray = (props: {
  rootNote: TuningShape
  noFrets: number
  tonalKey?: TonalKey
}) => {
  const { rootNote, noFrets, tonalKey } = props
  const rootNoteIndex = notesArray.indexOf(stringifyNote(rootNote))
  const tonalScale = tonalKey?.convertedScale

  let startIndex = rootNoteIndex + 1
  let octaveCount = rootNote.octave
  let finalArray: TuningShape[] = []

  times(noFrets, () => {
    finalArray.push(addToArray(startIndex, octaveCount, tonalScale))
    if (startIndex < 12 - 1) {
      startIndex += 1
    } else {
      startIndex = 0
      octaveCount += 1
    }
  })

  return finalArray
}

export const stringifyNote = (note: TuningShape, showOctave?: boolean) => {
  return `${note.note}${note.sharp ? '#' : ''}${note.flat ? '♭' : ''}${
    showOctave ? note.octave : ''
  }`
}
