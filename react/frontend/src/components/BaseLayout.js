import React, { Component } from 'react'
import _ from 'lodash'
import { BrowserRouter, Route, Link,withRouter, Switch, NavLink } from 'react-router-dom'
import PonyNote from './PonyNote'
import NotFound from './NotFound'
import PostList from './PostList'
import PostsNew from './PostsNew'
import PostShow from './PostShow'
import PostEdit from './PostEdit'
import LoginForm from './LoginForm'
import SignForm from './SignForm'
import MainMenu from '../ui/menu'
import logos from '../logo.svg'
import About from './About'
import HomeFeed from './HomeFeed'
import Profile from './Profile'
import Search from './Search'
import Result from './Result'
import { search as searchme } from '../actions/notes'
import { FaBitcoin, FaPaperPlane, FaPython } from 'react-icons/fa'
import {ToastConsumer, ToastProvider, withToastManager} from 'react-toast-notifications'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import Nav from './Nav'
import Footer from './Footer'


class BaseLayout extends Component {


  render () {
    const { auth: { isAuthenticated, token }, search } = this.props
    console.log(search)

    const {auth} = this.props

    console.log(this.props)
    let { PrivateRoute, logout } = this.props

    

    return (
      <ToastProvider>
      <div className='container-fluid p-0'>

<Nav isAuthenticated={isAuthenticated} token={token} logout={this.props.logout} toastManager={this.props.toastManager} search={search} searchme={this.props.searchme} />
{ search !== null ?
<Result search={search} />
: ''
}
<LoadingBar style={{backgroundColor:'#1F7A0DFF'}} progressIncrease={3} />
    <div className='content'>
      <Switch>
        <Route exact path='/about/' component={About} />
        <PrivateRoute exact path='/posts/' component={PostList} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignForm} />
        <Route exact path='/user/profile' component={Profile} />
        <PrivateRoute exact path='/posts/:pk' component={PostShow} />
        <PrivateRoute exact path='/posts/new' component={PostsNew} />
        <PrivateRoute exact path='/posts/edit/:pk' component={PostEdit} />
        <PrivateRoute exact path='' component={HomeFeed} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer/>
        
      </div></ToastProvider>)
  }
}



function mapStateToProps({search}){
  return {search}
}

export default withRouter(connect(mapStateToProps, { searchme })(withToastManager(BaseLayout)))
