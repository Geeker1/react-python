import React from 'react'
import _ from 'lodash'
import logo from '../img/puss.jpg'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { togg, fetchpost } from '../actions/notes'

import { FaHeart } from 'react-icons/fa'

const PostRender = ({ post, posts, togg, likes,auth }) => {
  const { posts: { results }, history, handleSubmit } = post
  const {user} = auth

  const indi = () => {
    return _.map(results, post => {
      const check = _.map(post.users_like, (hey) => {
        return hey.username
      })

      return (
        <div className='col-md-6 py-2 col-lg-4' key={post.pk}>
          <div className='ledum' onClick={() => { history.push(`/posts/${post.pk}`) }}>
            <img className='img-post w-100' src={post.image} />
          </div>
          <div className='py-2 code px-2 clearfix'>
            <h6 className='pt-2 font-weight-bold' onClick={() => { history.push(`/posts/${post.pk}`) }}>{post.name}</h6>
            <span className='bg-dark text-white rounded p-2 text-center'>
            <strong>{post.users_like.length}</strong> likes</span>

            {check.includes(user) ? <span className='badge badge-pill text-white float-right badge-warning'
              onClick={() => { togg(post.pk) }}>
            UnLike
            </span>
              : <span className='badge float-right badge-pill badge-info'
                onClick={() => { togg(post.pk) }}
              >Like<span className='ml-2 float-right'>
              <FaHeart/>
            </span></span>}

          </div>

        </div>
      )
    })
  }
  return (
    <div className='row'>
      {indi()}
    </div>
  )
}

function validate (values) {
  // inorder to validate input return a object we create from validate
  // function....
  const errors = {}

  // if (!values.agree || values.agree == false) {
  //  errors.agree = 'Hello'
  // }

  // if errors is empty the form is ready to submit,
  // else there is a problem and redux form displays errors object
  return errors
}

function mapStateToProps ({ posts, auth }) {
  console.log(posts)
  return { posts, auth }
}

// is localStorage in react

export default connect(mapStateToProps, { fetchpost, togg })(PostRender)
