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
import Modal from './Modals.js'
import $ from 'jquery'

class HomeFeed extends Component {

  constructor (props) {
    super(props)
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
    const {posts:{cod}} = this.props
    return (
      <main className='container-fluid'>
      <div className='d-sm-block d-md-none mt-2'>
      <div className='mt-2 w-100 d-flex'>
  <div className='col-6 text-center py-2 text-white bg-danger nav-sm rounded border-right' onClick={()=>{this.props.history.push('/user/profile')}}>
      Profile
  </div>
  <div className='col-6 bg-success py-2 text-white rounded nav-sm text-center border-left' onClick={()=>{$('#exampleModalLive').modal('toggle')}}>
  Friends
  </div>
</div></div>
        <Modal />
        <div className='row py-4 justify-content-around'>
          <div className='col-sm-3 position-relative d-none d-lg-block left-navigation'>
            <div className='card bg-dark mb-2'>
              <div className='card-body font-weight-bold text-center text-white'>
              Ibaakee Ledum
              </div>
            </div>
            <div className='container'>
              <div className='row justify-content-center '>
                <img className='prof-img rounded' src={logor} />
              </div>
              <div className='row'>
                Understanding me is the first step you should take
                 in achieving your goals, sorry Lorem Ipsum couldn't suffice,
                 #kingofjudah #maketheworldabetterplace
              </div>
              <div className='card left-nav' onClick={() => { this.props.history.push('/user/profile') }}>
                <div className='card-body'>
                Edit Profile
                </div>
              </div>
              <div className='card left-nav' onClick={() => $('#exampleModalLive').modal('toggle')}>
                <div className='card-body'>
                View All Friends
                </div>
              </div>
              <div className='card left-nav' onClick={() => $('#kotton').modal('toggle')}>
                <div className='card-body'>
                Pages and Groups
                </div>
              </div>
              <div className='card left-nav' onClick={() => $('#privacy').modal('toggle')}>
                <div className='card-body'>
                Privacy and Settings
                </div>
              </div>
              <div className='card left-nav-footer'>
                <div className='card-body text-center'>
                View this in different languages...
                </div>
                <div className='d-flex py-2 left-nav-footer-span justify-content-around'>
                  <span>Hausa</span>
                  <span>Igbo</span>
                  <span>Yoruba</span>
                  <span>Ogoni</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 center-navigation'>
            <div className='container px-0'>
              <h6 className='font-weight-bold text-left'>Update Status</h6>
              <div className='card center-nav'>

                <div className='card-body' />
              </div>
              <div className='w-100 text-right mt-2'>
                <button className='btn btn-success border-0'>
              Post Update
                </button></div>
              <div className='card mt-2 text-white bg-dark'>

                <div className='card-body py-2'>
                Juksayama Kyuito just went live ! <strong>5 mins ago...</strong>
                </div>
              </div>
              <div className='container mt-2 text-white bg-dark'>
              {cod === null ? <img className='App-logo' src={logor} style={{width:'150px',height:'150px'}} />:<PostRender post={this.props} />}
                
                <div className='w-100 text-center'>
          { posts.previous !== null
            ? <button
              className='btn btn-default px-3 my-4 rounded-0'
              onClick={
                () => {
                  this.props.fetchposts(this.props.posts.previous)
                }}>
              Previous
            </button>
            : ''}
          { posts.next !== null
            ? <button
              className='btn btn-primary px-3 my-4'
              onClick={
                () => {
                  this.props.fetchposts(this.props.posts.next)
                }}>
              Next
            </button>
            : ''}
            </div>
              </div>
            </div>
          </div>
          <div className='col-sm-3 d-none d-lg-block right-content'>
            <div className='container'>
              <div className='card mt-2 text-white bg-dark'>
                <div className='card-body'>
                Friend requests <span className='float-right badge badge-warning rounded px-2'>14</span>
                </div>
              </div>
              <div className='card mt-2 text-white bg-dark'>
                <div className='card-body'>
                Status Updates <span className='float-right badge badge-success rounded px-2'>1000</span>
                </div>
              </div>
              <div className='card trends mt-2 text-white bg-dark'>
                <div className='card-body'>
                Trending Right Now....
                  <div className='card mt-2 border-0 text-white bg-dark'>
                    <div className='card-body trend-heads'>
                      <h6 className='w-100 font-weight-bold'>Sports <span className='float-right badge badge-success rounded px-2'>-</span></h6>
                      <div className='card mt-2 text-white bg-dark inner'>
                        <div className='card-body'>
                        Manu - Psg <span className='float-right badge badge-danger rounded px-2'>0 - 2</span>
                        </div>
                      </div>
                      <div className='card mt-2 text-white bg-dark inner'>
                        <div className='card-body'>
                        ManCity - Liverpool <span className='float-right badge badge-danger rounded px-2'>0 - 9</span>
                        </div>
                      </div>
                    </div>
                    <div className='card-body trend-heads'>
                      <h6 className='w-100 font-weight-bold'>Entertainment <span className='float-right badge badge-success rounded px-2'>-</span></h6>
                      <div className='card mt-2 text-white bg-dark inner'>
                        <div className='card-body'>
                        Kanu Ibise just posted a video !!!! <span className='float-right'>(<strong>2 mins ago !!!</strong>)</span>
                        </div>
                      </div>
                      <div className='card mt-2 text-white bg-dark inner'>
                        <div className='card-body'>
                        Kevin Hart is Live !!! <span className='float-right badge badge-danger rounded px-2'>Watch</span>
                        </div>
                      </div>
                    </div>
                    <div className='card-body trend-heads'>
                      <h6 className='w-100 font-weight-bold'>Programming <span className='float-right badge badge-success rounded px-2'>-</span></h6>
                      <div className='card mt-2 text-white bg-dark inner'>
                        <div className='card-body'>
                        Ojukwu Chibuzor hates on React again....<span className='float-right'>(<strong>30 Seconds ago !!!</strong>)</span>
                        </div>
                      </div>
                      <div className='card mt-2 text-white bg-dark inner'>
                        <div className='card-body'>
                        Chibuike Posted "Da God of Server Side Engineering......"<span className='float-right'>(<strong>30 Seconds ago !!!</strong>)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='card mt-2 text-white bg-dark'>
                <div className='card-body'>
                Live Chats <span className='float-right badge badge-danger rounded px-2'>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}









function mapStateToProps ({ posts, auth }) {
  console.log(posts)
  return { posts: posts, auth }
}

export default connect(mapStateToProps, { fetchposts, togg })(withToastManager(HomeFeed))

