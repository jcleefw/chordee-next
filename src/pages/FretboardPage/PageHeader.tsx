import { Key } from '@tonaljs/tonal'
import { alternateTunings } from 'data/alternateTunings'
import { AlternateTuningProps, notesArray } from 'types/tuning'
import React, { FC } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { convertTonalScaleIfNeeded } from 'utils/tonalHelper'

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  > .select {
    width: 100%;
  }
`

interface Props {
  setTuning: (e: any) => void
  setKey: (e: any) => void
}

const generateOptions = (tuningOptions: AlternateTuningProps) => {
  return Object.keys(tuningOptions).map((key) => {
    return { value: key, label: tuningOptions[key].name }
  })
}

const onTuningChange = (e: any, setTuning: any) => {
  setTuning(alternateTunings[e.value])
}

const PageHeader: FC<Props> = ({ setTuning, setKey }) => {
  const tuningOptions = generateOptions(alternateTunings)
  const musicKey = notesArray.map((note: string) => {
    return { value: note, label: note.toUpperCase() }
  })

  const onKeyChange = (e: any, setKey: any) => {
    const tonalKey = Key.majorKey(e.value)
    setKey({
      ...tonalKey,
      convertedScale: convertTonalScaleIfNeeded(tonalKey.scale),
    })
  }

  return (
    <Container>
      <Select
        options={tuningOptions}
        onChange={(e) => onTuningChange(e, setTuning)}
        defaultValue={tuningOptions[0]}
        className="select"
      />
      <Select
        options={musicKey}
        onChange={(e) => onKeyChange(e, setKey)}
        className="select"
      />
    </Container>
  )
}

export default PageHeader
