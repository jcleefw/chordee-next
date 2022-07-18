import { alternateTunings } from 'data/alternateTunings'
import { fretboardHeight } from 'types/enums'
import { calculateBoardHeight } from 'utils/fretboard'
import { ReducerStateProps } from './types'

export const initialState: ReducerStateProps = {
  tuning: alternateTunings.standard,
  tuningKey: undefined,
  showOctave: false,
  noOfFrets: 15,
  boardHeight: calculateBoardHeight(
    alternateTunings.standard.noOfStrings,
    fretboardHeight.large
  ),
}
