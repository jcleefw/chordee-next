import { sum, times } from 'lodash'
import {
  TuningShape,
  notesArray,
  HighlightStatus,
  mapSharpToFlat,
  mapFlatToSharp,
} from '../types/tuning'
import { AnyObject } from 'types/generic'
import { fretboardHeight } from 'types/enums'

/** Fret display functions */
export const fretWidth = (nrFrets: number) => (pos: number) =>
  ((2 ** (1 / nrFrets) - 1) / 2 ** ((pos + 1) / nrFrets)) * 100 * 2

export const fretOffset = (nrFrets: number) => (pos: number) => {
  // (1 - (1 / (2 ** (pos / nrFrets)))) * 100 * 2
  return sum(times(pos, fretWidth(nrFrets)))
}

/** string display functions */
export const stringHeight = (nrOfStrings: number) => 100 / nrOfStrings

export const stringOffset = (nrOfStrings: number) => (str: number) =>
  str * stringHeight(nrOfStrings)

export const stringCenter = (nrOfStrings: number) => (str: number) =>
  stringOffset(nrOfStrings)(str) + stringHeight(nrOfStrings) / 2

export const populateHighlightStatusForScale = (
  scale: Array<string>,
  currentNote: string
) => {
  let noteInScaleForm: string

  // Only converts sharp notes to flat notes when the scale has flats
  if (currentNote.includes('#')) {
    noteInScaleForm = mapSharpToFlat.get(currentNote) ?? currentNote
  } else {
    noteInScaleForm = currentNote
  }

  // find the position of note in the scale
  const indexOfNote = scale?.indexOf(noteInScaleForm)
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
    highlight: populateHighlightStatusForScale(tonalScale, currentNote),
  }
}

export const notesOnStringArray = (props: {
  rootNote: TuningShape
  noFrets: number
  tonalKey?: AnyObject
  selectedTriadNotes?: string[]
}) => {
  const { rootNote, noFrets, tonalKey, selectedTriadNotes } = props
  const rootNoteIndex = notesArray.indexOf(stringifyNote(rootNote))
  const tonalScale = tonalKey?.convertedScale
  const tonalArray = selectedTriadNotes?.length
    ? selectedTriadNotes
    : tonalScale

  let startIndex = rootNoteIndex + 1
  let octaveCount = rootNote.octave
  let finalArray: TuningShape[] = []

  times(noFrets, () => {
    finalArray.push(addToArray(startIndex, octaveCount, tonalArray))
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

export const calculateBoardHeight = (
  noOfStrings: number,
  height?: fretboardHeight
) => {
  const fHeight = height ?? fretboardHeight.large
  return noOfStrings * fHeight
}
