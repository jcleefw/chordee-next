import { notesArray } from 'types/tuning'

export const convertTonalScaleIfNeeded = (scale: any) => {
  if (scale) {
    const convertedScale = scale.map((note: string) => {
      // when no conversion needed
      if (notesArray.includes(note)) return note

      // when conversion is needed
      const splitArray = note.split('')
      let firstNoteIndex: number | undefined
      if (splitArray.length === 2) {
        firstNoteIndex = notesArray.indexOf(splitArray[0])
      } else if (splitArray.length === 3) {
        firstNoteIndex = notesArray.indexOf(splitArray.splice(0, 2).join(''))
      }

      if (firstNoteIndex) {
        const searchIndex = (firstNoteIndex + 1) % notesArray.length
        return notesArray[searchIndex]
      }
      return null
    })
    return convertedScale
  }
}
