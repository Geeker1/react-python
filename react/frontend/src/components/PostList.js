import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchposts, togg } from '../actions/notes'
import { FaPaperPlane } from 'react-icons/fa'
import PostRender from './PostRender'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import logor from '../img/planet.jpg'
import log from '../img/green.jpg'
import lo from '../img/kris.jpg'
import Notifications, { notify } from 'react-notify-toast'
import { ToastConsumer, ToastProvider, withToastManager } from 'react-toast-notifications'

var message = 'Iman Gadzhi just purchased your course.....'

class PostList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: 15
    }
    this.show = notify.createShowQueue()
  }

  componentDidMount () {
    this.props.fetchposts()
  }

  navigateright () {
    this.props.fetchposts(this.props.posts.next)
  }
  navigateleft () {
    this.props.fetchposts(this.props.posts.previous)
  }

  render () {
    console.log(this.props)
    const { posts, toastManager } = this.props
    const { likes } = this.state
    const value = {
      'name': 'hello'
    }

    if (!posts) {
      return (<h1>Loading.......</h1>)
    }

    return (

      <div>

        <div className='bd-example'>
          <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active' />
              <li data-target='#carouselExampleCaptions' data-slide-to='1' />
              <li data-target='#carouselExampleCaptions' data-slide-to='2' />
            </ol>
            <div className='carousel-inner h-70'>
              <div className='carousel-item active h-100'>
                <img className='d-block w-100 h-100 carous' src={lo} alt='First slide' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className='carousel-item h-100'>
                <img className='d-block w-100 h-100 carous' src={log} alt='Second slide' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className='carousel-item h-100'>
                <img className='d-block w-100 h-100 carous' src={logor} alt='Third slide' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5>Third slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <a className='carousel-control-prev' href='#carouselExampleCaptions' role='button' data-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='sr-only'>Previous</span>
            </a>
            <a className='carousel-control-next' href='#carouselExampleCaptions' role='button' data-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
        <div className='container text-center'>
          <Notifications options={{ top: '50px' }} />

          <h3 className='mt-2'>Posts</h3>
          <button className='btn btn-info' onClick={() => this.show(
            message, 'info'
          )}>Success</button>

          <button className='btn btn-info' onClick={() => {
            toastManager.add('Saved Successfully', { appearance: 'success' })
          }}>Toasty Provider</button>
          <ToastConsumer>{({ add }) => (
            <button className='btn btn-danger' onClick={(e) => add(`Notified by ${e.target}`, { appearance: 'success' })}>
                  Toasty
            </button>
          )}</ToastConsumer>
          <div className='text-right'>
            <Link className='btn btn-info rounded-0' to='/posts/new'>Create Post
              <span className='float-right ml-2'><FaPaperPlane /></span></Link>
          </div>
          <PostRender post={this.props} likes={this.state.likes} />
          { posts.previous !== null
            ? <button
              className='btn btn-default mx-2 my-4 rounded-0'
              onClick={
                () => {
                  this.props.fetchposts(this.props.posts.previous)
                }}>
              Previous
            </button>
            : ''}
          { posts.next !== null
            ? <button
              className='btn btn-primary mx-2 my-4'
              onClick={
                () => {
                  this.props.fetchposts(this.props.posts.next)
                }}>
              Next
            </button>
            : ''}

        </div></div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.object.isRequired
}

function mapStateToProps ({ posts, auth }) {
  return { posts: posts, auth }
}

const FormWithToasts = withToastManager(PostList)

export default connect(mapStateToProps, { fetchposts, togg })(withToastManager(PostList))
