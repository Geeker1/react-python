import React from 'react'

import { MainMenu } from './menu'

const PageTemplate = ({ children }) => {
  <div className='page'>
    <MainMenu />
    {children}
  </div>
}
