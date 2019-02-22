import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createpost } from '../actions/notes'
import { FaBitcoin,FaPaperPlane,FaHome,FaReact, FaPython,FaArrowAltCircleDown } from 'react-icons/fa'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'
import _ from 'lodash'

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

const FILE_FIELD_NAME = 'files'
const hello = ()=>{
  alert('dropped!!')
}



class PostsNew extends Component {

  constructor(props){
    super(props)
    this.state = {
      files:[]
    }
    this.handleChange = this.handleChange.bind(this)
    this.renderFile = this.renderFile.bind(this)
  }

  renderField (field) {
    const { meta: { touched, error } } = field
    console.log(field)
    const className = `form-group ${touched && error ? 'has-danger'
      : touched && !error ? 'has-none' : ''}`

    // field.meta.error is an automatic property added to field object
    // from validate function
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control rounded'
          type={`${field.type}`}
          {...field.input}
        />
        <div className='text-danger'>
          <small>{touched ? error : ''}</small>
        </div>
      </div>
    )
  }

  renderFile(){
    return(
    this.state.files.map(file => {
            return (
              <div className='row h-100 p-3 align-middle justify-content-center' key={file.name}>
            <img 
            src={file.preview}
            style={{ width: '150px',height: '100%' }}/>
            </div>
            )
          }))
  }


  
  // different states of your form
  // a. pristine( no  input yet)
  // b. touched()
  // c. invalid

  // Dry up your code once you seetwo pieces of JSX looking similar
  // Dont duplicate logic, you can pass arbitrry properties in the component
  // and they would be passed to the field props.. it can be any name you choose

  onSubmit (values, event) {
    values['image'] = this.state.files[0]
    let body = new FormData()
    body.append('name', values.name)
    body.append('heading', values.heading)
    body.append('description', values.description)
    body.append('image', this.state.files[0])
    console.log(body)
    this.props.createpost(body, () => {
      this.props.history.push('/posts/')
    })
    this.props.reset()
  }

  onDrop = (acceptedFiles, rejectedFiles) =>{
    this.setState({files:acceptedFiles.map(file=>Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))})
  }

  handleDrop(event){
    console.log('happy')
  }

  handleChange = (acceptedFiles,event) =>{
    this.setState({files:acceptedFiles.map(file=>Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))})
    console.log(event)
    console.log(acceptedFiles)
  }

  renderDropzone(field){
    return(
      <div className='bg-dark p-2 text-white'>
        Hello, how you dey?
        <Dropzone accept='image/jpeg, image/png' onDrop={
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

                {files}


              </div>
            </div>
             
          )
        }}
      </Dropzone>
      </div>)
  }

  onCancel(){
    this.setState({files:[]})
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
        <div className='container text-center pt-5'>
          <h2 className='text-white font-weight-bold'>Hello, create a new post here</h2>
          <div className='row px-2 pt-5 justify-content-center'>
            <form enctype="multipart/form-data"  className='col-sm-7 col-md-7 col-lg-7 bg-dark text-white text-center rounded col-md-6 p-3' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <p className='python'>
          <span className='ml-2'>
            <FaPython style={{color:'#490'}} /></span><span className='ml-2'>
            <FaReact style={{color:'#17D'}} /></span></p>
              <Field
                label='Name'
                name='name'
                type='text'
                component={this.renderField}
              />
              <Field
                label='Heading'
                name='heading'
                type='text'
                component={this.renderField}
              />
              <Field
                label='Description'
                name='description'
                type='text'
                component={this.renderField}
              />
              <Field 
                name='image'
                type='file'
                component={this.renderDropzone.bind(this)}
              />
              <button type='submit' className='btn btn-primary rounded-0 my-3 mx-2'>
              Submit
              <span className='ml-2 float-right'>
              <FaPaperPlane/></span></button>
              
              <Link to='/posts' className='btn btn-success rounded-0 mx-2 my-3'>Cancel<span className='ml-2 float-right'>
              <FaHome/></span></Link>
            </form>
          </div></div></div>
    )
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

export default reduxForm({
  validate, // converted to ES6 syntax (validate: validate)
  form: 'PostsNewForm'
})(connect(null, { createpost })(PostsNew))
















