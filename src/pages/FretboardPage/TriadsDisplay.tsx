import { TriadRow } from 'components/atoms/Triads/TriadRow'

const TriadDisplay = ({ scales }: { scales: string[] }) => {
  return (
    <div>
      <h5>Triad Display</h5>
      <table>
        <tbody>
          {scales?.map((scaleNotes: string, index: number) => {
            return (
              <TriadRow
                key={`scale-note-${index}`}
                triadTonic={scaleNotes}
                noteIndexInTriad={index}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TriadDisplay
