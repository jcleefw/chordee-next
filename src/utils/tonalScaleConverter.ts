import { MajorKey } from '@tonaljs/key'
import {
  notesArray as tuningSharpsArray,
  notesArrayInFlats as tuningFlatsArray,
} from 'types/tuning'

/**
 * Scales generated from tonaljs are in sharps. Sometimes it outputs double sharps
 * to represents the proper scale degrees.
 * However the notes are not in the tuning array.
 *
 * This function aims to
 * 1. Convert sharp notes to flat notes if the scale starts with flats
 * 2. Convert double sharps to mapped notes in the tuning array
 * 3. Return null for notes not in the tuning array
 *
 * @param scale
 * @returns
 */
export const convertTonalScaleIfNeeded = (scale: MajorKey['scale']) => {
  let useFlats: boolean

  if (scale) {
    if (scale[0].includes('#')) {
      useFlats = true
    }

    const convertedScale = scale.map((note: string) => {
      const notesArray = useFlats ? tuningFlatsArray : tuningSharpsArray
      if (notesArray.includes(note))
        // when no conversion needed
        return note

      // when no direct mapping and will need conversion
      const splitArray = note.split('')
      let firstNoteIndex: number | undefined

      // when scale has sharp, but notes are not in the notesArray, use the next note
      if (splitArray.length === 2) {
        firstNoteIndex = tuningSharpsArray.indexOf(splitArray[0])
        const searchIndex = (firstNoteIndex + 1) % notesArray.length
        return notesArray[searchIndex]

        // when  scale has double sharps, it will need further conversion
      } else if (splitArray.length === 3) {
        // remove the last `#` from the note.
        firstNoteIndex = tuningSharpsArray.indexOf(
          splitArray.splice(0, 2).join('')
        )
        const searchIndex = (firstNoteIndex + 1) % notesArray.length
        return notesArray[searchIndex]
      }

      return null
    })
    return convertedScale
  }
  return scale
}
