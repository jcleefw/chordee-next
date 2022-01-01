import { alternateTunings } from 'data/alternateTunings'
import { AnyObject } from 'types/generic'
import { TuningShape } from 'types/tuning'

interface TuningKeyProp extends AnyObject {
  convertedScale: string[]
}

interface TuningProp {
  name: string
  tunings: TuningShape[]
}
interface StateProps {
  tuning?: TuningProp
  tuningKey?: TuningKeyProp
}

export const initialState: StateProps = {
  tuning: alternateTunings.standard,
  tuningKey: undefined,
}
