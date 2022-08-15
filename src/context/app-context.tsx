import { createContext, ReactNode, useMemo, useReducer } from 'react'
import { Action, animeReducer, initialState } from './reducers/anime-reducer'

export type AppState = typeof initialState

const ProviderContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<Action>
}>({ state: initialState, dispatch: () => undefined })

type Props = {
  children: ReactNode
}

function Provider({ children }: Props) {
  const [state, dispatch] = useReducer(animeReducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <ProviderContext.Provider value={contextValue}>
      {children}
    </ProviderContext.Provider>
  )
}

export { ProviderContext, Provider }
