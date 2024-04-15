import { AnyObject } from 'types/generic'
import { TuningShape } from 'types/tuning'
import { actionsType } from './fretboardReducer'

export interface ActionProp {
  type: actionsType
  updatedState: ReducerStateProps
}

export interface TuningKeyProp extends AnyObject {
  convertedScale: string[]
  tonalKeyInFlat?: string
}

export interface TuningProp {
  name: string
  tunings: TuningShape[]
  noOfStrings: 4 | 5 | 6
}

export interface ReducerStateProps {
  tuning: TuningProp
  tuningKey?: TuningKeyProp
  showOctave: boolean
  noOfFrets: number
  boardHeight: number
  selectedTriadNotes?: string[]
}
