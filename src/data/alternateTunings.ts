import { AlternateTuningProps, musicNotes } from 'types/tuning'

export const alternateTunings: AlternateTuningProps = {
  standard: {
    name: 'Standard',
    noOfStrings: 6,
    tunings: [
      { note: musicNotes.E, octave: 2 },
      { note: musicNotes.A, octave: 2 },
      { note: musicNotes.D, octave: 3 },
      { note: musicNotes.G, octave: 3 },
      { note: musicNotes.B, octave: 4 },
      { note: musicNotes.E, octave: 4 },
    ],
  },
  dadgad: {
    name: 'DADGAD',
    noOfStrings: 6,
    tunings: [
      { note: musicNotes.D, octave: 2 },
      { note: musicNotes.A, octave: 2 },
      { note: musicNotes.D, octave: 3 },
      { note: musicNotes.G, octave: 3 },
      { note: musicNotes.A, octave: 4 },
      { note: musicNotes.D, octave: 4 },
    ],
  },
  openC: {
    name: 'Open C',
    noOfStrings: 6,
    tunings: [
      { note: musicNotes.C, octave: 2 },
      { note: musicNotes.G, octave: 2 },
      { note: musicNotes.C, octave: 3 },
      { note: musicNotes.G, octave: 3 },
      { note: musicNotes.C, octave: 4 },
      { note: musicNotes.E, octave: 4 },
    ],
  },
  openD: {
    name: 'Open D',
    noOfStrings: 6,
    tunings: [
      { note: musicNotes.D, octave: 2 },
      { note: musicNotes.A, octave: 2 },
      { note: musicNotes.D, octave: 3 },
      { note: musicNotes.F, octave: 3, sharp: true },
      { note: musicNotes.A, octave: 4 },
      { note: musicNotes.D, octave: 4 },
    ],
  },
  guitalele: {
    name: 'Guitalele Standard A',
    noOfStrings: 6,
    tunings: [
      { note: musicNotes.A, octave: 3 },
      { note: musicNotes.D, octave: 3 },
      { note: musicNotes.G, octave: 3 },
      { note: musicNotes.C, octave: 4 },
      { note: musicNotes.E, octave: 4 },
      { note: musicNotes.A, octave: 5 },
    ],
  },
}
