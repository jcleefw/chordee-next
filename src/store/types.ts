import { AnyObject } from 'types/generic'
import { TuningShape } from 'types/tuning'

interface TuningKeyProp extends AnyObject {
  convertedScale: string[]
}

interface TuningProp {
  name: string
  tunings: TuningShape[]
}

export interface InitialStateProps {
  tuning?: TuningProp
  tuningKey?: TuningKeyProp
  showOctave?: boolean
  noOfFrets?: number
  boardHeight?: number
}
