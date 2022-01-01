import React, { FC, createContext, useContext, useReducer } from 'react'
import { initialState } from 'store/initialState'
import reducer from 'store/fretboardReducer'

const AppContext = createContext<{ store: any; dispatch: any }>({
  store: {},
  dispatch: undefined,
})

export const AppWrapper: FC = ({ children }) => {
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
