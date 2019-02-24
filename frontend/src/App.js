import React, { Component } from 'react'
import { Route,Switch, Redirect, BrowserRouter } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Provider, connect } from 'react-redux'
import { login,check_auth,logout } from './actions/auth'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import BaseLayout from './components/BaseLayout'
import {ToastConsumer, ToastProvider, withToastManager} from 'react-toast-notifications'

const store = applyMiddleware(thunk)(createStore)
// remind me to change those if calls made mistake somewhere

class RootContainerComponent extends Component {

  componentDidMount(){
    this.props.check_auth()
  }

  PrivateRoute = ({ component: ChildComponent, ...rest }) =>{
    return <Route {...rest} render={props => {
      if(this.props.auth.isLoading){
        return ''
      }else if(!this.props.auth.isAuthenticated){
        return <Redirect to='/login'/>
      }
      else{
        return <ChildComponent {...props} />
      }
    }}/>
  }

  render(){
    let {PrivateRoute}= this
    const {auth,logout} = this.props
    return (
      <ToastProvider>
       <BrowserRouter>
        <BaseLayout auth={auth} logout={logout} PrivateRoute={PrivateRoute} />
      </BrowserRouter>
      </ToastProvider>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth: auth }
}

let RootContainer = connect(mapStateToProps, {check_auth,logout})(RootContainerComponent)









class App extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     logged_in: !!localStorage.getItem('token'),
  //     username: ''
  //   }
  // }

  componentDidMount () {
    console.log(this.state)
    console.log(this.props)
    // if (this.state.logged_in) {
    //   fetch('http://localhost:8000/api/current_user', {
    //     headers: {
    //       Authorization: `JWT $(localStorage.getItem('token'))`
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(json => {
    //       this.setState({ username: json.username })
    //     })
    // }
  }

  render () {
    return (
      <Provider store={store(reducers)}>
        <RootContainer />
      </Provider>
      
    )
  }
}

export default App
// connect(mapStateToProps, { login })(App)