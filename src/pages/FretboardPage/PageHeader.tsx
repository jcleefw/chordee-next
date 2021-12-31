import { Key } from '@tonaljs/tonal'
import { alternateTunings } from 'data/alternateTunings'
import { AlternateTuningProps, notesArray } from 'types/tuning'
import React, { FC } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { convertTonalScaleIfNeeded } from 'utils/tonalHelper'

const Container = styled.div`
  margin-bottom: 1rem;
`
const FormGroup = styled.div`
  width: 50%;
  &:not(:first-child) {
    padding-left: 0.5rem;
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
    <Container className="flex">
      <FormGroup className="form-group">
        <label htmlFor="tuning">Tuning</label>
        <Select
          options={tuningOptions}
          onChange={(e) => onTuningChange(e, setTuning)}
          defaultValue={tuningOptions[0]}
          className="select"
          id="tuning"
        />
      </FormGroup>
      <FormGroup className="form-group">
        <label htmlFor="keyMajor">Key</label>
        <Select
          options={musicKey}
          onChange={(e) => onKeyChange(e, setKey)}
          className="select"
          id="keyMajor"
        />
      </FormGroup>
    </Container>
  )
}

export default PageHeader
