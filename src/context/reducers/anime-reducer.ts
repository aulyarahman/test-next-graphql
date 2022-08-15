import { AppState } from '../app-context'

export type Action = { type: 'SET_ANIME'; payload: string }

export const initialState = {
  name: '',
}

export const animeReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_ANIME':
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state
  }
}
