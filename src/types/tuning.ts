import { TuningProp } from 'store/types'

export enum musicNotes {
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  A = 'A',
  B = 'B',
}

export const notesArray = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
]

export const notesArrayInFlats = [
  'A',
  'B♭',
  'B',
  'C',
  'D♭',
  'D',
  'E♭',
  'E',
  'F',
  'G♭',
  'G',
  'A♭',
]

export const mapFlatToSharp = new Map([
  ['A♭', 'G#'],
  ['B♭', 'A#'],
  ['D♭', 'C#'],
  ['E♭', 'D#'],
  ['G♭', 'F#'],
])

export const mapSharpToFlat = new Map([
  ['G#', 'A♭'],
  ['A#', 'B♭'],
  ['C#', 'D♭'],
  ['D#', 'E♭'],
  ['F#', 'G♭'],
])

export enum HighlightStatus {
  root = 'root',
  scale = 'scale',
  triad = 'triad',
}

export interface TuningShape {
  note: string
  octave: number
  sharp?: boolean
  flat?: boolean
  highlight?: HighlightStatus | null
}

export interface AlternateTuningProps {
  [x: string]: TuningProp
}
