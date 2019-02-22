import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const LOGIN = 'login'
export const SIGNUP = 'signup'
export const AUTH_SUCCESS = 'auth_success'
export const LOGIN_ERROR = 'login_error'
export const LOGOUT = 'logout'
export const AUTH_ERROR = 'auth_error'

export function login (values, callback) {
  const request = axios.post('http://localhost:8000/token-auth/', values)
  return (dispatch, getState) => {
  	request.then((response) => {
  		console.log(response.data)
  		dispatch({ type: LOGIN, payload: response.data })
  	}).then(() => callback()).catch(({ response }) => {
  		console.log(response.data)
  		console.log(response.status)
  		dispatch({ type: LOGIN_ERROR, payload: response.data })
  	})
  }
}

export const signup = (values, callback) => {
  console.log(values)
  const request = axios.post('http://localhost:8000/api/sign-user', values)
  return (dispatch, getState) => {
  	request.then((response) => {
  		console.log(response.data)
  		dispatch({ type: SIGNUP, payload: response.data })
  	}).then(() => callback())
  	.catch(({ response }) => {
  		console.log(response.data)
  	})
  }
  console.log(request)
}

export const logout = (callback) => {
  return (dispatch, getState) => {
    let token = getState().auth.token
    dispatch({ type: LOGOUT, payload: token })
    callback()
  }
}

export function check_auth () {
  return (dispatch, getState) => {
  	const tokenize = getState().auth.token
  	console.log(tokenize)
    const request = axios.get('http://localhost:8000/api/current_user',
  	{ headers: {
  	  		Authorization: `JWT ${tokenize}`
  	  	} })
  	request.then((response) => {
  		console.log(response.data)
      dispatch(showLoading())
  		dispatch({ type: AUTH_SUCCESS, payload: response, token: tokenize })
      dispatch(hideLoading())
  	}).catch(({ response }) => {
      dispatch(showLoading())
  		dispatch({ type: AUTH_ERROR, payload: response.data })
      dispatch(hideLoading())
  	})
  }
}
