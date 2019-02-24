import React, { Component } from 'react'
import log from '../img/green.jpg'

let Modal = () => {
  return (
    <div><div id='exampleModalLive' className='modal fade' tabindex='-1' role='dialog' aria-labelledby='exampleModalLiveLabel' aria-hidden='true'>
      <div className='modal-dialog modal-lg' role='document'>
        <div className='modal-content bg-dark text-white'>
          <div className='modal-header border-0'>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          
          <div className='modal-body'>
            <div className='container'>
            <div className='row justify-content-center'>
          <img style={{ height: '50px', width: '50px' }} src={log} />
          </div>
          <div className='row justify-content-center'>
            <h5 className='pt-3 text-center font-weight-bold' id='exampleModalLiveLabel'>Codex Camp</h5>
          </div>
              <div className='row'>
                <p className='w-100 font-weight-bold text-center'>
              All friends gotten so far
                </p>
              </div>
              <div className='row pt-3'>
              <div className='col-sm-1'></div>
              <div className='col-sm-10 left-nb'>
                <div className='bg-white rounded d-flex mt-2 text-dark justify-content-around font-weight-bold px-3 py-3'>
                  <img src={log} style={{height:'50px',width:'50px'}} />
                  <div className='px-2'><p className='font-weight-bold pt-2 align-middle'>Ibaakee Keaniabarido Ledum (Just a normal guy...)</p></div>
                </div>
                <div className='bg-white rounded d-flex mt-2 text-dark justify-content-around font-weight-bold px-3 py-3'>
                  <img src={log} style={{height:'50px',width:'50px'}} />
                  <div className='px-2'><p className='font-weight-bold pt-2 align-middle'>Ojukwu Chibuzor (Javascript Developer and PWA Goddess)</p></div>
                </div>
                <div className='bg-white rounded d-flex mt-2 text-dark justify-content-around font-weight-bold px-3 py-3'>
                  <img src={log} style={{height:'50px',width:'50px'}} />
                  <div className='px-2'><p className='font-weight-bold pt-2 align-middle'>Obinna Odirionye (Python and Devops Boss !!!)</p></div>
                </div>
                <div className='bg-white rounded d-flex mt-2 text-dark justify-content-around font-weight-bold px-3 py-3'>
                  <img src={log} style={{height:'50px',width:'50px'}} />
                  <div className='px-2'><p className='font-weight-bold pt-2 align-middle'>Einstein Chibuzor(Nothing come out/Womanizing Developer)</p></div>
                </div>
                <div className='bg-white rounded d-flex mt-2 text-dark justify-content-around font-weight-bold px-3 py-3'>
                  <img src={log} style={{height:'50px',width:'50px'}} />
                  <div className='px-2'><p className='font-weight-bold pt-2 align-middle'>Chibuike(......Life is wicked)</p></div>
                </div>
              </div>
                
                <div className='col-sm-1'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id='privacy' className='modal fade' tabindex='-1' role='dialog' aria-labelledby='exampleModalLiveLabel' aria-hidden='true'>
        <div className='modal-dialog' role='document'>
        <div className='modal-content'>
            <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLiveLabel'>Modal title</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
          </div>
            <div className='modal-body'>
            <p>Woohoo, you're reading this text in a modal!</p>
          </div>
            <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
            <button type='button' className='btn btn-primary'>Save changes</button>
          </div>
          </div>
      </div>
      </div>
      <div id='kotton' className='modal fade' tabindex='-1' role='dialog' aria-labelledby='exampleModalLiveLabel' aria-hidden='true'>
      <div className='modal-dialog' role='document'>
          <div className='modal-content'>
          <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLiveLabel'>Modal title</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
            </div>
          <div className='modal-body'>
              <p>Woohoo, you're reading this text in a modal!</p>
            </div>
          <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary'>Save changes</button>
            </div>
        </div>
        </div>
    </div></div>
  )
}

export default Modal
