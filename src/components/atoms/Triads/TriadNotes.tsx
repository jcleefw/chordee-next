import styled from 'styled-components'

const NoteColumn = styled.td``

export const TriadNotes = ({ notes }: { notes: string[] }) => {
  return notes.map((triadNote) => (
    <NoteColumn key={triadNote}>{triadNote}</NoteColumn>
  ))
}
