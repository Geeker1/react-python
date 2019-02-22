import { combineReducers } from 'redux'
import notes from './notes'
import PostsReducer from './code'
import SearchReducer from './cart'
import AuthReducer from './authenticate'
import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'

const ponyApp = combineReducers({
  notes,
  auth: AuthReducer,
  posts: PostsReducer,
  form: formReducer,
  search: SearchReducer,
  loadingBar:loadingBarReducer,
})

export default ponyApp
