import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './bootstrap.min.css'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import BaseLayout from './components/BaseLayout'

const store = applyMiddleware(thunk)(createStore)

class Main extends Component {
  render () {
    return (
      <Provider store={store(reducers)}>
        <App />
      </Provider>
    )
  }
}

export default Main
