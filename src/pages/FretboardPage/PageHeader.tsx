import { Key } from '@tonaljs/tonal'
import { alternateTunings } from 'data/alternateTunings'
import { AlternateTuningProps, notesArray } from 'types/tuning'
import React, { FC } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { convertTonalScaleIfNeeded } from 'utils/tonalHelper'
import { actionsType } from 'store/fretboardReducer'
import { useAppContext } from 'src/context/state'

const Container = styled.div`
  margin-bottom: 1rem;
`
const FormGroup = styled.div`
  width: 50%;
  &:not(:first-child) {
    padding-left: 0.5rem;
  }
`

type OptionType = {
  value: string
  label: string
}

const generateOptions = (tuningOptions: AlternateTuningProps): OptionType[] => {
  return Object.keys(tuningOptions).map((key) => {
    return { value: key, label: tuningOptions[key].name }
  })
}

const PageHeader: FC = () => {
  const tuningOptions = generateOptions(alternateTunings)
  const musicKey = notesArray.map((note: string) => {
    return { value: note, label: note.toUpperCase() }
  })
  const { dispatch } = useAppContext()

  const onKeyChange = (e: OptionType) => {
    const tonalKey = Key.majorKey(e.value)
    dispatch({
      updatedState: {
        tuningKey: {
          ...tonalKey,
          convertedScale: convertTonalScaleIfNeeded(tonalKey.scale),
        },
      },
      type: actionsType.SET_STATE,
    })
  }
  const onTuningChange = (e: OptionType) => {
    dispatch({
      type: actionsType.SET_STATE,
      updatedState: { tuning: alternateTunings[e.value] },
    })
  }

  return (
    <Container className="flex">
      <FormGroup className="form-group">
        <label htmlFor="tuning">Tuning</label>
        <Select
          options={tuningOptions}
          onChange={(e) => onTuningChange(e as OptionType)}
          defaultValue={tuningOptions[0]}
          className="select"
          id="tuning"
          instanceId="tuning"
        />
      </FormGroup>
      <FormGroup className="form-group">
        <label htmlFor="keyMajor">Key</label>
        <Select
          options={musicKey}
          onChange={(e) => onKeyChange(e as OptionType)}
          className="select"
          id="keyMajor"
          instanceId="keyMajor"
        />
      </FormGroup>
    </Container>
  )
}

export default PageHeader
