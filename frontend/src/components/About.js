import React from 'react'
import { FaGithub, FaPinterestSquare, FaQuestionCircle, FaProductHunt, FaArrowAltCircleDown, FaPhoenixFramework } from 'react-icons/fa'
import { MdAddShoppingCart } from 'react-icons/md'
import lo from '../img/kris.jpg'
const About = () => {
  const style = {
    color: '#000',
    fontWeight: 'bolder'
  }
  const img ={
    height:'150px',
    width:'200px',
    maxWidth:'100%'
  }
  let initial = false
  return (

    <div className='container text-center mt-5 pt-4'>
    <div className='row mb-4 justify-content-center'>
      <img src={lo} style={img} />
    </div>
      <p className='about'>Hello there, I decided to create this platform because I felt
			the need to give the photographers the opportunity to express themselves and showcase
			their talents and show case their talents to the world,
			In this vast age of technologies cutting out peoples jobs even peoples are not required to do certain things inthe world again and this is the
			 reason why I created this platform to be able to let users upload pictures where prospects can look for
			 stuffs to do,I am so happy that I was able toachieve this feat, to create
			 a platformin which users can engage in searching for beneficial pixctures
			  to use for their projects<span className='float-right'><FaQuestionCircle /></span></p>
      <p style={style}>Check out my social links below:</p>
      <p className='pytho'><span><FaArrowAltCircleDown /></span>
      </p>
      <div className='bg-dark python p-3 mb-5'>
        <p className='p-0 m-0'>
          <span><FaGithub /></span>
          <span><FaPinterestSquare /></span>
          <span><FaProductHunt /></span>
          <span><FaPhoenixFramework /></span>
        </p>
      </div>
    </div>
  )
}

export default About
