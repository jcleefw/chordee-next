import { Chord } from '@tonaljs/tonal'
import styled from 'styled-components'

const ChordLabel = styled.td`
  padding-right: 1rem;
  font-weight: bold;
`

const ChordPos = styled.span`
  padding-right: 1rem;
  font-size: 0.75rem;
`

const TriadRow = styled.tr`
  display: flex;
`
const TriadNotes = styled.td``

const TriadDisplay = ({ scales }: { scales: string[] }) => {
  const getTriads = (
    note: string | [string, string],
    inversions: number[] = [1, 2, 3]
  ) => {
    const triads = Chord.degrees(note)
    const triadsInverted = inversions.map(triads)
    return triadsInverted.map((triadNote) => (
      <TriadNotes key={triadNote}>{triadNote}</TriadNotes>
    ))
  }

  const generateRowTriadsNotes = (triadTonic: string, index: number) => {
    return (
      <TriadRow>
        <ChordLabel>
          {triadTonic} <ChordPos>({index + 1})</ChordPos>
        </ChordLabel>
        {getTriads(triadTonic)}
      </TriadRow>
    )
  }

  return (
    <div>
      <h5>Triad Display</h5>
      <table>
        <tbody>
          {scales?.map((scaleNotes: string, index: number) => {
            return generateRowTriadsNotes(scaleNotes, index)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TriadDisplay
