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

export enum HighlightStatus {
  root = 'root',
  scale = 'scale',
}

export interface TuningShape {
  note: string
  octave: number
  sharp?: boolean
  flat?: boolean
  highlight?: HighlightStatus | null
}

export interface AlternateTuningProps {
  [x: string]: {
    name: string
    tunings: TuningShape[]
  }
}
