import { initialState } from './initialState'
import { ActionProp, ReducerStateProps } from './types'

export enum actionsType {
  SET_STATE,
}

const stateReducer = (
  state: ReducerStateProps,
  action: ActionProp
): ReducerStateProps => {
  switch (action.type) {
    case actionsType.SET_STATE: {
      return {
        ...state,
        ...action.updatedState,
      }
    }
    default:
      return initialState
  }
}

export default stateReducer
