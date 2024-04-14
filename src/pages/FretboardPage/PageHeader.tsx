import { Key } from '@tonaljs/tonal'
import { alternateTunings } from 'data/alternateTunings'
import { AlternateTuningProps, notesArray, notesArrayInFlats } from 'types/tuning'
import React, { FC } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { convertTonalScaleIfNeeded } from 'utils/tonalHelper'
import { actionsType } from 'store/fretboardReducer'
import { useAppContext } from 'src/context/state'
import { calculateBoardHeight } from 'utils/fretboard'

const FormGroup = styled.div`
  width: 50%;
  &:not(:first-child) {
    padding-left: 0.5rem;
  }
`
const FormLabel = styled.label`
  font-size: 16px;
  color: green;
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
  const musicKey = notesArray.map((note: string, index: number) => {
    if (note.includes('#')) {
      
    }
    return { value: note, label: (note.includes('#') ? notesArrayInFlats[index] : note) }
  })
  const { dispatch } = useAppContext()

  const onKeyChange = (e: OptionType) => {
    const tonalKey = Key.majorKey(e.value)
    const tonicIndexInTuningArr = notesArray.findIndex((el) => el === tonalKey.tonic)

    dispatch({
      updatedState: {
        tuningKey: {
          ...tonalKey,
          tonalKeyInFlat: notesArrayInFlats[tonicIndexInTuningArr],
          convertedScale: convertTonalScaleIfNeeded(tonalKey.scale),
        },
      },
      type: actionsType.SET_STATE,
    })
  }
  const onTuningChange = (e: OptionType) => {
    dispatch({
      type: actionsType.SET_STATE,
      updatedState: {
        tuning: alternateTunings[e.value],
        boardHeight: calculateBoardHeight(
          alternateTunings[e.value].noOfStrings
        ),
      },
    })
  }

  return (
    <div className="flex">
      <FormGroup className="form-group">
        <FormLabel htmlFor="tuning">Tuning</FormLabel>
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
        <FormLabel htmlFor="keyMajor">Key</FormLabel>
        <Select
          options={musicKey}
          onChange={(e) => onKeyChange(e as OptionType)}
          className="select"
          id="keyMajor"
          instanceId="keyMajor"
        />
      </FormGroup>
    </div>
  )
}

export default PageHeader
