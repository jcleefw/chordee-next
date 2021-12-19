import React, { ReactElement } from 'react'
import { stringCenter } from 'utils/fretboard'

const NutGraphicStrings = ({ nrOfStrings }: Props): ReactElement => {
  const top = stringCenter(nrOfStrings)(0)
  const bottom = stringCenter(nrOfStrings)(nrOfStrings - 1) - top

  return (
    <rect x="0" y={`${top}%`} width="100%" height={`${bottom}%`} fill="black" />
  )
}

interface Props {
  nrOfStrings: number
}

export default NutGraphicStrings
