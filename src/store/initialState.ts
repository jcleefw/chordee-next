import { alternateTunings } from 'data/alternateTunings'
import { fretboardHeight } from 'types/enums'
import { calculateBoardHeight } from 'utils/fretboard'
import { InitialStateProps } from './types'

export const initialState: InitialStateProps = {
  tuning: alternateTunings.standard,
  tuningKey: undefined,
  showOctave: false,
  noOfFrets: 15,
  boardHeight: calculateBoardHeight(
    alternateTunings.standard.noOfStrings,
    fretboardHeight.large
  ),
}
