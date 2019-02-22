// import _ from 'lodash'
import { SEARCH } from '../actions/notes'
const initial = null

export default function (state = initial, action) {
  switch (action.type) {
    case SEARCH:
      return action.payload 

    default:
      return state
  }
}
