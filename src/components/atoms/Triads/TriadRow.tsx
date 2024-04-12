import styled from 'styled-components'
import { TriadNotes } from './TriadNotes'
import { useAppContext } from 'src/context/state'
import { actionsType } from 'store/fretboardReducer'
import { Chord } from '@tonaljs/tonal'

const ChordLabel = styled.td`
  padding-right: 1rem;
  font-weight: bold;
`

const ChordPos = styled.span`
  padding-right: 1rem;
  font-size: 0.75rem;
`

const Row = styled.tr`
  display: flex;
`
type TriadRowProp = {
  triadTonic: string
  noteIndexInTriad: number
}

export const TriadRow = ({ triadTonic, noteIndexInTriad }: TriadRowProp) => {
  const { dispatch } = useAppContext()

  const triads = Chord.degrees(triadTonic)
  const inversions = [1, 2, 3]
  const triadsNotes = inversions.map(triads)

  const onTriadSelect = () => {
    console.log('onTriadSelect', triadsNotes)
    dispatch({
      type: actionsType.SET_STATE,
      updatedState: {
        selectedTriadNotes: triadsNotes,
      },
    })
  }
  return (
    <Row key={`triad-chors-${triadTonic}`} onClick={onTriadSelect}>
      <ChordLabel>
        {triadTonic} <ChordPos>({noteIndexInTriad + 1})</ChordPos>
      </ChordLabel>
      <TriadNotes notes={triadsNotes} />
    </Row>
  )
}
