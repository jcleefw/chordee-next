import styled from 'styled-components'
import { TriadNotes } from './TriadNotes'
import { useAppContext } from 'src/context/state'
import { actionsType } from 'store/fretboardReducer'
import { Chord } from '@tonaljs/tonal'
import { convertTonalScaleIfNeeded } from 'utils/tonalScaleConverter'

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
  noteIndexInScale: number
}

export const TriadRow = ({ triadTonic, noteIndexInScale }: TriadRowProp) => {
  const { dispatch, store } = useAppContext()

  const triads = Chord.degrees(triadTonic)
  const inversions = [1, 2, 3]
  const triadsNotes = inversions.map(triads)
  const convertedTriadNotes = convertTonalScaleIfNeeded(triadsNotes)

  const scale = store.tuningKey?.convertedScale

  const onTriadSelect = () => {
    dispatch({
      type: actionsType.SET_STATE,
      updatedState: {
        selectedTriadNotes: convertedTriadNotes,
      },
    })
  }
  return (
    <Row key={`triad-chors-${triadTonic}`} onClick={onTriadSelect}>
      <ChordLabel>
        {scale ? scale[noteIndexInScale] : triadTonic}{' '}
        <ChordPos>({noteIndexInScale + 1})</ChordPos>
      </ChordLabel>
      <TriadNotes notes={convertedTriadNotes} />
    </Row>
  )
}
