import { combineReducers } from 'redux'
import theme from './theme'
import content from './content'

const rootReducer = combineReducers({
  theme,
  content
})

export default rootReducer
