import { APPEND_APP_TOOL, REMOVE_APP_TOOL } from '../actions/apptool'

const INITIAL_STATE = {
  tools: []
}

const apptool = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPEND_APP_TOOL:
      return {
        ...state,
        tools: [...state.tools, action.tool]
      }

    case REMOVE_APP_TOOL:
      return {
        ...state,
        tools: state.tools.filter(tool => tool !== action.tool)
      }

    default:
      return state
  }
}

export default apptool
