import { convertTonalScaleIfNeeded } from './tonalScaleConverter'

describe('convertTonalScaleIfNeeded', () => {
  it('should return the same scale if no conversion is needed', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    const result = convertTonalScaleIfNeeded(scale)
    expect(result).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
  })

  it('should convert sharp notes to flats if the first note includes a sharp', () => {
    const scale = ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#']
    const result = convertTonalScaleIfNeeded(scale)
    expect(result).toEqual(['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'])
  })

  it('should handle double sharps correctly', () => {
    const scale = ['A#', 'B#', 'C##', 'D#', 'E#', 'F##', 'G##']
    const result = convertTonalScaleIfNeeded(scale)
    expect(result).toEqual(['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'])
  })

  it('should return null for notes not in the tuning arrays', () => {
    const scale = ['H', 'I', 'J', 'K', 'L', 'M', 'N']
    const result = convertTonalScaleIfNeeded(scale)
    expect(result).toEqual([null, null, null, null, null, null, null])
  })

  it('should convert triads too', () => {
    const scale = ['A#', 'C##', 'E#']
    const result = convertTonalScaleIfNeeded(scale)
    expect(result).toEqual(['B♭', 'D', 'F'])
  })
})
