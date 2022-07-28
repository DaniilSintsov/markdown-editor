import {EXIT_EDITOR_PAGE, MARkUP_INPUT, ON_EDITOR_PAGE} from './actions'

const defaultState = {
  markup: '# Hello!',
  isEditorPage: false
}

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MARkUP_INPUT:
      return {...state, markup: action.payload}
    case ON_EDITOR_PAGE:
      return {...state, isEditorPage: true}
    case EXIT_EDITOR_PAGE:
      return {...state, isEditorPage: false}
    default:
      return state
  }
}
