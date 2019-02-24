import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import { ToastConsumer, ToastProvider, withToastManager } from 'react-toast-notifications'



class LoginForm extends Component {
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
    this.props.login(values, () => {
      const { history } = this.props
      history.push('')
      this.props.toastManager.add("You've been logged in.", { appearance: 'success' })
    })
  }
  render () {
    // In using redux form the submit function is not really handled
    // by redux-form so we have to involve redux-form in the submittal
    //

    const { handleSubmit } = this.props
    // dis is pulled from the form helper that is included in content
    console.log(this.props)
    return (
      <div className='login'>
        <div className='container pado'>
          <div className='row px-2 justify-content-center'>
            <form className='p-3 col-md-6 col-lg-6 text-white bg-dark' onSubmit={handleSubmit(this.onSubmit.bind(this))}>

              <h4 className='text-center'>Login</h4>
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
              <div className='w-100 text-center'>
                <button type='submit' className='btn btn-info rounded px-5 py-2 my-1'>Submit</button>

              </div></form>
          </div>
          <p className='text-right text-white'>Don't have an account yet ?
            <span>
              <Link to='/signup' className='btn btn-info m-3'>Sign Up</Link></span></p>

        </div>
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

function mapStateToProps ({ auth }) {
  return { authx: auth }
}

export default reduxForm({
  validate, // converted to ES6 syntax (validate: validate)
  form: 'LoginForm'
})(connect(mapStateToProps, { login })(withToastManager(LoginForm)))
