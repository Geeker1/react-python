import { LOGIN, LOGOUT, SIGNUP, AUTH_SUCCESS, LOGIN_ERROR, AUTH_ERROR, LOGIN_SUCCESSFUL } from '../actions/auth'
const initial = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: true,
  user: null,
  errors: {}
}

export default function (state = initial, action) {
  switch (action.type) {
  	case LOGIN:
  		localStorage.setItem('token', action.payload.token)
  		const user = action.payload.user.username
  		console.log({ ...state, isAuthenticated: true, errors: {}, isLoading: false, ...action.payload })
  		// console.log({ ...state, isAuthenticated: true, isLoading: false, ...action.payload })
  		return { ...state, isAuthenticated: true, errors: {}, isLoading: false, ...action.payload }

  	case LOGIN_ERROR:
  		console.log(action.payload)
  		return { ...state, isAuthenticated: false, errors: action.payload }

    case AUTH_SUCCESS:
    	if (action.token == state.token) {
    		const { payload: { data: { username } } } = action
    		console.log(username)
    		return { ...state, isAuthenticated: true, user: username, isLoading: false }
    	} else {
    		return { ...initial }
    	}

    case SIGNUP:
    	localStorage.setItem('token', action.payload.token)
    	let username = action.payload.username
    	console.log({ ...state, isAuthenticated: true, user: username, ...action.payload, isLoading: false })
    	return { ...state, isAuthenticated: true, user: username, ...action.payload, isLoading: false }

    case AUTH_ERROR:
      console.log(action.payload)
      localStorage.removeItem('token')
      console.log({ ...state, token: null, isAuthenticated: null, isLoading: false, user: false, errors: action.payload })
    	return { ...state, token: null, isAuthenticated: null, isLoading: false, user: null, errors: action.payload }

    case LOGOUT:
    	if (state.token) {
    		localStorage.removeItem('token')
    		console.log({ ...state, token: null, user: null, isAuthenticated: null })
    	return { ...state, token: null, user: null, isAuthenticated: null }
      }

    default:
      return state
  }
}

// case USER_LOADING:
  	// 	return { ...state, isLoading: true }

  	// case USER_LOADED:
  	// 	return { ...state,
  	// 		isAuthenticated: true,
  	// 		isLoading: false,
  	// 		user: action.user }

  	// case LOGIN_SUCCESSFUL:
  	// 	localStorage.setItem('token', action.data.token)
  	// 	return {
  	// 		...state,
  	// 		...action.data,
  	// 		isAuthenticated: true,
  	// 		isLoading: false,
  	// 		errors: null }

  	// case LOGIN_FAILED:
  	// case LOGOUT_SUCCESFUL:
  	// 	localStorage.removeItem('token')
  	// 	return {
  	// 		...state,
  	// 		errors: action.data,
  	// 		token: null,
  	// 		user: null,
  	// 		isAuthenticated: false,
  	// 		isLoading: false }
