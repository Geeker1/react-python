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
  render () {
    return (
      <main>
        <Modal />
        <div className='d-flex py-4 justify-content-around'>
          <div className='col-sm-3 left-navigation'>
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
                <div className='card-body'>
                Understanding me is the first step you should take
                 in achieving your goals, sorry Lorem Ipsum couldn't suffice,
                 #kingofjudah #maketheworldabetterplace
                </div>
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
              <div className='card mt-2 text-white bg-dark main-content' />
            </div>
          </div>
          <div className='col-sm-3 right-content'>
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

export default HomeFeed
