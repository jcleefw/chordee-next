import React, { ReactElement } from 'react'
import { useAppContext } from 'src/context/state'
import { stringCenter } from 'utils/fretboard'

const NutGraphicStrings = (): ReactElement => {
  const { store } = useAppContext()
  const { noOfStrings } = store.tuning
  const top = stringCenter(noOfStrings)(0)
  const bottom = stringCenter(noOfStrings)(noOfStrings - 1) - top

  return (
    <rect x="0" y={`${top}%`} width="100%" height={`${bottom}%`} fill="black" />
  )
}

export default NutGraphicStrings
