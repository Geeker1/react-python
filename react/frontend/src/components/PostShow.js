import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchpost, deletePost, fetchposts, togg } from '../actions/notes'
import { add_to_cart } from '../actions/cart'
import { Link } from 'react-router-dom'
import logo from '../woah.svg'
import detail from '../img/kris.jpg'
import { FaHeart, FaTrash,FaRobot } from 'react-icons/fa'
import {ToastConsumer, ToastProvider, withToastManager} from 'react-toast-notifications'

class PostShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: {
        quantity: ''
      },
      quantity: 5,
      id: 1,
      colors: {
        name: 'hello',
        code: 'VVBGFD'
      }
    }
    this.add = this.add.bind(this)
  }

  componentDidMount () {
    const { pk } = this.props.match.params
    this.props.fetchpost(pk)
  }

  onDeleteClick () {
    const { pk } = this.props.match.params
    const { history } = this.props
    this.props.deletePost(pk, () => {
      history.push('/posts/')
    })
  }

  add (quantity, id, colors) {
    this.props.add_to_cart(quantity, id, colors)
    const { cart } = this.props
    this.setState({
      quantity: 13,
      id: 5,
      colors: {
        name: 'get out', code: 'WERTER'
      } })
  }

  render () {
    console.log(this.props)
    const { cart, auth } = this.props
    const { post, history } = this.props
    console.log(post)
    console.log(auth)
    const { pk } = this.props.match.params
    const { id, colors, quantity } = this.state
    if (!post) {
      return (<h3>Loading....</h3>)
    } else {
      const check = _.map(post.users_like, (hey) => {
        return hey.username
      })

      return (
        <div className='container justify-content-center py-3 mt-4'>
        <div className='p-2 bg-dark mb-3 text-white text-center'>
          <h3 className='font-weight-bold'>{post.name}</h3>
          <h5 className='font-italic'>"{post.heading}"
          <span 
          className='badge badge-pill text-white float-right badge-warning'>
            {post.users_like.length} likes
            </span></h5>
        </div>
        <div className='text-right'>
        {check.includes(auth.user) ? <button className='btn my-2 btn-warning'
              onClick={() => { this.props.togg(pk) }}>
            UnLike
            </button>
              : <button className='btn my-2 btn-info'
                onClick={() => { this.props.togg(pk) }}
              >Like</button>}</div>
          <img className='edit w-100 mb-4' src={post.image} />
          <div className='row justify-content-center'>
            <div className='w-100 text-center'>
              <button
                className='btn btn-danger mx-2 text-left rounded-0'
                onClick={this.onDeleteClick.bind(this)}>
        Delete Post<span className='float-right ml-2'><FaTrash/></span>
              </button>
              <button
                className='btn btn-info mx-2 rounded-0 text-right'
                onClick={() => { history.push(`/posts/edit/${pk}`) }}>
        Edit Post<span className='float-right ml-2'><FaRobot/></span>
              </button>
            </div>

            <p className='text-center mt-3'>
            {post.description}
            </p>
            <div className='text-center w-100'>
            <Link className='btn btn-success my-3' to='/posts'>Home</Link>
            </div>
            
              <ToastConsumer>{({ add }) => (
                <button className='btn btn-danger' onClick={(e) => add(`Notified by ${e.target}`,{appearance:'success'})}>
                  Toasty
                </button>
              )}</ToastConsumer>
            
            
          </div>
        </div>
      )
    }
  }
}

// ownprops

function mapStateToProps ({ posts, auth }, ownProps) {
  console.log(posts)
  return { post: posts[ownProps.match.params.pk], auth, }
}
export default connect(mapStateToProps, { add_to_cart, fetchpost, fetchposts, deletePost, togg })(PostShow)
