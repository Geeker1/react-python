import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { update, fetchupdate } from '../actions/notes'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import { FaBitcoin,FaPaperPlane,FaHome,FaReact, FaPython,FaArrowAltCircleDown } from 'react-icons/fa'
import { ToastConsumer, ToastProvider, withToastManager } from 'react-toast-notifications'


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};


const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
  marginTop: '0.5rem'
};

class PostEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      files:[],
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    const { pk } = this.props.match.params
    this.props.fetchupdate(pk, () => {
    this.props.initialize(this.props.initialValues)
    this.setState({ file:this.props.initialValues.image })
    })

  }

    handleChange = (acceptedFiles,event) =>{
    this.setState({files:acceptedFiles.map(file=>Object.assign(file, {
      preview: URL.createObjectURL(file)
    })), file:null})
    console.log(event)
    console.log(acceptedFiles)
  }

  renderField (field) {
    const { meta: { touched, error } } = field
    console.log(this.state)
    const { name } = this.props.post
    console.log(field)
    console.log(this.state)
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
        <div className='text-danger text-center'>
          <small>{touched ? error : ''}</small>
        </div>
      </div>
    )
  }

  renderDropzone(field){
    console.log(field)
    return(
      <div className='bg-dark p-2 text-white'>
        Hello, how you dey?
        <Dropzone accept='image/jpeg, image/png' multiple={false} onDrop={
          ( filesToUpload, event ) => field.input.onChange(this.handleChange(filesToUpload,event))
        }>
        {({getRootProps, getInputProps, isDragActive}) => {
          console.log(getInputProps())
          console.log(getRootProps())
          const arrow = {
              color: 'white'
          }
          const files = this.state.files.map(file => {
            return (
              <div className='row h-100 p-3 align-middle justify-content-center' key={file.name}>
            <img 
            src={file.preview}
            style={{ width: '150px',height: '100%' }}/>
            </div>
            )
          })
          return (
            <div
              {...getRootProps({
                onClick:  event => console.log(event)
              })}
              className={classNames('dropzone','container', {'dropzone--isActive': isDragActive})}
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop files here...</p> :
                  <p>Try dropping some files here, or click to select files to upload.</p>
              }
              <p className='python' style={{ arrow }}><span><FaArrowAltCircleDown /></span>
      </p>
            <div 
            className='container'
            style={{ 
              height:'150px',
              border:'3px solid white'
              }}>

                {this.state.file ?
                <div className='row h-100 p-3 align-middle justify-content-center'>
            <img 
            src={this.state.file}
            style={{ width: '150px',height: '100%' }}/>
            </div>  :files}


              </div>
            </div>
             
          )
        }}
      </Dropzone>
      </div>)
  }

  // Dry up your code once you seetwo pieces of JSX looking similar
  // Dont duplicate logic, you can pass arbitrry properties in the component
  // and they would be passed to the field props.. it can be any name you choose

  onSubmit (values) {
    const { pk } = this.props.match.params
    if(this.state.files){
      values['image'] = this.state.files[0]
    }
    else{
      values['image'] = this.state.file
    }
    let body = new FormData()
    body.append('name', values.name)
    body.append('heading', values.heading)
    body.append('description', values.description)
    body.append('image', values['image'])
    this.props.update(pk, body, (error) => {
      if(error){
        this.props.toastManager.add('Error Submitting Form, try again later', {appearance:'error'})
      }else{
        this.props.toastManager.add('Edit Complete', { appearance: 'success' })
        this.props.history.push('/posts/')
      }
    })
  }

  render () {
    // In using redux form the submit function is not really handled
    // by redux-form so we have to involve redux-form in the submittal
    //

    const { handleSubmit, post } = this.props
    if (!post) {
      return (<h3>Loading...</h3>)
    } else {

      // let cv
      // if(this.props.error){
      //   _.forEach(this.props.error.image, (file)=>{this.props.toastManager.add(`${file}`,{appearance:'success'})})
      // }else{
      //   cv = 'No error yet'
      // }
      
      // console.log(cv)
      // dis is pulled from the form helper that is included in content
      console.log(this.props)
      const { name, heading, description } = this.props.post

      return (
        <div className='login'>
          <div className='container pt-3'>

            <h2 className='text-center pt-5 text-white text-uppercase header'>Edit {name} post</h2>
            <div className='row justify-content-center px-2 mt-3 text-center'>
              <form
                className='px-2 bg-dark p-3 text-white rounded col-md-7 col-lg-7'
                onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  label='Name'
                  name='name'
                  type='text'
                  valu={name}
                  placeholder='Name'
                  component={this.renderField.bind(this)}
                />
                <Field
                  label='Heading'
                  name='heading'
                  type='text'
                  valu={heading}
                  component={this.renderField.bind(this)}
                />
                <Field
                  label='Description'
                  name='description'
                  valu={description}
                  component={this.renderField.bind(this)}
                />
                <Field 
                name='image'
                type='file'
                component={this.renderDropzone.bind(this)}
              />

                <button type='submit' className='btn btn-primary rounded-0 my-3 mx-2'>Submit</button>
                <Link to='/posts' className='btn btn-success rounded-0 mx-2 my-3'>Cancel</Link>

              </form>

            </div>

          </div>
        </div>
      )
    }
  }
}

// define a helper function to validate the form and pass it to redux
// form helper
// name property must be identical to show up in errors object
function validate (values) {
  // inorder to validate input return a object we create from validate
  // function....
  const errors = {}
  // Validate the input from 'values'

  if (!values.name) {
    errors.name = 'Enter a name'
  }

  if (!values.heading) {
    errors.heading = 'Enter a heading'
  }

  if (!values.description) {
    errors.description = 'Enter a Description'
  }

  // if (!values.agree || values.agree == false) {
  //  errors.agree = 'Hello'
  // }

  // if errors is empty the form is ready to submit,
  // else there is a problem and redux form displays errors object
  return errors
}


function mapStateToProps ({ posts }, ownProps) {
  console.log(posts)
  const post = posts[ownProps.match.params.pk]
  return { post: post,
    initialValues:posts.initialValues,error:posts.act
  }
}

export default reduxForm({
  validate, // converted to ES6 syntax (validate: validate)
  form: 'PostEditForm',
})(connect(mapStateToProps, { update, fetchupdate })(withToastManager(PostEdit)))
