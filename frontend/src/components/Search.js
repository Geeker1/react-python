import React,{Component} from 'react'
import {connect} from 'react-redux'
import {serch} from '../actions/notes'
import _ from 'lodash'
import Result from './Result'

const Search = (props)=>{

	const onInputChange=()=>{
		props.fetch()
		console.log(true)
	}
	console.log(props)
	return (
		<div>
		<form className='form-inline my-2 my-md-0'>
            <input onChange={(e)=>{onInputChange()}} className='form-control' type='text' placeholder='Search' aria-label='Search' />
          </form>
          </div>
	)
}


export default Search