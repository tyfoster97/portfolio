import { createStore, applyMiddleware, combineReducers } from "redux"
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from "redux-thunk"

const appReducer = combineReducers({

})
const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))