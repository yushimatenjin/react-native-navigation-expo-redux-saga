import { combineReducers } from 'redux'
import navReducer from '../navigation'
import appReducer from '../app/reducer'

export default combineReducers({
  nav: navReducer,
  app: appReducer
})
