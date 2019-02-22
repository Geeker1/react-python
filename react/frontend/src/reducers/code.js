import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, DELETE_POST, LIKE_POST, UPDATE, FETCH_POST_UPDATE } from '../actions/notes'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POST_UPDATE:
      console.log({ ...state, [action.payload.data.pk]: action.payload.data })
      return { ...state, [action.payload.data.pk]: action.payload.data,initialValues:action.payload.data }
    case DELETE_POST:
      return _.omit(state, action.payload)
    case FETCH_POST:
      if (!action.payload.data) {
        return action.payload.data
      }
      return { ...state, [action.payload.data.pk]: action.payload.data }

    case LIKE_POST:
    console.log({...state})
      return { ...state,...state.results[action.payload.data.pk]=action.payload.data,[action.payload.data.pk]: action.payload.data }
    case FETCH_POSTS:
      const over = action.payload
      if (!over) {
        return action.payload
      }
      over.results = _.mapKeys(over.results, 'pk')
      console.log(_.merge(over, over))
      return over

    case UPDATE:
      console.log(action.payload.data)
      let act = action.payload.data
      console.log({ ...state, act })
      return { ...state, act }
    default:
      return state
  }
}
