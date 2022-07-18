import React, {
  FC,
  createContext,
  useContext,
  useReducer,
  PropsWithChildren,
} from 'react'
import { initialState } from 'store/initialState'
import reducer from 'store/fretboardReducer'
import { ActionProp, ReducerStateProps } from 'store/types'

const AppContext = createContext<{
  store: ReducerStateProps
  dispatch: React.Dispatch<ActionProp | any>
}>({
  store: initialState,
  dispatch: () => null,
})

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
