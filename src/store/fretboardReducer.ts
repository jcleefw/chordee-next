import { AnyObject } from 'types/generic'
import { initialState } from './initialState'

export enum actionsType {
  SET_STATE,
}

interface ActionProp {
  type: actionsType
  updatedState: AnyObject
}

const stateReducer = (state: AnyObject, action: ActionProp) => {
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
