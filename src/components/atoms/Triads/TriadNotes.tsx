import styled from 'styled-components'

const NoteColumn = styled.td``

export const TriadNotes = ({ notes }: { notes: (string | null)[] }) => {
  return notes.map((triadNote) => (
    <NoteColumn key={triadNote}>{triadNote}</NoteColumn>
  ))
}
