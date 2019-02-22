import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../actions/auth'

class SignForm extends Component {

  state = {
    username: "",
    password: ""
  }
  componentDidMount(){
    console.log(this.props)
  }

  renderField (field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger'
      : touched && !error ? 'has-none' : ''}`

    // field.meta.error is an automatic property added to field object
    // from validate function
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control rounded-0'
          type={`${field.type}`}
          {...field.input}
        />
        <div className='text-danger'>
          <small>{touched ? error : ''}</small>
        </div>
      </div>
    )
  }

  onSubmit (values) {
    this.props.signup(values, () => {
      this.props.history.push('/posts/')
    })
    this.props.reset()
  }
  render () {
    // In using redux form the submit function is not really handled
    // by redux-form so we have to involve redux-form in the submittal
    //

    const { handleSubmit } = this.props
    // dis is pulled from the form helper that is included in content
    console.log(this.props)
    return (
      <div>
        <h2>Sign up Form</h2>
        <form className='px-2' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label='Username'
            name='username'
            type='text'
            component={this.renderField}
          />
          <Field
            label='Password'
            name='password'
            type='password'
            component={this.renderField}
          />

          <button type='submit' className='btn btn-primary rounded-0 my-3 mx-2'>Submit</button>
          <Link to='/posts' className='btn btn-success rounded-0 mx-2 my-3'>Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate (values) {
  // inorder to validate input return a object we create from validate
  // function....
  const errors = {}
  // Validate the input from 'values'

  if (!values.username) {
    errors.name = 'Enter a name'
  }

  if (!values.password) {
    errors.password = 'Enter a password'
  }

  // if (!values.agree || values.agree == false) {
  //  errors.agree = 'Hello'
  // }

  // if errors is empty the form is ready to submit,
  // else there is a problem and redux form displays errors object
  return errors
}

const mapStateToProps = ({auth}) =>{
  return { authx: auth }
}

export default reduxForm({
  validate, // converted to ES6 syntax (validate: validate)
  form: 'SignUpForm'
})(connect(mapStateToProps, { signup })(SignForm))
