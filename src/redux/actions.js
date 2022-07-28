export const MARkUP_INPUT = 'MARkUP_INPUT'
export const ON_EDITOR_PAGE = 'ON_EDITOR_PAGE'
export const EXIT_EDITOR_PAGE = 'EXIT_EDITOR_PAGE'

export const markupInputAction = (payload) => ({type: MARkUP_INPUT, payload})
export const onEditorPageAction = () => ({type: ON_EDITOR_PAGE})
export const exitEditorPageAction = () => ({type: EXIT_EDITOR_PAGE})
